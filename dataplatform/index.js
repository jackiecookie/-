var express = require('express')
var translation=require('TranslationModule/Translation');
var app = express()
var port = process.env.PORT || 3000
app.listen(port)
  app.get('/', translation.index)