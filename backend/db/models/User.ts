import { DataTypes, Model, Optional, Sequelize } from 'sequelize'
// import sequelizeConnection from '../dbconfig'
const sequelizeConnection = new Sequelize('e-commercefinal', 'postgres', 'xarco23!', {
    host: 'localhost',
    dialect: 'postgres',
})

interface UserAttributes {
    userId: number
    firstName: string
    lastName: string
    email: string
    password: string
}

export interface UserInput extends Optional<UserAttributes, 'userId'> {}
export interface UserOutput extends Required<UserAttributes> {}

class User extends Model<UserAttributes, UserInput> implements UserAttributes {
    public userId!: number
    public firstName!: string
    public lastName!: string
    public email!: string
    public password!: string
    public cart!: object

    // static associate(Product){
    //     User.hasMany(Product, { foreignKey:'productId', as: 'cart' })
    // }
}

User.init({
    userId: {
        type: DataTypes.NUMBER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    firstName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lastName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    }
} ,{
    sequelize: sequelizeConnection,
    modelName: 'User',
    tableName: 'user',
    timestamps: false
})

export default User