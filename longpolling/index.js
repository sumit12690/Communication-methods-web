const express = require('express');
const {join} = require('node:path');


const app = express();
let data = "initial data";
let waitingClients = [];

app.get("/", (req, res) => {
    res.sendFile(join(__dirname, "index.html"));
})

app.get('/getData', (req, res) => {
    if (data !== req.query.lastData) {
        res.json({
            data: data
        })
    } else {
        waitingClients.push(res);
    }
})

app.get('/updateData', (req, res) => {
    data = req.query.data;
    console.log(data);
    while (waitingClients.length > 0) {
        const client = waitingClients.pop();
        client.json({
            data: data
        });
    }
    res.send({success: "data updated successfully"})
})

const port = process.env.PORT || 5002;
app.listen(port, () => {
    console.log(`server running at http://localhost:${port}`)
})
