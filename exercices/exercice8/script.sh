kubectl create secret generic mongo \
--from-literal=mongo_url='mongodb://k8sExercice:k8sExercice@db.techwhale.io:27017/message?ssl=true&tlsInsecure=true&authSource=admin'

kubectl apply -f exercice8.yaml