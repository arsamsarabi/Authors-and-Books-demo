# authors-and-books-demo-services

## How to setup the SQL database

```sh
docker run \
  -p 0.0.0.0:7999:3306 \
  --name abd-db \
  -e MYSQL_ROOT_PASSWORD=password \
  -e MYSQL_USER=abd-dev \
  -e MYSQL_PASSWORD=password \
  -e MYSQL_DATABASE=abd \
  -d mysql:5.7.20
```
