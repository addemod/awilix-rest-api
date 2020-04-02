import { route, GET, POST, before } from 'awilix-express'
import { Request, Response, NextFunction } from "express"
import { ExampleService } from '../../services'

@route("/example")
export default class ExampleRoute {

    private exampleService: ExampleService

    constructor({ exampleService }) {
        this.exampleService = exampleService
    }

    @GET()
    async getHelloWorld(req: Request, res: Response, next: NextFunction) {
        res.send(this.exampleService.getHelloWorld())
    }

}