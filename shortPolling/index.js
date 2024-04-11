const express = require('express');
const {join} = require('node:path');


const app = express();
let data = "initial data";

app.get("/", (req, res) => {
    res.sendFile(join(__dirname, "index.html"));
})

app.get('/getData', (req, res) => {
    res.send({
        data
    })
})

app.get('/updateData', (req, res) => {
    data = 'updated Data';
    res.send({
        data
    })
})

const port = process.env.PORT || 5001;
app.listen(port, () => {
    console.log(`server running at http://localhost:${port}`)
})
