#build des images 
#image result
docker build -t tp-result:2 ./result/.
#image vote
docker build -t tp-vote:2 ./vote/.
#image worker
docker build -t tp-worker:2 ./worker/.

kind load docker-image tp-result:2 --name formation
kind load docker-image tp-worker:2 --name formation
kind load docker-image tp-vote:2 --name formation