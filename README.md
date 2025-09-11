# nhs-website-content-api

![Build](https://github.com/NHSDigital/nhs-website-content-api/workflows/Build/badge.svg?branch=master)

This is a specification for the *nhs-website-content-api* API.

* `specification/` This [Open API Specification](https://swagger.io/docs/specification/about/) describes the endpoints, methods and messages exchanged by the API. Use it to generate interactive documentation; the contract between the API and its consumers.
* `sandbox/` This NodeJS application implements a mock implementation of the service. Use it as a back-end service to the interactive documentation to illustrate interactions and concepts. It is not intended to provide an exhaustive/faithful environment suitable for full development and testing.
* `scripts/` Utilities helpful to developers of this specification.
* `proxies/` Live (connecting to another service) and sandbox (using the sandbox container) Apigee API Proxy definitions.

Consumers of the API will find developer documentation on the [NHS Digital Developer Hub](https://digital.nhs.uk/developer).

## Contributing
Contributions to this project are welcome from anyone, providing that they conform to the [guidelines for contribution](https://github.com/NHSDigital/nhs-website-content-api/blob/master/CONTRIBUTING.md) and the [community code of conduct](https://github.com/NHSDigital/nhs-website-content-api/blob/master/CODE_OF_CONDUCT.md).

### Licensing
This code is dual licensed under the MIT license and the OGL (Open Government License). Any new work added to this repository must conform to the conditions of these licenses. In particular this means that this project may not depend on GPL-licensed or AGPL-licensed libraries, as these would violate the terms of those libraries' licenses.

The contents of this repository are protected by Crown Copyright (C).

## Quick Start

### Prerequisites

* make
* nodejs + npm/yarn
* poetry
* Java 8+

Consider using a **dev container**. While this is in no way a requirement, you may find it more convenient.

### Get Environmental Variables

1. Make a new `.env` file in this directory, using `example.env` as a base.
1. Fill in the missing environmental variables:
    - At the time of writing, `PROXY_NAME` should be set to `nhs-website-content-api-internal-dev`.
    - You can get an `APIGEE_ACCESS_TOKEN` via the `get_token` command. If you don't already have access to the `get_token` command, you can install it using [these instructions](https://docs.apigee.com/api-platform/system-administration/auth-tools#install).
    - You can get the latest `SOURCE_COMMIT_ID` via the `/_ping` endpoint of the proxy you're using. For example, with `PROXY_NAME` set to `nhs-website-content-api-internal-dev`, we would want to access the URL https://internal-dev.api.service.nhs.uk/nhs-website-content/_ping - this should return some JSON, and the value we want has key `commitId`.

:bulb: The `make get_apigee_access_token` command provides a useful shorthand for calling `get_token` with all the right environmental variables.

### Let's Roll

1. Install by running `make install` from this directory.
1. Test this installation by running `make test`, also from this directory.