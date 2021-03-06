const express = require('express')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')
const MongoClient = require('mongodb') 

var databaseUrl = 'mongodb://mongodb/product'

// Use connect method to connect to the server
MongoClient.connect(databaseUrl, function(err, db) {
    if (err) {
        console.log(err)
    }
    console.log("Connection to product database established")
    database = db.db("product")
});

app.use(cors())
app.use(bodyParser.json())

app.get('/', (req, res) => {
    console.log("GET request")
    res.status(200).send("Product get response")
})

app.get('/fetchall', (req, res) => {
    console.log("/fetchall request")
    database.collection("stock").find({}).toArray(function(err, result) {
        res.status(200).send(result)
    })
})

app.post('/', (req, res) => {
    console.log("POST request")
    res.status(200).send("Product post response")
})

app.listen(80, () => console.log('Product service listening on port 80'))