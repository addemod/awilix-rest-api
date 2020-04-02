# awilix-rest-api
A personal base structure to create a REST API in node.js using awilix, sequelize and express in TypeScript.
## Routes
Routes are defined in the `/src/api` folder. Any file ending with `.route.ts` will be treated as an awilix-express route class.

Preferrably structure your routes in some kind of versioning structure, such as

> /src/api/**v1**/some.route.ts

The app will automatically route to the file's folder name. In the example above, the `some.route.ts` route will be available at the `http://localhost/v1` endpoint

If no folder name specified, the route will be available at the base endpoint.

## Services
To create a new service (which is the business layer), simply create and export a class in the services folder and add it as a reference in the awilix container definition in `/src/app.ts`

## Models
To add a new model, simply create a sequelize model in the `/src/data-layer/models` folder. They are automatically loaded by sequelize on application start, before the server is started.
You could also add the export of the model in the index.ts file with `export * from "./<file name>"` for easier access when importing many models.

Naming convention: `<model name>.model.ts`

## Tests
Any test in the `/src/tests` folder is run when executing `npm run test`. See the example test for an extremely simple mocha + chai example test.
