const express = require('express')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')

app.use(cors())
app.use(bodyParser.json())

function postCall(request) {
    return new Promise((res, rej) => {
        res({text: request.body.searchText})
    })
}

// TODO:
// Format the request data to the correct format for the microservice, probably just want to
// Hook the call up to the microservice and call it
// Format the data for the return result for the first HTTP request

app.get('/', (req, res) => {
    console.log("Get request hit")
    const myObjArr = [{ text: 'Hello testing' }, { text: 'bottom text' }]
    res.status(200).send(myObjArr)
})

app.post('/search', (req, res) => {
    console.log("Post request hit")
    const returnPromise = postCall(req);
    returnPromise.then(value => {
        res.status(200).send([value])
    })
})

app.listen(3000, () => console.log('App running on port 3000'))