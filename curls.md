> curl http://localhost:8080/fruits/ -w '\n' -i

> curl http://localhost:8080/fruits/1 -w '\n' -i

> curl -X POST http://localhost:8080/fruits/ -H 'Content-Type: application/json' -d '{"name":"Orange"}' -w '\n' -i