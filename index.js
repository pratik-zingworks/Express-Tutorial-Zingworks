const express = require('express');
const app = express();
const port = 8001;

app.get('/', (req, resp) => {
    resp.send('Hello world');
})

app.listen(port, () => {
    console.log('App listening to port' + port)
})