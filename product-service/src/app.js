const express = require('express')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')

app.use(cors())
app.use(bodyParser.json())

app.get('/product', (req, res) => {
    console.log("Get request hit")
})

app.post('/product', (req, res) => {
    console.log("Post request hit")
})

app.listen(80, () => console.log('Product service running on port 80'))