const express = require('express')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')

app.use(cors())
app.use(bodyParser.json())

function postCall(request) {
    console.log(request.body)
    return new Promise((res, rej) => {
        let myobj = { text: request.body.searchText };
        console.log(myobj)
        res(myobj)
    })
}

// TODO:
// Break down parameters from the post request and pass into microservice function
// Make a test microservice function to test promise
// Get a microservice and try to send a call to that from anything
// Format the request data o the correct format for the microservice
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