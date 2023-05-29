const express = require('express');
const bodyParser = require('body-parser');
const mongoose =require('mongoose')
const Dishes = require('./models/dishes')
const url = "mongodb://127.0.0.1:27017/conFusion";
const connect = mongoose.connect(url)
const dishRouter = require('./routers/dishRouter')

connect.then((db) => {
    console.log('Connected to server');
}, (err) => {
    console.log(err);
});

const app = express();
app.use(bodyParser.json());

app.use('/dishes', dishRouter);

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});