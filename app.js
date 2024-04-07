const express = require('express');
const http = require('http');
const app = express();
const port = 3001;

app.get('/', (req, res) => {
    res.json({ msg: 'express work' })
});

const server = http.createServer(app);
server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
