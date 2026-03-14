const express = require('express');
const { connection } = require('./config/db');
const router = require('./src/routes');
const app=express();
require('dotenv').config();

app.use(express.json());
app.use('/api', router);


app.listen(process.env.port,async()=>{
    try {
        await connection;
        console.log('Connected to db');
    } catch (error) {
        console.log('Error while connecting to DB');
    } 
    console.log("Server Running on port "+process.env.PORT);
})