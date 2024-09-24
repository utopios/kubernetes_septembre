# Backup d'une base de données

Dans cet exercice, vous allez créer un *Job* qui servira à faire le dump d'une base de données *mongo*. Vous créerez ensuite un *CronJob* qui créera un dump à interval régulier.

## Exercice

### 1. Création d'un Pod Mongo

Dans un fichier *mongo-pod.yaml*, définissez la spécification d'un Pod nommé *db* et basé sur l'image *mongo:4.0* puis créez ensuite ce Pod.



### 2. Exposition de la base Mongo

Dans un fichier *mongo-svc.yaml*, définissez la spécification d'un Service nommé *db*, de type *clusterIP* afin d'exposer le Pod précédent à l'intérieur du cluster. Créez ensuite ce Service.

Port mongodb : 27017

### 4. Définition d'un Job pour effectuer le dump de la base de données

```bash
mongodump --gzip --host db --archive=/dump/db.gz
```