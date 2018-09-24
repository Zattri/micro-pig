const express = require('express')
const proxy = require('express-http-proxy');
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

const proxyGates = [
    {name: "customer", route: "http://customer"},
    {name: "product", route: "http://product"}
]

app.use('/', (req, res, next) => {

    console.log(`GET request: ${req.originalUrl}`)

    let routes = proxyGates.filter(gate => req.originalUrl.indexOf(`/${gate.name}`) > -1)

    if (routes.length === 1) {

        let strippedPath = req.originalUrl.replace(`/${routes[0].name}`, '')
    
        let completeRouteUrl = `${routes[0].route}${strippedPath}`

        return proxy(routes[0].route, {
            proxyReqPathResolver: () => {
                return require("url").parse(completeRouteUrl).path
            },
            preserveHostHdr: true,
        })(req, res, next)
    }

    else {
        console.log("Error getting the input route")
    }
})

app.listen(3000, () => console.log('App running on port 3000'))