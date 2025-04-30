import * as pulumi from "@pulumi/pulumi";
/**
 * A component that deploys a containerized application to AWS ECS Fargate.
 */
export declare class ContainerApp extends pulumi.ComponentResource {
    /**
     * Returns true if the given object is an instance of ContainerApp.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is ContainerApp;
    /**
     * The URL to the ECS service metrics dashboard.
     */
    readonly metricsUrl: pulumi.Output<string>;
    /**
     * The URL of the deployed application.
     */
    readonly url: pulumi.Output<string>;
    /**
     * Create a ContainerApp resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ContainerAppArgs, opts?: pulumi.ComponentResourceOptions);
}
/**
 * The set of arguments for constructing a ContainerApp resource.
 */
export interface ContainerAppArgs {
    albCertArn?: pulumi.Input<string>;
    appPath?: pulumi.Input<string>;
    appPort: pulumi.Input<number>;
    cpu?: pulumi.Input<string>;
    desiredCount?: pulumi.Input<number>;
    env?: {
        [key: string]: pulumi.Input<string>;
    };
    image?: pulumi.Input<string>;
    memory?: pulumi.Input<string>;
    owner?: pulumi.Input<string>;
    publicSubnetIds?: pulumi.Input<string[]>;
    secrets?: {
        [key: string]: pulumi.Input<string>;
    };
    vpcId?: pulumi.Input<string>;
}
