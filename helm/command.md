### Commande HELM

1. Création d'une chart
```bash
helm create tp-vote
```

2. Installation de la chart
```bash
helm install <nom_release> <chemin_chart>
```

3. Passer les valeurs de variables en ligne de commande
```bash
helm install <nom_relase> <chemin_chart> --set image.repository="apache2"
```

4. Mettre la chart dans un package pour l'utiliser comme dépendance.
```bash
helm package correction-tp-vote
```