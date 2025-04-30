import * as pulumi from "@pulumi/pulumi";
import * as containerApp from "@pulumi/container-app";

// Get the configuration
const config = new pulumi.Config();

// Create the container app
const app = new containerApp.ContainerApp("app", {
    appPath: config.require("app_path"),
    appPort: config.requireNumber("app_port"),
    cpu: config.require("cpu"),
    memory: config.require("memory"),
    image: config.get("image"),
    owner: config.get("owner"),
    env: {
        ENVIRONMENT: config.require("environment"),
        SYSTEM_PROMPT: config.get("system_prompt") || "You are a helpful AI assistant.",
    },
    desiredCount: config.requireNumber("desired_count"),
    secrets: {
        OPENAI_API_KEY: config.requireSecret("openai_api_key"),
    },
});

// Export the URLs
export const url = app.url;
export const metricsUrl = app.metricsUrl;
