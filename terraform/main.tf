provider "aws" {
  region = "ap-southeast-2"
}

resource "aws_s3_bucket" "terraform_state" {
  bucket = "bsf-terraform-state-bucket" # Replace with a unique name
}

resource "aws_dynamodb_table" "terraform_lock" {
  name         = "bsf-terraform-lock-table"
  billing_mode = "PAY_PER_REQUEST"
  hash_key     = "LockID"
  attribute {
    name = "LockID"
    type = "S"
  }
}

# S3 Bucket
resource "aws_s3_bucket" "bsf_bucket" {
  bucket = var.bucket_name
}

resource "aws_s3_object" "bsf_build_files" {
  for_each = fileset("${path.module}/../build", "**")
  bucket   = aws_s3_bucket.bsf_bucket.id
  key      = each.key
  source   = "${path.module}/../build/${each.key}"
  content_type = lookup(
    {
      html = "text/html",
      css  = "text/css",
      js   = "application/javascript",
      png  = "image/png",
      jpg  = "image/jpeg"
    },
    split(".", each.key)[length(split(".", each.key)) - 1],
    "application/octet-stream"
  )
}

# S3 Bucket Website Configuration
resource "aws_s3_bucket_website_configuration" "bsf_website" {
  bucket = aws_s3_bucket.bsf_bucket.id

  index_document {
    suffix = "index.html"
  }
}

# Public Access Block Configuration
resource "aws_s3_bucket_public_access_block" "bsf_bucket_public_access" {
  bucket                  = aws_s3_bucket.bsf_bucket.id
  block_public_acls       = false
  ignore_public_acls      = false
  block_public_policy     = false
  restrict_public_buckets = false
}

# Upload the index.html File
resource "aws_s3_object" "index_file" {
  bucket       = aws_s3_bucket.bsf_bucket.id
  key          = "index.html"
  source       = "${path.module}/../build/index.html"
  content_type = "text/html"
}

resource "aws_s3_bucket_metric" "frontend_metrics" {
  bucket = aws_s3_bucket.bsf_bucket.id

  name = "FrontendMetrics" # This is a required attribute for naming the metric configuration.

  filter {
    prefix = "/"
  }
}



resource "aws_cloudfront_distribution" "bsf_distribution" {
  enabled = true

  origin {
    domain_name = aws_s3_bucket.bsf_bucket.bucket_regional_domain_name
    origin_id   = "frontend-origin"
  }

  default_cache_behavior {
    allowed_methods        = ["GET", "HEAD"]
    cached_methods         = ["GET", "HEAD"]
    target_origin_id       = "frontend-origin"
    viewer_protocol_policy = "redirect-to-https"
  }

  logging_config {
    bucket          = aws_s3_bucket.bsf_bucket.bucket_regional_domain_name
    include_cookies = true
    prefix          = "cloudfront-logs/"
  }

  restrictions {
    geo_restriction {
      restriction_type = "none" # Allow access from all countries
    }
  }

  viewer_certificate {
    cloudfront_default_certificate = true
  }
}

# Output the CloudFront URL
output "frontend_url" {
  value = aws_cloudfront_distribution.bsf_distribution.domain_name
}

output "bsf_bucket_name" {
  value = aws_s3_bucket.bsf_bucket.bucket
}
