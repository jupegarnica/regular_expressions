/**
 * Should match a Kubernetes resource reference
 * (e.g. deployment/my-app, pod/nginx-abc123).
 */
export const k8sResourceName =
  /(?:pod|deployment|service|configmap|secret|ingress|daemonset|statefulset|job|cronjob|namespace|node|replicaset|pv|pvc)\/[a-z0-9][a-z0-9.-]*/;
export const k8sResourceName_description =
  "Should match a Kubernetes resource reference (e.g. deployment/my-app).";
export const k8sResourceName_should_match: string[] = [
  "deployment/my-app",
  "pod/nginx-abc123",
  "service/backend",
  "configmap/app-config",
  "secret/db-credentials",
];
export const k8sResourceName_should_not_match: string[] = [
  "deploy/my-app",
  "deployment/",
  "my-app",
  "DEPLOYMENT/my-app",
  "deployment/My-App",
];

/**
 * Should match a Kubernetes label selector
 * (e.g. app.kubernetes.io/name=my-app).
 */
export const k8sLabel = /[a-zA-Z][a-zA-Z0-9_.\/-]*=[a-zA-Z0-9][a-zA-Z0-9_.-]*/;
export const k8sLabel_description =
  "Should match a Kubernetes label selector (e.g. app.kubernetes.io/name=my-app).";
export const k8sLabel_should_match: string[] = [
  "app=nginx",
  "app.kubernetes.io/name=my-app",
  "tier=frontend",
  "env=production",
  "version=v1.0",
];
export const k8sLabel_should_not_match: string[] = [
  "=value",
  "key=",
  "123=value",
  "key value",
];

/**
 * Should match an AWS ARN
 * (e.g. arn:aws:s3:::bucket-name).
 */
export const arnAws =
  /arn:aws[a-zA-Z-]*:[a-zA-Z0-9-]*:[a-zA-Z0-9-]*:[0-9]*:[^\s]+/;
export const arnAws_description =
  "Should match an AWS ARN (e.g. arn:aws:s3:::bucket-name).";
export const arnAws_should_match: string[] = [
  "arn:aws:s3:::my-bucket",
  "arn:aws:iam::123456789012:user/johndoe",
  "arn:aws:ec2:us-east-1:123456789012:instance/i-1234567890abcdef0",
  "arn:aws:lambda:us-west-2:123456789012:function:my-function",
];
export const arnAws_should_not_match: string[] = [
  "arn:gcp:s3:::bucket",
  "aws:s3:::bucket",
  "arn:aws",
  "arn:aws:",
];
