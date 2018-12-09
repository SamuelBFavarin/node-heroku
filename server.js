
'use strict';
const express = require('express');

// Constants
const PORT = process.env.PORT || 3000;
const HOST = '127.0.0.1';


// App
const app = express();
app.get('/', (req, res) => {
    res.send('Hello docker!\n');
});


app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);

