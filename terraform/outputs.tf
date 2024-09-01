output "web_server_public_ip" {
  value = aws_instance.web.public_ip
}

output "s3_bucket_name" {
  value = aws_s3_bucket.media.bucket
}

output "cloudfront_distribution_domain" {
  value = aws_cloudfront_distribution.cdn.domain_name
}

output "route53_record_fqdn" {
  value = aws_route53_record.cdn_record.fqdn
}
