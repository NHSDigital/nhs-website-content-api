import os


def get_env(variable_name: str) -> str:
    """Returns a environment variable"""
    try:
        var = os.environ[variable_name]
        if not var:
            raise RuntimeError(f"Variable is null, Check {variable_name}.")
        return var
    except KeyError:
        raise RuntimeError(f"Variable is not set, Check {variable_name}.")


ENV = {
    # Apigee
    "environment": get_env("APIGEE_ENVIRONMENT"),
    "base_path": get_env("SERVICE_BASE_PATH"),
    "service_base_path": get_env("SERVICE_BASE_PATH"),
    "status_endpoint_api_key": get_env("STATUS_ENDPOINT_API_KEY")
}
