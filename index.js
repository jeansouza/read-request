'use strict'

var express = require('express')
var http = require('http')
var bodyParser = require('body-parser')

var useragent = require('useragent')
var usparser = require('ua-parser-js')

var app = express()

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(bodyParser.raw())

var server = http.Server(app)

app.get('/', function (req, res) {
  var uadata = new usparser(req.headers['user-agent'])
  var useragentdata = useragent.parse(req.headers['user-agent'])
  res.json({
    userAgent: req.headers['user-agent'],
    useragent: {
      string: useragentdata.toString(),
      browserfamily: useragentdata.family,
      osfamily: useragentdata.os.family
    },
    usparser: uadata.getResult()
  })
})

server.listen(process.env.PORT || 3000, function () {
  console.log(`Listening on port 3000`)
})
