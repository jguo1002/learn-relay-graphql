

## MongoDB setup
```
mongod --dbpath ./data/mongodb --port=27015 

mongod --dbpath ./data/mongodb --logpath ./data/mongodb/logs/mongodb.log --port=27015  --fork
```

```
mongoimport --db cat --collection photos --file ./data/photos.json --jsonArray --port 27015
```

## Run backend

```
strawberry server schema
```

## Strawberry CodeGen
```
strawberry codegen --schema schema --output-dir ./output -p typescript query.graphql
```