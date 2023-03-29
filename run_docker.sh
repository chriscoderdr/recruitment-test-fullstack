rm -rf node_modules

docker rm $(docker stop $(docker ps -a -q --filter ancestor=chriscodetest --format="{{.ID}}"))

docker image rm chriscodetest

docker build -t chriscodetest .

docker compose up

# docker run -dp 3000:3000 chriscodetest