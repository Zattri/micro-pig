const express = require('express')
const app = express()

const serviceCall = new Promise(
    (res, rej) => {
        setTimeout(() => res('Hello world!'), 5000)
    }
)

// TODO:
// Get an API call working from the front end and return some basic result
// Break down parameters from the URL and pass into microservice function
// Make a test microservice function to test promise
// Get a microservice and try to send a call to that from anything
// Format the request data o the correct format for the microservice
// Hook the call up to the microservice and call it
// Format the data for the return result for the first HTTP request


app.get('/', (req, res) => {

    serviceCall.then(result => {
        res.status(200).send(result)
    })
})

app.post('/', (req, res) => {
    dataToSend = req.processData();

    serviceCall.then(result => {
        res.status(200).send(result)
    })
})

app.listen(3000, () => console.log('App running on port 3000'))