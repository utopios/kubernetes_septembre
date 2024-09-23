## Exercice 1

Dans cet exercice vous allez créer un Pod (déployment) contenant 2 containers permettant de lancer une application wordpress.

### 1. Création de la spécification

Créez un fichier yaml *wordpress_pod.yaml* définissant un Pod ayant les propriétés suivantes:
- nom du Pod: *wp*
- un premier container:
  - nommé *wordpress*
  - basé sur l'image *wordpress:4.9-apache*
  - définissant la variable d'environnement *WORDPRESS_DB_PASSWORD* avec pour valeur *mysqlpwd* (cf Note ci-dessous)
  - définissant la variable d'environnement *WORDPRESS_DB_HOST* avec pour valeur *127.0.0.1* (cf Note ci-dessous)
- un second container:
  - nommé *mysql*
  - basé sur l'image *mysql:5.7*
  - définissant la variable d'environnement *MYSQL_ROOT_PASSWORD* avec pour valeur *mysqlpwd* (cf Note ci-dessous)

Note: chaque container peut définir une clé *env*, celle-ci contenant une liste de variables d'environnement sous la forme de paires *name* / *value*. L'exemple suivant définit la variable *LOG_LEVEL* dont la valeur est *WARNING*:
```
...
env:
- name: LOG_LEVEL
  value: WARNING
```

### 2. Lancement du Pod

Lancez le Pod à l'aide de *kubectl*

### 3. Vérification du status du Pod

Vérifiez l'état du Pod.

Au bout de quelques secondes, il devrait être dans l'état *Running* (le temps que les images des containers soient téléchargées depuis le DockerHub).

### 4. Accès à l'application

Forwardez le port *8080* de la machine hôte sur le port *80* du container *wordpress*.

Accédez à l'interface de setup de *wordpress* depuis un navigateur lancé sur http://localhost:8080

Note: si vous utilisez une machine virtuelle intermédiaire pour accéder à votre cluster, vous pourrez utiliser l'option *--address 0.0.0.0* pour la commande port-forward afin de permettre l'accès depuis toutes les interfaces réseau de votre machine.

### 5. Suppression du Pod

Supprimez le Pod *wp*.

