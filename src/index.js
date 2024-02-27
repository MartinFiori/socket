const express = require('express')
const { createServer } = require('http')
const path = require('path')
const { Server } = require('socket.io')

const app = express()
const httpServer = createServer(app)
const io = new Server(httpServer, {

})

app.use(express.static(path.join(__dirname, 'views')))

app.get('/', (req, res) => {
  res.sendFile(__dirname, +'/views/index.html')
})

io.on('connection', socket => {
  // console.log("clientes: ", io.engine.clientsCount)
  // console.log(socket.id)
  socket.conn.once('upgrade', () => {
    console.log("Hemos pasado a de http", socket.conn.transport.name)
  })
  socket.on('disconnect', () => {
    console.log('chau ' + socket.id)
  })
})



httpServer.listen(3000, () => console.log('Listening on port 3000'))