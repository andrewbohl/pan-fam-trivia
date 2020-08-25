const express = require('express');
const http = require('http');
const socketio = require('socket.io');

const PORT = process.env.PORT || 3000

const app = express();
const index = require('./routes/index');
app.use(index);

const server = http.createServer(app);

const io = socketio(server);


// Run when client connects
io.on('connection', socket => {
    console.log('new client connection')

    socket.on('message', () => {
        console.log('a message sent');
    })

    socket.on("disconnect", () => {
        console.log("Client disconnected")
    });
});



server.listen(PORT, () => console.log(`Server is running on port: ${PORT}`));