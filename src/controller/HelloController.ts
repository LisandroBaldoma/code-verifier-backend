    import { Get, Query, Route, Tags } from "tsoa";
    import { BasicResponse } from "./types";
    import { IHelloController } from "./interfaces";
    import { LogSuccess } from "../utils/loggers";

    @Route("/api/hello")
    @Tags("HelloController")
    export class HelloController implements IHelloController {
        /**
         * Endpoint to retreive a Message "Hello {name}" in JSON
         * @param name Name of user to be greeted
         * @returns { BasicResponse } Promise of Basicresponse
         */
        @Get("/")
        public async getMessage(name?: string | undefined): Promise<BasicResponse> {
            LogSuccess('[/api/hello] Get Request');
            
            return {
                message: `Hello, ${name || "world!" }`
            }
            
        }
        
    }