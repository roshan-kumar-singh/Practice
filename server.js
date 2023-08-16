require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const port = 3000;
const bodyParser = require("body-parser");

const BookRoute = require('./routes/book.route');
app.use(bodyParser.json()); // for parsing application/json

 


app.use("/api/book",BookRoute);




mongoose.connect("mongodb://localhost:27017/roshan").then(
  () => console.log('db is connected..')
).catch(err => console.log(err));



app.listen(port,()=>{
    console.log(`server is running on ${port}`);
});