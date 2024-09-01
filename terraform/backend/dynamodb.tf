resource "aws_dynamodb_table" "terraform_lock" {
  name         = "terraform-lock-table-${data.aws_caller_identity.current.account_id}"
  billing_mode = "PAY_PER_REQUEST"

  attribute {
    name = "LockID"
    type = "S"
  }

  tags = {
    Name = "TerraformLockDynamoTable"
    Type = "DynamoTable"
  }

  hash_key = "LockID"
}
