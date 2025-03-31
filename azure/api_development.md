# NHS Website Content API Update and Release Process

This document outlines the steps involved in updating the NHS Website Content API, from making code changes to deploying them to production.

## 1. Prerequisites and Setup

*   **Development Environment:**
    *   Use the provided VSCode Dev Container for an automated setup.
    *   Alternatively, manually install `make`, NodeJS (`npm`), Python (`poetry`), and Java 8+.
*   **Install Dependencies:** Run `make install` in the project root directory. This installs both Node and Python dependencies.
*   **Install Git Hooks:** Run `make install-hooks` to set up pre-commit hooks that help prevent committing invalid changes.
*   **Environment Variables:** Configure necessary environment variables (e.g., for API keys, tokens). Using `direnv` with a local `.envrc` file is recommended.

## 2. Making Changes

*   **Create a Branch:** Create a new feature branch from the `master` branch. Follow the naming convention: `apm-nnn-short-issue-description` (where `apm-nnn` is the relevant Jira ticket number).
*   **Implement Changes:** Modify the necessary files:
    *   **API Specification:** Edit files within the `specification/` directory (primarily `nhs-website-content-api.yaml` and files in `specification/components/`).
    *   **Sandbox Implementation:** Update the NodeJS sandbox application in the `sandbox/` directory if required.
    *   **Apigee Proxies:** Modify proxy definitions in `proxies/live/` or `proxies/sandbox/`.
    *   **Tests:** Add or update tests in the `tests/` directory.
    *   **Scripts/Tooling:** Update files in `scripts/` or the `Makefile` if necessary.
*   **Commit Changes:** Commit your work frequently with clear messages following the format:
    ```
    APM-NNN Summary of changes

    Longer description of changes if explaining rationale is necessary...
    ```

## 3. Local Validation

*   **Linting:** Run `make lint` to check code style and specification validity. The pre-commit hooks should also run linters automatically.
*   **Build Specification:** Run `make publish` to bundle the OpenAPI specification into a single file in the `build/` directory. This helps catch resolution errors.
*   **Preview Specification:** Run `make serve` to view a human-readable version of the specification locally at `http://127.0.0.1:5000`.
*   **Local Testing (Conceptual):** While the `Makefile` includes targets like `make test`, running these directly in the VSCode terminal might not work as the full execution context (like dependent services) exists within deployed containers. These tests are primarily designed to be run within the CI/CD pipeline. If manual testing against a locally running sandbox (via Docker) is needed, you would typically use `docker compose exec` to run commands like `pytest` within the appropriate container.

## 4. Pull Request and Code Review

*   **Push Branch:** Push your feature branch to the GitHub repository.
*   **Create Pull Request (PR):** Open a PR from your feature branch targeting the `master` branch.
    *   Ensure the PR title and description are clear and link to the relevant Jira ticket (APM-NNN).
*   **Automated Checks:** The PR will trigger automated workflows (defined in `.github/workflows/` and `azure/azure-pr-pipeline.yml`):
    *   Linting checks.
    *   Deployment of an ephemeral version of the API (including specification, proxy, and sandbox container) to a development environment (e.g., `internal-dev`) for testing.
*   **Code Review:** Team members review the code changes, specification updates, and test results from the ephemeral deployment.
*   **Approval:** Once the PR is approved and all checks pass, it's ready for merging.

## 5. Merging

*   **Merge:** The *reviewer* who approved the PR is responsible for merging it into the `master` branch.

## 6. CI/CD Pipeline (Azure DevOps)

*   **Trigger:** Merging to `master` automatically triggers the main Azure DevOps pipelines (`azure-build-pipeline.yml`, `azure-release-pipeline.yml`).
*   **Build (`azure-build-pipeline.yml`):**
    *   Builds the consolidated OpenAPI specification (`make publish`).
    *   Builds the Apigee proxy bundles (`make build-proxy`).
    *   Builds any necessary Docker images (e.g., the sandbox defined in `sandbox/Dockerfile` and configured in `ecs-proxies-containers.yml`).
    *   Pushes Docker images to the container registry.
    *   Packages build artifacts (spec, proxies, test files, config like `manifest_template.yml`, `ecs-proxies-deploy.yml`) for deployment.
*   **Release (`azure-release-pipeline.yml`):**
    *   Deploys the artifacts and containers sequentially to configured environments (e.g., Internal Dev -> Internal QA -> Production).
    *   Deployment includes:
        *   Apigee Proxies (Live and Sandbox).
        *   Updated API Specification to the Apigee Developer Portal.
        *   Deployment/Update of backend containers (like the Sandbox) on ECS, configured via `ecs-proxies-deploy.yml`.
    *   Runs automated tests (smoke tests, integration tests defined in `tests/` and executed via `Makefile` targets like `smoketest` or `test`) against each environment after deployment (`azure/templates/run-tests.yml`).

## 7. Production Release

*   **Promotion:** After successful deployment and testing in pre-production environments (e.g., Internal QA), the release pipeline promotes the changes to the Production environment.
*   **Post-Release Checks:** Smoke tests (`make smoketest-prod`) are typically run against the production environment to verify the deployment.
*   **GitHub Release:** A GitHub release is automatically created/updated upon merging to `master` (driven by `.github/workflows/continuous-integration.yml`).

This process ensures that changes are validated, tested, and deployed systematically across environments.