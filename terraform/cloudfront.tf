resource "aws_cloudfront_origin_access_identity" "origin_identity" {
  comment = "Origin access identity for S3 bucket"
}

resource "aws_s3_bucket" "media" {
  bucket = var.s3_bucket_name

  tags = {
    Name = "MediaBucketPortfolio"
    Type = "S3Bucket"
  }
}

# resource "aws_s3_bucket_policy" "media_bucket_policy" {
#   bucket = aws_s3_bucket.media.id

#   # policy = jsonencode({
#   #   Version = "2012-10-17",
#   #   Statement = [
#   #     {
#   #       Effect = "Allow",
#   #       Principal = {
#   #         AWS = aws_cloudfront_origin_access_identity.origin_identity.iam_arn
#   #       },
#   #       Action   = "s3:GetObject",
#   #       Resource = "${aws_s3_bucket.media.arn}/*"
#   #     }
#   #   ]
#   # })
# }

resource "aws_cloudfront_distribution" "cdn" {
  origin {
    domain_name = aws_s3_bucket.media.bucket_regional_domain_name
    origin_id   = "S3-Origin"

    s3_origin_config {
      origin_access_identity = aws_cloudfront_origin_access_identity.origin_identity.cloudfront_access_identity_path
    }
  }

  enabled             = true
  is_ipv6_enabled     = true

  default_cache_behavior {
    target_origin_id       = "S3-Origin"
    viewer_protocol_policy = "redirect-to-https"
    allowed_methods        = ["GET", "HEAD", "OPTIONS"]
    cached_methods         = ["GET", "HEAD"]

    forwarded_values {
      query_string = false
      cookies {
        forward = "none"
      }
    }

    min_ttl     = 0
    default_ttl = 86400
    max_ttl     = 31536000
  }

  ordered_cache_behavior {
    path_pattern           = "/static/*"
    target_origin_id       = "S3-Origin"
    viewer_protocol_policy = "redirect-to-https"
    allowed_methods        = ["GET", "HEAD", "OPTIONS"]
    cached_methods         = ["GET", "HEAD"]

    forwarded_values {
      query_string = false
      cookies {
        forward = "none"
      }
    }

    min_ttl     = 0
    default_ttl = 86400
    max_ttl     = 31536000
  }

  viewer_certificate {
    acm_certificate_arn      = module.acm.certificate_arn
    ssl_support_method       = "sni-only"
    minimum_protocol_version = "TLSv1.2_2019"
  }

  restrictions {
    geo_restriction {
      restriction_type = "none"
    }
  }

  aliases = [var.domain_name]

  tags = {
    Name = "PortfolioCDN"
    Type = "CloudFrontDistribution"
  }

  depends_on = [
    aws_s3_bucket.media,
    aws_instance.web,
    module.acm
  ]
}

output "domain_name" {
  value = aws_cloudfront_distribution.cdn.domain_name
}

output "bucket_name" {
  value = aws_s3_bucket.media.bucket
}

output "origin_id" {
  value = aws_s3_bucket.media.id
}
