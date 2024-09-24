# Création et utilisation d'un Secret

## Exercice

Dans cet exercice vous allez utiliser un Secret pour vous connecter à une base de données externe.

### 1. Le context

L'image *registry.gitlab.com/lucj/messages:v1.0.4* contient une application simple qui écoute sur le port 3000 et permet, via des requêtes HTTP, de créer des messages ou de lister les messages existants dans une base de données *MongoDB*. L'URL de connexion de cette base doit être fournie à l'application de façon à ce que celle-ci puisse s'y connecter. Nous pouvons lui fournir via une variable d'environnement MONGODB_URL ou via un fichier qui devra être accessible depuis */app/db/mongodb_url*.

### 2. La base de données

Pour cet exercice la base de données suivante sera utilisée:

- host: *db.techwhale.io*
- port: *27017* (port par défaut de Mongo)
- nom de la base: *message*
- le tls est activé mais utilise un certificat autosigné
- utilisateur: *k8sExercice* / *k8sExercice*

L'URL de connection est la suivante:

```
mongodb://k8sExercice:k8sExercice@db.techwhale.io:27017/message?ssl=true&tlsInsecure=true&authSource=admin
```

### 3. Création du Secret

Créez un Secret nommé *mongo*, le champ *data* de celui-ci doit contenir la clé *mongo_url* dont la valeur est la chaine de connection spécifiée ci-dessus.

Choisissez pour cela l'une des options suivantes:

- Option 1: utilisation de la commande `kubectl create secret generic` avec l'option `--from-file`

- Option 2: utilisation de la commande `kubectl create secret generic` avec l'option `--from-literal`

- Option 3: utilisation d'un fichier de spécification

### 4. Utilisation du Secret dans une variable d'environnement

Définissez un Pod nommé *messages-env* dont l'unique container a la spécification suivante:

- image: *registry.gitlab.com/lucj/messages:v1.0.4*
- une variable d'environnement *MONGODB_URL* ayant la valeur liée à la clé *mongo_url* du Secret *mongo* créé précédemment

Créez ensuite ce Pod et exposez le en utilisant la commande `kubectl port-forward` en faisant en sorte que le port 3000 de votre machine locale soit mappé sur le port 3000 du Pod *messages-env*.

Depuis un autre terminal, vérifiez que vous pouvez créer un message avec la commande suivante:

Note: assurez vous de remplacer *YOUR_NAME* par votre prénom

```
curl -H 'Content-Type: application/json' -XPOST -d '{"msg":"hello from YOUR_NAME"}' http://localhost:3000/messages
```

### 5. Utilisation du Secret dans un volume

Définissez un Pod nommé *messages-vol* ayant la spécification suivante:

- un volume nommé *mongo-creds* basé sur le Secret *mongo*
- un container ayant la spécification suivante:
  - image: *registry.gitlab.com/lucj/messages:v1.0.4*
  - une instructions *volumeMounts* permettant de monter la clé *mongo_url* du volume *mongo*mongo-creds* dans le fichier */app/db/mongo_url*

Créez le Pod et vérifier que vous pouvez créer un message de la même façon que dans le point précédent en exposant le Pod via un *port-forward*.

