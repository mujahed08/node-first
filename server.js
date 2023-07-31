import bodyParser from 'body-parser';
import express from 'express'
import path from 'path';
import {fileURLToPath} from 'url';
import auth from './routes/auth.js'

//const express = require('express');
//const path = require("path");
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();


app.use(express.static(path.join(__dirname, "/")));


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/auth', auth);
    
app.listen(5000, ()=> {
    console.log(`server is running in port 5000`);
})