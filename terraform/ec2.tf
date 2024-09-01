resource "aws_instance" "web" {
  ami                         = var.ami_id
  instance_type               = var.instance_type
  subnet_id                   = aws_subnet.public[0].id
  vpc_security_group_ids      = [aws_security_group.web_sg.id]
  associate_public_ip_address = true
  key_name                    = var.key_name

  user_data = file("scripts/user_data.sh")

  tags = {
    Name = "PortfolioWebServer"
    Type = "EC2Instance"
  }

  depends_on = [
    aws_security_group.web_sg,
    aws_subnet.public
  ]
}
