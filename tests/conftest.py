# flake8: noqa
import asyncio
import uuid

import pytest
from pytest_nhsd_apim.apigee_apis import ApigeeNonProdCredentials, ApigeeClient

from tests.configuration.config import ENVIRONMENT, SERVICE_BASE_PATH
from tests.configuration.environment import get_env


@pytest.fixture()
def client():
    config = ApigeeNonProdCredentials()
    return ApigeeClient(config=config)


@pytest.fixture(scope="session")
def environment():
    return ENVIRONMENT


@pytest.fixture(scope="session")
def service_url(environment):
    if environment == "prod":
        base_url = "https://api.service.nhs.uk"
    else:
        base_url = f"https://{environment}.api.service.nhs.uk"

    service_base_path = SERVICE_BASE_PATH

    return f"{base_url}/{service_base_path}"


@pytest.fixture(scope="session")
def status_endpoint_api_key():
    return get_env("STATUS_ENDPOINT_API_KEY")


# @pytest.fixture(scope='function')
# async def api_client(api_test_config: APITestSessionConfig):
#     session_client = APISessionClient(api_test_config.base_uri)
#
#     yield session_client
#
#     await session_client.close()
#
#
# @pytest.fixture(scope="session")
# def event_loop(request):
#     loop = asyncio.new_event_loop()
#     yield loop
#     loop.close()
#
#
# @pytest.fixture(scope="session")
# async def default_apigee_app():
#     apigee_app = ApigeeApiDeveloperApps()
#     await apigee_app.create_new_app()
#
#     yield apigee_app
#
#     # Teardown
#     print("\nDestroying Default App..")
#     await apigee_app.destroy_app()


# @pytest.fixture()
# async def get_api_key(default_apigee_app):
#     if "sandbox" in ENVIRONMENT:
#         # Sandbox environments don't need authentication. Return fake one
#         return {"apikey": "not_needed"}
#
#     return {"apikey": default_apigee_app.client_id}


def make_headers(api_key):
    return {
        "apikey": api_key,
        "X-Request-Id": str(uuid.uuid4()),
        "X-Correlation-Id": str(uuid.uuid4())
    }
