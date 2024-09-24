# Utilisation d'un ConfigMap pour la configuration d'un reverse proxy

## 1. Context

Dans cette mise en pratique nous allons voir l'utilisation de l'objet ConfigMap pour fournir un fichier de configuration à un reverse proxy très simple que nous allons baser sur *nginx*.

Nous allons configurer ce proxy de façon à ce que les requètes reçues sur le endpoint */whoami* soient forwardées sur un service nommé *whoami*, tournant également dans le cluster. Ce service expose le endpoint */* et renvoie simplement le nom du container qui a traité la requète.

## 2. Création de l'application whoami

La spécification suivante définie un Pod, contenant un unique container basé sur l'image *lucj/whoami*, ainsi qu'un service de type *ClusterIP* dont le rôle est d'exposer ce Pod à l'intérieur du cluster.


```
apiVersion: v1
kind: Pod
metadata:
  name: poddy
  labels:
    app: whoami
spec:
  containers:
  - name: whoami
    image: lucj/whoami
---
apiVersion: v1
kind: Service
metadata:
  name: whoami
  labels:
    app: whoami
spec:
  selector:
    app: whoami
  type: ClusterIP
  ports:
  - port: 80
    targetPort: 80
```

Copiez cette spécification dans un fichier *whoami.yaml* puis créez le Pod et le Service avec la commande suivante:

```
kubectl apply -f whoami.yaml
```

Vérifiez ensuite que ces 2 objets ont été correctement lancés:



## 3. Création d'une ConfigMap

Nous allons utiliser la configuration ci-dessous pour le serveur nginx que nous mettrons en place dans la suite.

```
user nginx;
worker_processes 4;
pid /run/nginx.pid;
events {
   worker_connections 768;
}
http {
  server {
    listen *:80;
    location = /whoami {
      proxy_pass http://whoami/;
    }
  }
}
```


## 4. Spécification du reverse-proxy

La spécification suivante définie un Pod, contenant un unique container basé sur l'image *nginx*, ainsi qu'un service de type *NodePort* dont le rôle est d'exposer ce Pod à l'extérieur du cluster. C'est à ce service que l'on enverra une requête HTTP dans la suite.

Comme on peut le voir, la spécification définie un volume qui est utilisé pour monter la ConfigMap *proxy-config* dans le container *proxy* et donc le configurer

- Créez le pod proxy à partir de la config et l'image nginx:1.20-alpine
- Créez un service pour ce proxy

Le path sur l'image nginx pour la conf est /etc/nginx/

curl localhost:31600/whoami


