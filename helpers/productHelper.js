const { resolve, reject } = require('promise');
var db = require('../config/connection');
var collection = require('../config/collection')
module.exports ={
    addProduct:(product,callback)=>{
        db.get().collection('product').insertOne(product).then((data)=>{
            callback(data.ops[0]._id)
        }).catch((err) => {
            callback(false)
        })
    },getAllProducts: async ()=>{
        return new Promise((resolve,reject)=>{
            let products=db.get().collection(collection.PRODUCT_COLLECTION).find().toArray()
            resolve(products)
        })
    }
};