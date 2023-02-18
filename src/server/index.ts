import express, { Express, Request, Response } from "express";

// Enviroment Variables
import dotenv from 'dotenv';

// Security
import cors from 'cors';
import helmet from 'helmet';

// TODO HTTPS

//Root Routerss
import routes from '../routes';

// Configuration the .env file

dotenv.config();

// Create Express APP

const server : Express =  express();

const port : string | number = process.env.PORT || 8000;

// Define SERVER to use "/api" and use rootRouter from 'index.ts' in routes
// Fron this point onover: hhtp://localhost:8000/api/...
server.use('/api', rootRouter);



