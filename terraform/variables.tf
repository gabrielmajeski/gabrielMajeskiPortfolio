variable "aws_region" {
  description = "AWS region to deploy resources"
  default     = "sa-east-1"
}

variable "vpc_cidr" {
  description = "CIDR block for the VPC"
  default     = "10.0.0.0/16"
}

variable "public_subnets" {
  description = "List of public subnet CIDR blocks"
  type        = list(string)
  default     = ["10.0.1.0/24", "10.0.2.0/24"]
}

variable "instance_type" {
  description = "EC2 instance type"
  default     = "t2.micro"
}

variable "ami_id" {
  description = "AMI ID for the web server"
  default     = "ami-07a943af5a5ec252b" # Amazon Linux 2 Kernel 5.10 AMI 2.0.20240816.0 x86_64 HVM gp2
}

variable "s3_bucket_name" {
  description = "Name of the S3 bucket for media files"
}

variable "domain_name" {
  description = "Domain name for Route53"
}

variable "route53_zone_id" {
  description = "Route53 Hosted Zone ID"
}

variable "key_name" {
  description = "Key pair name for SSH access"
}

variable "allowed_ssh_ip" {
  description = "IP address allowed to SSH into the EC2 instance"
}

variable "availability_zones" {
  description = "List of availability zones to be used for subnets"
  type        = list(string)
  default     = ["sa-east-1a", "sa-east-1b"]
}
