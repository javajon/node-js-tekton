# Tekton Pipeline Example Using Node.js

The [Tekton Pipelines project](https://tekton.dev/) provides Kubernetes-style resources for declaring [CI](https://martinfowler.com/articles/continuousIntegration.html) / [CD](https://martinfowler.com/bliki/ContinuousDelivery.html) style pipelines. Tekton is an open-source project that formed as a sub project of the [Knative](https://knative.dev/) project in March of 2019. Using established Kubernetes style declarations whole pipelines can be declared. The pipelines run on Kubernetes like any other process. Each steps runs as an independent container. Tekton also helps normalize and standardize the terms and methods for forming and running pipelines. Tekton pipelines can compliment a variety of popular CI/CD engines. For more information also see the [Continuous Delivery Foundation (CDF)](https://cd.foundation/).

This project demonstrates the building, deploying and running a Node.js application using Tekton on Kubernetes.

**Note:** This project has been updated to work with modern versions of Tekton (v0.40+) that no longer support the deprecated `PipelineResource` type. Instead, it uses Workspaces and the `git-clone` task for source code management.

## Build and Deploy a Node.js App Using Tekton Pipeline

### Prerequisites

- Kubernetes cluster (1.25+)
- Tekton Pipelines installed (v0.40+)
- kubectl configured to access your cluster
- A container registry accessible from your cluster

### Running the Pipeline

1. Apply the pipeline resources:
```bash
kubectl apply -f pipeline/
```

2. Create and run the pipeline:
```bash
kubectl create -f pipeline/pipeline-run.yaml
```

3. Monitor the pipeline execution:
```bash
tkn pipelinerun logs application-pipeline-run -f
```

## References

This tutorial was adapted from [this other helpful tutorial](https://github.com/IBM/deploy-app-using-tekton-on-kubernetes).
