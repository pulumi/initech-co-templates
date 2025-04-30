import pulumi
from pulumi_aws import s3
from pulumi_pequod_stackmgmt import StackSettings, StackSettingsArgs

from pulumi_pequod_container_services import AppImageDeploy, AppImageDeployArgs

config = pulumi.Config()
cpu = config.get_int("cpu") or 256 
memory = config.get_int("memory") or 512

app_deployment = AppImageDeploy(f"app-image", AppImageDeployArgs(  
  docker_file_path="./app"
))

# Manage stack settings using the centrally managed custom component.
# stackmgmt = StackSettings("stacksettings") 

# Export the name of the bucket
pulumi.export("service_url", pulumi.Output.concat("http://",app_deployment.loadbalancer_dns_name))
