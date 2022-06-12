import { DataTypes, Model, Optional } from 'sequelize'
import sequelizeConnection from '../dbconfig'

interface ProductAttributes {
    productId: number
    productName: string
    quantity: number
    price: number
    description: string
    image: string
}

export interface ProductInput extends Optional<ProductAttributes, 'productId'> {}
export interface ProductOutput extends Required<ProductAttributes> {}

class Product extends Model<ProductAttributes, ProductInput> implements ProductAttributes {
    public productId!: number
    public productName!: string
    public quantity!: number
    public price!: number
    public description!: string
    public image!: string

    // static associate(User){
    //     Product.belongsTo(User, { as: 'cart', foreignKey: 'userId' })
    // }
}

Product.init({
    productId: {
        type: DataTypes.NUMBER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    productName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    quantity: {
        type: DataTypes.NUMBER,
        allowNull: false
    },
    price: {
        type: DataTypes.NUMBER,
        allowNull: false
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false
    },
    image: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    sequelize: sequelizeConnection,
    modelName: 'Product',
    tableName: 'product',
    timestamps: false
})

export default Product