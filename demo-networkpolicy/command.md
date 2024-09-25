### Commande 

```bash
kubectl create ns client1
kubectl create ns client2
```

## Pour accèder au service par namespace 

```bash
curl http://nginx-service.client1.svc.cluster.local
```