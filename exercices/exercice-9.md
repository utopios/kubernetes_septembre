### Exercice 9
1. Crée trois namespaces dans Kubernetes :
   - `privileged-ns` avec le profil de sécurité `privileged`.
   - `baseline-ns` avec le profil de sécurité `baseline`.
   - `restricted-ns` avec le profil de sécurité `restricted`.

2. Applique les labels de Pod Security Admission (PSA) correspondants sur chaque namespace pour définir le niveau de sécurité requis.

3. Déploie les pods suivants dans chaque namespace et observe le résultat :
   - Un pod avec un conteneur exécuté en tant que root (`runAsUser: 0`).
   - Un pod avec des privilèges élevés (`privileged: true`).
   - Un pod avec des volumes `hostPath`.

4. Analyse les résultats pour chaque namespace et explique pourquoi certains pods ont été autorisés ou rejetés.

5. Modifie les labels PSA pour le namespace `baseline-ns` afin de passer au niveau de sécurité `restricted` et observe les effets sur les pods déjà existants et sur les nouveaux déploiements.

