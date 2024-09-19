
var db = require('../config/connection');
var collection = require('../config/collection')
module.exports ={
    addProduct:(product,callback)=>{
        db.get().collection('product').insertOne(product).then((data)=>{
            console.log("Inserted id:" + data.insertedId)
            callback(data.insertedId)
        }).catch((err) => {
            console.log("error during insertion : "+err)
        })
    },
    getAllProducts: async ()=>{
        return new Promise((resolve,reject)=>{
            let products=db.get().collection(collection.PRODUCT_COLLECTION).find().toArray()
            console.log(products)
            resolve(products)
        })
    }
};

