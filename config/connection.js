const {MongoClient} = require('mongodb');

const state ={
    db: null
};

module.exports.connect = async function(done){
    const uri = "mongodb://localhost:27017";
    const dbname = "Shopping";

    try{
        const client = await MongoClient.connect(uri);
        state.db = client.db(dbname);
        done();
    }catch(err){
        done(err);
    }

};

module.exports.get = function(){
    return state.db
};