import { BasicResponse } from "@/controller/types";
import express, { Request, Response } from "express";
import { HelloController } from "../controller/HelloController";
import { LogInfo } from "../utils/loggers";

// Router from express

let helloRouter = express.Router();

// http://localhost:8000/api/hello?name=Lisandro/

helloRouter.route('/')
    //GET:
    .get(async (req:Request, res:Response) => {
        // Obtain a Query Param
        let name: any = req?.query?.name;
        LogInfo( `Query Param: ${ name }`)
        //Controller Instance to Execute method
        const controller: HelloController = new HelloController;
        // Obtain Response
        const response: BasicResponse = await controller.getMessage(name);
        // Send to the Client the response
        return res.send(response); 

    })

    //Export Hello Router
    export default helloRouter;
