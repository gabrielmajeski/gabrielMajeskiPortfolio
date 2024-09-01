REPO_ROOT=$(shell pwd)
TERRAFORM_BACKEND=$(REPO_ROOT)/terraform/backend

.PHONY: tf_init_backend tf_deploy_backend tf_destroy_backend  #tf_init tf_plan tf_apply tf_destroy

help: ## Show commands and description.
	@awk 'BEGIN {FS = ":.*?## "} /^[a-zA-Z0-9_-]+:.*?## / {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}' $(MAKEFILE_LIST)

tf_init_backend: ## Executes steps to initialize the Terraform backend.
	terraform -chdir=$(TERRAFORM_BACKEND) init

tf_deploy_backend: tf_init_backend ## Run Terraform plan and apply in the backend dir.
	terraform -chdir=$(TERRAFORM_BACKEND) plan
	terraform -chdir=$(TERRAFORM_BACKEND) apply

tf_destroy_backend: tf_init backend ## Destroy the Terraform backend infrastructure.
	terraform -chdir=$(TERRAFORM_BACKEND) destroy

