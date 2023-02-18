import express, { Express, Request, Response } from "express";
import dotenv from 'dotenv'

// Configuration the .env file

dotenv.config();

// Create Express APP

const app : Express =  express();

const port : string | number = process.env.PORT || 8000;

// Define the first Route of APP

app.get('/', (req: Request, res: Response) => {
    // Send Hello World
    res.send('Welcome to  my First API Restfull - APP Express + TS + Nodemoon + Jest + Swagger + Mongoose');
});

app.get('/hello', (req: Request, res: Response) => {
    // Send Hello World
    res.send('Welcome to GET Route: !Hello!');
});


//Eecute APP and Listen Request to PORT
app.listen(port, () => {
    console.log(`EXPRESS SERVER: Running at http://loaclhost:${port}`)
}) 