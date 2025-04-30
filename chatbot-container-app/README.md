# Chatbot Container App Template

This template deploys a containerized chatbot application to AWS ECS Fargate with an Application Load Balancer using the ContainerApp component.

## Features

- Deploys containerized chatbot applications to AWS ECS Fargate
- Creates or reuses VPC and subnets
- Sets up an Application Load Balancer
- Configures CloudWatch logging
- Supports environment variables and secrets
- Automatic container image building and pushing to ECR
- Resource tagging with owner information
- ECS service metrics dashboard access
- Secure networking with restricted VPC access
- Secure handling of OpenAI API key
- Configurable system prompt for chatbot behavior

## Usage

1. Create a new project using this template:
   ```bash
   GITHUB_TOKEN=$(gh auth token) pulumi new https://github.com/pulumi/initech-co-templates/chatbot-container-app
   ```

2. Configure your application:
   - Place your chatbot application code in the `app` directory
   - Update the configuration values as needed:
     ```bash
     pulumi config set aws:region us-west-2
     pulumi config set app_port 8080
     pulumi config set app_path ./app
     pulumi config set environment dev
     pulumi config set cpu 256
     pulumi config set memory 512
     pulumi config set desired_count 1
     pulumi config set owner "your-team-name"
     ```

3. Configure your OpenAI API key and AWS credentials:
   - Option 1: Set the OpenAI API key directly and configure AWS credentials separately:
     ```bash
     # Set OpenAI API key
     pulumi config set --secret openai_api_key "your-openai-api-key"
     
     # Configure AWS credentials (using one of these methods)
     # Method 1: Using AWS CLI
     aws configure
     
     # Method 2: Using environment variables
     export AWS_ACCESS_KEY_ID="your-access-key"
     export AWS_SECRET_ACCESS_KEY="your-secret-key"
     export AWS_REGION="your-region"
     ```
   - Option 2: Use a Pulumi ESC environment with pre-configured credentials:
     ```bash
     pulumi config env add [project/environment]
     ```
     This will use an environment that has both the OpenAI API key and AWS credentials configured.

4. Deploy your application:
   ```bash
   pulumi up
   ```

## Configuration Options

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `aws:region` | `string` | No | us-west-2 | The AWS region to deploy into |
| `app_port` | `string` | No | "8080" | Port the application listens on |
| `app_path` | `string` | No | "./app" | Path to the application code directory. Either this or image must be provided, but not both. |
| `environment` | `string` | No | "dev" | The environment name (dev, prod, etc.) |
| `cpu` | `string` | No | "256" | CPU units for the container (256 = 0.25 vCPU) |
| `memory` | `string` | No | "512" | Memory in MB for the container |
| `desired_count` | `string` | No | "1" | Number of tasks to run |
| `owner` | `string` | No | - | Owner tag value for all resources |
| `image` | `string` | No | - | Docker image to use. Either this or app_path must be provided, but not both. |
| `openai_api_key` | `string` | Yes | - | Your OpenAI API key (stored as a secret) |
| `system_prompt` | `string` | No | "You are a helpful AI assistant." | The system prompt that defines the chatbot's behavior and personality. Only used when using app_path. |

### Outputs

| Name | Type | Description |
|------|------|-------------|
| `url` | `string` | The URL of the deployed application |
| `metricsUrl` | `string` | The URL to the ECS service metrics dashboard |

### Environment Variables

The following environment variables are automatically set for your container:

| Name | Description |
|------|-------------|
| `ENVIRONMENT` | The environment name (dev, prod, etc.) |
| `OPENAI_API_KEY` | Your OpenAI API key (stored securely in AWS Secrets Manager) |
| `SYSTEM_PROMPT` | The system prompt that defines the chatbot's behavior (only set when using app_path) |

### Security Considerations

- All resources are tagged with `Name` and optionally `Owner`
- Secrets are stored in AWS Secrets Manager
- IAM roles follow least privilege principle
- Network access is restricted to VPC CIDR
- HTTPS is supported when `alb_cert_arn` is provided

## Resource Creation

The template creates the following AWS resources:

1. **Networking**
   - VPC
   - Public subnets
   - Internet Gateway
   - Route tables
   - Security groups

2. **Compute**
   - ECS Cluster
   - ECS Task Definition
   - ECS Service

3. **Load Balancing**
   - Application Load Balancer
   - Target Group
   - HTTP Listener

4. **Security**
   - IAM Roles and Policies
   - Secrets in AWS Secrets Manager
   - Security Groups

5. **Monitoring**
   - CloudWatch Log Group

6. **Container Registry**
   - ECR Repository (only when using app_path)
   - Docker image build and push (only when using app_path) 