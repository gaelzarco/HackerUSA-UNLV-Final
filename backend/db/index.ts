// import sequelizeConnection from './dbconfig'
// import User from './models/User'
// import Product from './models/Product'

// User.hasMany(Product, {
//     foreignKey: 'productId',
//     as: 'cart'
// })
// Product.belongsTo(User, { foreignKey: 'productId', targetKey:'userId' })

// async function test() {
//     try {
//         await sequelizeConnection.sync({ force: true })

//         await Product.bulkCreate(
//             [
//                 {
//                     productName: 't-shirt',
//                     quantity: 50,
//                     price: 30,
//                     description: 'Vintage and perfectly distressed',
//                     image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F2d%2Fa1%2F93%2F2da1933194a1bf39c3edd5626378130a.jpg&f=1&nofb=1'
//                 },
//                 {
//                     productName: 'pants',
//                     quantity: 10,
//                     price: 150,
//                     description: 'For those without fear',
//                     image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.etsystatic.com%2F29309036%2Fr%2Fil%2Fa1d269%2F3165685746%2Fil_fullxfull.3165685746_1j2b.jpg&f=1&nofb=1'
//                 },
//             ]
//         );

//         const res = await Product.findAll({ raw: true })
//         console.log(res)
//     } catch (err) {
//         console.log(`Something went wrong... ${err}`)
//     } finally {
//         sequelizeConnection.close()
//     }
// }

// test()