const express = require('express');
const http = require('http');
const socketio = require('socket.io');


const app = express();
const server = http.createServer(app);
const io = socketio(server);


// Run when client connects
io.on('connection', socket => {console.log('new client connection')});

const PORT = process.env.PORT || 3000

server.listen(PORT, () => console.log(`Server is running on port: ${PORT}`));