import { DataTypes, Model } from 'sequelize'
import sequelizeConnection from '../dbconfig'

interface UserAttributes {
    firstname: string
    lastname: string
    email: string
    password: string
}

export interface UserInput extends Required<UserAttributes> {}
export interface UserOutput extends Required<UserAttributes> {}

class User extends Model<UserAttributes, UserInput> implements UserAttributes {
    public firstname!: string
    public lastname!: string
    public email!: string
    public password!: string
}

User.init({
    firstname: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lastname: {
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