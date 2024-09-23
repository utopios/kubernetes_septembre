# Exercice 4

Dans cet exercice, vous allez créer un Deployment et effectuer un rolling update.

### 1. Création d'un Deployment

A l'aide de la commande `kubectl create`, créez un Deployment
- nommé *www*
- définissant un Pod basé sur l'image *nginx:1.16*

Note: la commande `kubectl create` fait partie des commandes dites impératives, elle permet de créer un Deployment sans passer par un fichier de spécification en yaml. Cette approche permet d'aller vite, elle est a utiliser dans un contexte de développement ou de debugging. La commande `kubectl create` permet de spécifier le nombre de réplicas à la création d'un Deployment (via l'option --replicas), par défaut un seul réplica de Pod sera créé.

### 2. Scaling

Changez ce nombre de replicas de façon à en avoir 3.

Note: pour cela vous pourrez avoir besoin de la commande `$ kubectl scale ...`. L'aide en ligne `$ kubectl scale --help` donne quelques exemples d'utilisation.

### 3. Liste des ressources

Listez les ressources créées par la commande précédente (Deployment, ReplicaSet, Pod).

### 4. Mise à jour de l'image

Mettez l'image nginx à jour avec le version *nginx:1.16-alpine*

Note: spécifiez l'option *--record*  afin de conserver l'historique de la mise à jour (deprecated)

### 5. Liste des ressources

Une nouvelle fois, listez les ressources.

Que constatez vous ?

### 6. Historique des mises à jour

Listez les mises à jour (= révisions) du Deployment.

Note: utilisez la commande `kubectl rollout...`

### 7. Effectuez un rollback

Faites un rollback et vérifier que le Deployment est maintenant basé sur la version précédente de l'image (*nginx:1.16*)

### 8. Cleanup

Supprimez le Deployment *www*


### Correction

1. création du deployment
```bash
kubectl create deploy www --image nginx:1.16
```

2. Scale
```bash
kubectl scale deploy/www --replicas 3
```

3. liste des ressources
```bash
kubectl get deploy
kubectl get rs
kubectl get pods 
```

4. Mise à jour

```bash
kubectl set image deploy/www *=nginx:1.16-alpine
```

5. Rollout
```bash
kubectl rollout history deploy/www
```

6. Rollback
```bash
kubectl rollout undo deploy/www --to-revision=1
```