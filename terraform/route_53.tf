resource "aws_route53_record" "cdn_record" {
  zone_id = var.route53_zone_id
  name    = "media.${var.domain_name}"
  type    = "A"

  alias {
    name                   = aws_cloudfront_distribution.cdn.domain_name
    zone_id                = aws_cloudfront_distribution.cdn.hosted_zone_id
    evaluate_target_health = false
  }

  depends_on = [
    aws_cloudfront_distribution.cdn
  ]
}

resource "aws_route53_record" "cdn_record" {
  zone_id = var.route53_zone_id
  name    = var.domain_name
  type    = "A"
  ttl     = 300
  records = [aws_lb.web_lb.dns_name]

  depends_on = [
    aws_instance.web
  ]
}



