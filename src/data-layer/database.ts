import { Sequelize } from "sequelize-typescript"

export const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: 'backend-db.sqlite',
    models: [__dirname + "/models/*.model.ts"],
    modelMatch: (filename, member) => {
        return filename.substring(0, filename.indexOf('.model')).toLowerCase() === member.toLowerCase()
    },
})