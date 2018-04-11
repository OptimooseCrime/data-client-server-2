const express = require('express')
const server = express()
const port = 8080
const cors = require('cors')
const data = require('./data/instructors.json')
const res = 'response'
const req = 'require'

function findId(data, id){
  for (var i = 0; i < data.length; i++) {
    if(data[i].id == id){
      return data[i]
    }
  }
  return null
}

server.use(cors())

server.get('/', function(req, res){
  res.json({data})
})

server.get('/:id', idRoute)

function idRoute(req, res){
  var id = findId(data, req.params.id)
  if (!id){
    next((404).json)
  }
  else{
    res.json({data: id})
  }
}

server.listen(port)