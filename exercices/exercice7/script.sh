## kubectl create configmap proxy-config --from-file=./nginx.conf

kubectl apply -f exercice7.yaml
kubectl port-forward services/proxy 31600:80