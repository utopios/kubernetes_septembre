### Création des ressources
```bash
kubectl apply -f demo-sa.yaml
kubectl apply -f demo-role.yaml
kubectl apply -f demo-role-binding.yaml
kubectl apply -f debug.yaml
```

### Entrer dans Debug
```bash
kubectl exec -it debug sh 
```

### Dans debug

```bash
TOKEN=$(cat /run/secrets/kubernetes.io/serviceaccount/token)
curl -H "Authorization: Bearer $TOKEN" https://kubernetes/api/v1/namespaces/default/pods/ --insecure
```