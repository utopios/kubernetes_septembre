# Utiliser une image officielle Node.js comme base
FROM node:18

# Définir le répertoire de travail dans le conteneur
WORKDIR /usr/src/app

# Copier les fichiers package.json et package-lock.json
COPY package*.json ./

# Installer les dépendances de l'application
RUN npm install

# Copier le reste du code de l'application
COPY . .

# Exposer le port sur lequel l'application va tourner
EXPOSE 3000

# Démarrer l'application
CMD ["node", "server.js"]