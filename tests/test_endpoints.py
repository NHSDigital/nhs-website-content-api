"""
See
https://github.com/NHSDigital/pytest-nhsd-apim/blob/main/tests/test_examples.py
for more ideas on how to test the authorization of your API.
"""
import requests
import pytest
from os import getenv
import os


def test_ping(nhsd_apim_proxy_url):
    os.environ["PROXY_NAME"] = "dev"
    resp = requests.get(f"{nhsd_apim_proxy_url}/_ping")
    assert resp.status_code == 200


def test_wait_for_ping(nhsd_apim_proxy_url):
    retries = 0
    resp = requests.get(f"{nhsd_apim_proxy_url}/_ping")
    deployed_commit_id = resp.json().get("commitId")

    while (deployed_commit_id != getenv('SOURCE_COMMIT_ID')
           and retries <= 30
           and resp.status_code == 200):
        resp = requests.get(f"{nhsd_apim_proxy_url}/_ping")
        deployed_commit_id = resp.json().get("commitId")
        retries += 1

    if resp.status_code != 200:
        pytest.fail(f"Status code {resp.status_code}, expecting 200")
    elif retries >= 30:
        pytest.fail("Timeout Error - max retries")

    assert deployed_commit_id == getenv('SOURCE_COMMIT_ID')


@pytest.mark.smoketest
@pytest.mark.skip(reason="Dont need to run on prod")
def test_status_endpoint(nhsd_apim_proxy_url, status_endpoint_auth_headers):
    resp = requests.get(
        f"{nhsd_apim_proxy_url}/_status", headers=status_endpoint_auth_headers
    )
    assert resp.status_code == 200
    status_json = resp.json()
    assert status_json["status"] == "pass"


def test_wait_for_status(nhsd_apim_proxy_url, status_endpoint_auth_headers):
    retries = 0
    resp = requests.get(f"{nhsd_apim_proxy_url}/_status", headers=status_endpoint_auth_headers)
    deployed_commit_id = resp.json().get("commitId")

    while (deployed_commit_id != getenv('SOURCE_COMMIT_ID')
           and retries <= 30
           and resp.status_code == 200
           and resp.json().get("version")):
        resp = requests.get(f"{nhsd_apim_proxy_url}/_status", headers=status_endpoint_auth_headers)
        deployed_commit_id = resp.json().get("commitId")
        retries += 1

    if resp.status_code != 200:
        pytest.fail(f"Status code {resp.status_code}, expecting 200")
    elif retries >= 30:
        pytest.fail("Timeout Error - max retries")
    elif not resp.json().get("version"):
        pytest.fail("version not found")

    assert deployed_commit_id == getenv('SOURCE_COMMIT_ID')


def test_app_unauthorised(nhsd_apim_proxy_url, nhsd_apim_auth_headers):
    resp = requests.get(f"{nhsd_apim_proxy_url}/conditions/", headers=nhsd_apim_auth_headers)
    assert resp.status_code == 401  # unauthorized


@pytest.mark.nhsd_apim_authorization({"access": "application", "level": "level3"})
def test_app_level3(nhsd_apim_proxy_url, nhsd_apim_auth_headers):
    resp = requests.get(f"{nhsd_apim_proxy_url}/conditions/", headers=nhsd_apim_auth_headers)
    assert resp.status_code == 401


@pytest.mark.nhsd_apim_authorization(
    {
        "access": "healthcare_worker",
        "level": "aal3",
        "login_form": {"username": "656005750104"},
    }
)
def test_cis2_aal3(nhsd_apim_proxy_url, nhsd_apim_auth_headers):
    resp = requests.get(f"{nhsd_apim_proxy_url}/conditions/", headers=nhsd_apim_auth_headers)
    assert resp.status_code == 401
