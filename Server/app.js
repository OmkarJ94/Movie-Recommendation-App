const express=require('express');
const app= express();
var cookieParser = require('cookie-parser')
app.use(cookieParser())
app.use(express.json())
require("dotenv").config({})

const router=require('./router/auth')
app.use(router);
app.listen(5000)