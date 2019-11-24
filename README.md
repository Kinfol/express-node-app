# express-node-app


# Start with Jest

The comand bellow will add the latest jest to the package.json devDependencies block.

    npm install jest --dev 

Add the comand to the package.json scripts block to test the code. 

'--coverage' is to expand the jest response. 

'--watch all' is for jest to run all the time

    "test": "jest --coverage --watchAll"

# src/model

The module model holds the Data Schema. In our case represented by MongoDB. 

    mongose is an Object modeling tool for MongoDB

MongoDB stores documents in BSON, which is the binary encoded format for JSON.

JSON defines only two data structures. Objects and arrays.

    object => a set of name-value
    array => list of values

JSON defines 7 value types

    string, number, object, array, true, false, and null

    

   
# Add REST CRUD methods

- Create HTTP POST
- Read HTTP GET
- Update HTTP PUT
- Delete HTTP DELETE