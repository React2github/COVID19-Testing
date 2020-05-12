const express = require('express');
const app = express();
const ejs = require('ejs');

app.set('view-engine','ejs');


app.get('/', (req, res) => {
    res.render('index.ejs');
});

app.listen(3000, function () {
    console.log('Now listening on port 3000');
});

