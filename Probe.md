### Liveness Probe
- Vérfie si l'application est en vie. Si cette sonde echoue, kuebe redémarre le conteneur

### Readiness Probe
- Vérifie si l'application est prête à accepter du trafic. Si cette sonde échoue, le pod ne recevra pas de trafic

### Startup Probe
- Vérifie si l'application a démarré correctement. Utile pour les applications avec un temps de démarrage long.