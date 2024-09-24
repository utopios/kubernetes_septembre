#build des images 
#image result
docker build -t tp-result ./result/.
#image vote
docker build -t tp-vote ./vote/.
#image worker
docker build -t tp-worker ./worker/.

kind load docker-image tp-result --name formation
kind load docker-image tp-worker --name formation
kind load docker-image tp-vote --name formation