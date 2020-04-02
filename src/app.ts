// Setup dotenv
import * as dotenv from "dotenv"
dotenv.config()

import express = require("express")
import { loadControllers, scopePerRequest } from 'awilix-express'
const { asClass, asValue, createContainer} = require('awilix')
export const app = express()


// Setup awilix container
const container = createContainer()
container.register({
    // Register classes here
})

// Setup awilix express
app.use(scopePerRequest(container))
app.use(loadControllers("api/**/*.route.ts", { cwd: __dirname }))