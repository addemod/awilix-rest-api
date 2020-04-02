// Setup dotenv
import * as dotenv from "dotenv"
dotenv.config()

import express = require("express")
import { loadControllers, scopePerRequest } from 'awilix-express'
import { ExampleService } from "./services"
import * as fs from "fs"
const { asClass, asValue, createContainer} = require('awilix')
export const app = express()


// Setup awilix container
const container = createContainer()
container.register({
    // Register classes here
    exampleService: asClass(ExampleService)
})

// Setup awilix express
app.use(scopePerRequest(container))
for(let folderName of fs.readdirSync(__dirname + "/api")) {
    app.use(`/${folderName}`, loadControllers(`api/${folderName}/*.route.ts`, { cwd: __dirname }))
}
app.use(loadControllers(`api/*.route.ts`, { cwd: __dirname }))