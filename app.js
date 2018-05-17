const http = require('http')
const express = require('express')
const heapdump = require('heapdump')
const memwatch = require('node-memwatch');

(async () => {
    memwatch.on('leak', info => {
        console.log(info)
    })

    memwatch.on('stats', stats => {
        console.log(stats)
    })

    const app = express()
    const requests = []

    app.get('/', (req, res) => {
        requests.push({url: req.url, on: new Date()})
        res.json(requests)
    })

    app.get('/heapdump', (req, res) => {
        heapdump.writeSnapshot()
    })

    app.get('/memory-ussage', (req, res) => {
        res.json(process.memoryUsage())
    })

    await app.listen(8080)
    console.log(`Server is listening on port 8080 with pid ${process.pid}`)
})()


