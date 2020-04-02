import { route, GET, POST, before } from 'awilix-express'
import { Request, Response, NextFunction } from "express"

@route("/example")
export default class ExampleRoute {

    // private someService: SomeService

    constructor({ /* someService */ }) {
        // this.someService = someService
    }

    @GET()
    async getHelloWorld(req: Request, res: Response, next: NextFunction) {
        res.send("Hello, World!")
    }

}