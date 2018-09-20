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
    console.log("Get request hit")
    res.status(200).send("Customer get response")
})

app.get('/fetchall', (req, res) => {
    console.log("Fetch all request hit")
    database.collection("accounts").find({}).toArray(function(err, result) {
        console.log(result)
    })
    res.status(200).send("Customer get response")
})

app.post('/', (req, res) => {
    console.log("Post request hit")
    res.status(200).send("Customer post response")
})

app.listen(80, () => console.log('Customer service listening on port 80'))
