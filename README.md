# mongodb-replica-set
Simulate a MongoDB replica set using Docker

## Create MongoDB certificates
`./generate-certificates.sh`

## Start all the MongoDB replica set members
`docker-compose -f compose.yml up`

## Initialize the replica set and create users
`docker exec -it mongo1 bash`

`mongo --ssl --sslAllowInvalidCertificates /data/mongo/init/replica-set-init.js`

## Check the replica set status
`mongo --ssl --sslAllowInvalidCertificates --eval 'rs.status()'`