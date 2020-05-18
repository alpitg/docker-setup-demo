#### Prerequisite
  - windows home/pro
  - understanding ci/cd, docker

#### Concepts covered
  - Azure
  - Docker
  - Kubernate

#### References
  - [TechWorld with Nana](https://www.youtube.com/channel/UCdngmbVKX1Tgre699-XLlUA)
  - [Minikube and Kubectl explained | Setup for Beginners | Kubernetes Tutorial 17](https://www.youtube.com/watch?v=E2pP1MOfo3g)
  - [Create Angular App and Deploy it to Docker Hub](https://www.youtube.com/watch?v=etA5xiX5TCA&list=RDCMUCCYR9GpcE3skVnyMU8Wx1kQ&index=1)
  - [Deploy a Docker container to Kubernetes using YAML files](https://www.youtube.com/watch?v=eHvKc6hNmhI&list=RDCMUCCYR9GpcE3skVnyMU8Wx1kQ&index=2)
  - [How to build and deploy a containerized app to Azure Kubernetes Service (AKS)](https://www.youtube.com/watch?v=E9YWmbUb9Ps)

#### Create a resource group [ARG]
  ``` az group create --name myapp-rg --location eastus ```

#### Create a container registry [ACR]
  ``` az acr create --resource-group myapp-rg --name myContainerRegistry --sku Basic --admin-enabled true ```

#### Create a Kubernetes cluster [AKC]
  ``` az aks create --resource-group myapp-rg --name myapp --node-count 1 --enable-addons http_application_routing,monitoring --generate-ssh-keys --location centralus ```

#### Kubectl/Azure-cli Common commands 
```bash
  az aks get-credentials --name trackCopsContainer --resource-group track-cops-resource-group-win 

  az aks browse --resource-group track-cops-resource-group-win --name trackCopsContainer  
  
  az aks delete --resource-group myResourceGroup --name myAKSCluster --no-wait

  kubectl create clusterrolebinding kubernetes-dashboard --clusterrole=cluster-admin --serviceaccount=kube-system:kubernetes-dashboard

  kubectl apply -f my-file.yaml

  kubectl get deployments

  kubectl get services

  kubectl get nodes

  kubectl get service track-cops-angular --watch
  
  kubectl set image deployment/nginx-deployment nginx=nginx:1.16.1 --record

  kubectl port-forward pods/kubernetes-dashboard-74d8c675bc-h7nfp 10000:9090 -n kube-system

```

#### vs code & Kubernetes
  > open dashboard ->> ctrl + shift + p -> kubernetes: OpenDashboard




#### working solution 
```
  apiVersion: apps/v1
  kind: Deployment
  metadata:
    name: track-cops-angular
  spec:
    replicas: 1
    selector:
      matchLabels:
        app: track-cops-angular
    template:
      metadata:
        labels:
          app: track-cops-angular
      spec:
        containers:
        - name: track-cops-angular
          image: alpitg/trackcops:1
          resources:
            requests:
              cpu: 100m
              memory: 128Mi
            limits:
              cpu: 250m
              memory: 256Mi
          ports:
          - containerPort: 80
  ---
  apiVersion: v1
  kind: Service
  metadata:
    name: track-cops-angular
  spec:
    type: LoadBalancer
    ports:
    - port: 80
    selector:
      app: track-cops-angular

```
