const express = require('express')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')
const MongoClient = require('mongodb') 

var databaseUrl = 'mongodb://mongodb/product'

// Use connect method to connect to the server
MongoClient.connect(databaseUrl, function(err, db) {
    err ? console.log(err) : console.log("Connection to product database established")
    db.close()
});

app.use(cors())
app.use(bodyParser.json())

app.get('/', (req, res) => {
    console.log("Get request hit")
    res.status(200).send("Product get response")
})

app.post('/', (req, res) => {
    console.log("Post request hit")
    res.status(200).send("Product post response")
})

app.listen(80, () => console.log('Product service listening on port 80'))