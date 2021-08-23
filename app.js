const socket_server = require('socket.io')
const httpServer = require("http").createServer()
const listen = require('./middleware');


const server = httpServer.listen(3000);
const socket_io = socket_server(server)


listen(socket_io)

