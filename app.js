const express = require('express')
const app = express()

const thinger = new Promise(
    (res, rej) => {
        setTimeout(() => res('Hello world!'), 5000)
    }
)

app.get('/', (req, res) => {
    //do some stuff to format request

    thinger.then(result => {
        res.json(result)
    })
})

app.listen(3000, apiCall => console.log('Call -', apiCall))