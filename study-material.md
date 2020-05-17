### Create a resource group [ARG]
  az group create --name myapp-rg --location eastus

### Create a container registry [ACR]
  az acr create --resource-group myapp-rg --name myContainerRegistry --sku Basic

### Create a Kubernetes cluster [AKC]
  az aks create --resource-group myapp-rg --name myapp --node-count 1 --enable-addons monitoring --generate-ssh-keys --location centralus

### working solution 
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
        nodeSelector:
          "beta.kubernetes.io/os": linux
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
