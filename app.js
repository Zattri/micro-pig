const express = require('express')
const app = express()
const cors = require('cors')

app.use(cors())

const serviceCall = new Promise(
    (res, rej) => {
        setTimeout(() => res('Hello world!'), 5000)
    }
)

// TODO:
// Break down parameters from the post request and pass into microservice function
// Make a test microservice function to test promise
// Get a microservice and try to send a call to that from anything
// Format the request data o the correct format for the microservice
// Hook the call up to the microservice and call it
// Format the data for the return result for the first HTTP request

app.get('/', (req, res) => {
    console.log("Get request hit")
    const myObj = [{ text: 'Hello testing' }, { text: 'bottom text' }]
    res.status(200).send(myObj)
})

app.post('/search', (req, res) => {
    console.log("Post request hit")
    // Mock up function - const dataToSend = req.processData();
    const responseObj = [{ text: 'Here is your post request response' }]
    res.status(200).send(responseObj)
})

app.listen(3000, () => console.log('App running on port 3000'))