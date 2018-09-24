const express = require('express')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')
const MongoClient = require('mongodb') 

const baseMongoUrl = 'mongodb://mongodb/'
const databasePaths = [ 'customer', 'product' ]

let customerDatabase = null
let productDatabase = null

databasePaths.forEach(function(path) {

})
MongoClient.connect(baseMongoUrl + databasePaths[0], function(err, db) {
    if (err) {
        console.log(err)
    }
    console.log("Connection to customer database established")
    customerDatabase = db.db("customer")
});

MongoClient.connect(baseMongoUrl + databasePaths[1], function(err, db) {
    if (err) {
        console.log(err)
    }
    console.log("Connection to product database established")
    productDatabase = db.db("product")
});


app.use(cors())
app.use(bodyParser.json())

app.get('/', (req, res) => {
    console.log("GET request")
    customerDatabase.collection("accounts").find({}).toArray(function(err, result) {
        console.log('CUSTOMER DATABASE')
        console.log(result)
    })

    // Console log products
    productDatabase.collection("stock").find({}).toArray(function(err, result) {
        console.log('PRODUCT DATABASE')
        console.log(result)
    })
    res.status(200).send("Order get response")
})

app.get('/fetchall', (req, res) => {
    console.log("/fetchall request")
    database.collection("accounts").find({}).toArray(function(err, result) {
        res.status(200).send(result)
    })
})

app.post('/', (req, res) => {
    console.log("POST request")
    res.status(200).send("Order post response")
})

app.listen(80, () => console.log('Order service listening on port 80'))