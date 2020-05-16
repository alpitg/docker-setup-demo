# Create a resource group [ARG]
az group create --name myapp-rg --location eastus

# Create a container registry [ACR]
az acr create --resource-group myapp-rg --name myContainerRegistry --sku Basic

# Create a Kubernetes cluster [AKC]
az aks create --resource-group myapp-rg --name myapp --node-count 1 --enable-addons monitoring --generate-ssh-keys --location centralus
