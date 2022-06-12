import { Dialect, Sequelize } from 'sequelize'

const dbName = process.env.DB_NAME as string
const dbUser = process.env.DB_USER as string
const dbHost = process.env.DB_HOST as string
const dbDriver = process.env.DB_DRIVER as Dialect
const dbPassword = process.env.DB_PASSWORD as string

const sequelizeConnection = new Sequelize('e-commercefinal', 'postgres', 'xarco23!', {
    host: 'localhost',
    dialect: 'postgres',
})

export default sequelizeConnection