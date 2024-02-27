const socket = io()

function checkSocketStatus() {
  console.log("Socket's status: " + socket.connected)
}

socket.on('connect', () => {
  checkSocketStatus()
  console.log('hola')
})

socket.on('disconnect', () => {
  checkSocketStatus()
})

socket.io.on('reconnect_attempt', () => {
  console.log('trying to reconnect')
})

socket.io.on('reconnect', (attempts) => {
  console.log('Reconnection!!! 🤭' + attempts)
})