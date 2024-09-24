## build de l'image

docker build -t user-management-api ./app/.

## 
kind load docker-image user-management-api --name formation

kubectl apply -f deployment.yaml