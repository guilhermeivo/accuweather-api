const express = require('express');
const router = require('./routes');
const app = express();

const portListen = 3000;

app.listen(portListen, () => console.log('listening at 3000'));
app.use(express.static('./public'));
app.use(express.json({limit: '1mb'}));
app.use(router);