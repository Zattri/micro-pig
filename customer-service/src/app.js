const express = require('express')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')

app.use(cors())
app.use(bodyParser.json())

app.get('/', (req, res) => {
    console.log("Get request hit")
    res.status(200).send("Customer get response")
})

app.post('/', (req, res) => {
    console.log("Post request hit")
    res.status(200).send("Customer post response")
})

app.listen(80, () => console.log('Customer service running on port 80'))