import express, { Express, Request, Response } from "express";

// Enviroment Variables
import dotenv from 'dotenv';

// Security
import cors from 'cors'; // siempre habilitar el cors para poder hacer peticiones, es el encargado de habilitar quien puede hacer peticiones http
import helmet from 'helmet'; // politica de seguridad y acciones a la hora de gestionar las peticiones 

// TODO HTTPS

//Root Routerss
import rootRuter from '../routes';

// Create Express APP

const server : Express =  express();

// Define SERVER to use "/api" and use rootRouter from 'index.ts' in routes
// Fron this point onover: hhtp://localhost:8000/api/...
server.use('/api', rootRuter);

// Static server
server.use(express.static('public'))

// TODO Mongose Connection

// Security Config

server.use(helmet());
server.use(cors());

// Content Type Config :
server.use(express.urlencoded({ extended: true, limit:'50mb' }))
server.use(express.json({limit: '50mb'}))

// * Redirection Config
//http://localhost:8000/ --> http://localhost:8000/api/

server.get('/', (req:Request, res:Response) => {
    res.redirect('/api');
});

export default server;




