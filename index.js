'use strict'

var express = require('express')
var http = require('http')
var bodyParser = require('body-parser')
var JSON = require('circular-json')

var app = express()

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(bodyParser.raw())

var server = http.Server(app)

app.get('/', function (req, res) {
  res.json({ userAgent: req.headers['user-agent'] })
})

server.listen(3000, function () {
  console.log(`Listening on port 3000`)
})
