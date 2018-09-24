const express = require('express')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')
const MongoClient = require('mongodb') 

const databaseUrl = 'mongodb://mongodb/customer'
let database = null

MongoClient.connect(databaseUrl, function(err, db) {
    if (err) {
        console.log(err)
    }
    console.log("Connection to customer database established")
    database = db.db("customer")
});


app.use(cors())
app.use(bodyParser.json())

app.get('/', (req, res) => {
    console.log("GET request")
    res.status(200).send("Customer get response")
})

app.get('/fetchall', (req, res) => {
    console.log("/fetchall request")
    database.collection("accounts").find({}).toArray(function(err, result) {
        res.status(200).send(result)
    })
})

app.post('/', (req, res) => {
    console.log("POST request")
    res.status(200).send("Customer post response")
})

app.listen(80, () => console.log('Customer service listening on port 80'))