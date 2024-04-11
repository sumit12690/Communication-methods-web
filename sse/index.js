const express = require('express');
const {join} = require('node:path');


const app = express();
let data = "initial data";

app.get('/sse', (req, res) => {
    res.setHeader('Content-type', 'text/event-stream');
    res.setHeader('Connection', 'keep-live');
    res.setHeader('Cache-Control', 'no-cache');
    res.write('data: Welcome to server sent events \n\n');

    const intervalId = setInterval(() => {
        res.write(`data: Server time ${new Date().toLocaleDateString()} \n\n`)
    }, 5000)

    req.on('close', () => {
        clearInterval(intervalId)
    })
})


app.get("/", (req, res) => {
    res.sendFile(join(__dirname, "index.html"));
})


const port = process.env.PORT || 5003;
app.listen(port, () => {
    console.log(`server running at http://localhost:${port}`)
})
