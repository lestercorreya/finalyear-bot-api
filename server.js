const express = require('express')
const mongoose = require('mongoose')
const app = express();
require('dotenv/config');
const bodyParser = require("body-parser")
let port = process.env.PORT || 3000;

app.use(bodyParser.json())

const generalRoutes = require('./routes/general')

app.use('/',generalRoutes)

mongoose.connect(process.env.DB_CONNECTION)
.then(()=>{console.log("connected to the database"),app.listen(port);})
.catch((err) => console.log(err))