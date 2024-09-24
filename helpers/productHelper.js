var db = require('../config/connection');
var collection = require('../config/collection');
var { ObjectId } = require('mongodb');
module.exports = {
    addProduct: (product, callback) => {
        db.get().collection('product').insertOne(product).then((data) => {
            callback(data.insertedId)
        }).catch((err) => {
        })
    },
    getAllProducts: async () => {
        return new Promise((resolve, reject) => {
            let products = db.get().collection(collection.PRODUCT_COLLECTION).find().toArray()
            resolve(products)
        }).catch((err) => {
            reject(err)
        })
    },
    deleteProduct: (proId) => {
        return new Promise((resolve, reject) => {
            db.get().collection(collection.PRODUCT_COLLECTION).deleteOne({ _id: new ObjectId(proId) }).then((response) => {
                resolve(response);
            }).catch((err) => {
                console.log("Error found : " + err)
                reject(err)
            })
        })
    },
    getProductDetails: (proId) => {
        return new Promise((resolve, reject) => {
            db.get().collection(collection.PRODUCT_COLLECTION).findOne({ _id: new ObjectId(proId) }).then((product) => {
                resolve(product);
            })
        })
    },
    updateProductDetails: (proId, proDetails) => {
        return new Promise((resolve, reject) => {
            db.get().collection(collection.PRODUCT_COLLECTION).updateOne({ _id: new ObjectId(proId) },
                {
                    $set: {
                        Name: proDetails.Name,
                        Category: proDetails.Category,
                        Description: proDetails.Description,
                        Price: proDetails.Price
                    }
                })
        }).then((response) => {
            resolve()
        })
    },
};

