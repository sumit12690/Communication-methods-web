const express = require('express');
const {createServer} = require('node:http');
const {join} = require('node:path');
const {Server} = require('socket.io');


const app = express();
const server = createServer(app);
const io = new Server(server);

io.on('connection', (socket) => {
    console.log("connection established");
    socket.on('chat message', (message) => {
        io.emit('chat message', message)
    })
    socket.on('disconnect', ()=> {
        console.log("user disconnected");
    })
})

app.get("/", (req, res) => {
    res.sendFile(join(__dirname, "index.html"));
})

const port = process.env.PORT || 5000;
server.listen(port, () => {
    console.log(`server running at http://localhost:${port}`)
})
