terraform {
  required_version = ">= 0.12"
  backend "s3" {
    bucket = "terraform-state-381491983236"
    key    = "terraform.tfstate"
    region = "sa-east-1"
  }
  
}

provider "aws" {
  region = var.aws_region
}

module "acm" {
  source          = "./cdn-acm"
  domain_name     = var.domain_name
  route53_zone_id = var.route53_zone_id
  region          = "us-east-1"
}