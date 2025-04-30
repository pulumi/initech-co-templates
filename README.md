# Initech Co Templates

A collection of Pulumi templates for deploying cloud infrastructure and applications.

## Available Templates

### AWS Applications

- [AWS Container Services (YAML)](./aws-container-services-yaml) - Deploys containerized applications to AWS ECS Fargate with an Application Load Balancer using YAML.
- [AWS Container Services (Python)](./aws-container-services-py) - Same as above but with Python infrastructure code.
- [CloudFront S3 CDN (YAML)](./cloudfront-s3-cdk-yaml) - Deploys a static website using CloudFront and S3 with CDK for Terraform.

### Chatbot Applications

- [Chatbot Container App (YAML)](./chatbot-container-app) - Deploys a containerized chatbot application to AWS ECS Fargate with an Application Load Balancer using YAML.
- [Chatbot Container App (TypeScript)](./chatbot-container-app-ts) - Same as above but with TypeScript infrastructure code.

### GCP Applications

- [GCP GKE (YAML)](./gcp-gke-yaml) - Deploys applications to Google Kubernetes Engine using YAML.
- [GCP GKE (Python)](./gcp-gke-py) - Same as above but with Python infrastructure code.

## Common Features

Many templates include:
- Containerized applications
- Load balancing
- Cloud logging
- Secure handling of secrets
- Resource tagging
- Monitoring and metrics

## Usage

To use any of these templates:

1. Create a new project using the template:
   ```bash
   GITHUB_TOKEN=$(gh auth token) pulumi new https://github.com/pulumi/initech-co-templates/[template-name]
   ```

2. Follow the specific instructions in each template's README for configuration and deployment.

## Contributing

We welcome contributions to these templates! Please feel free to submit issues or pull requests.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
