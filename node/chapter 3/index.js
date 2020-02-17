const MongoClient = require("mongodb").MongoClient;
const url = "mongodb://localhost:27017/learning_mongo";

const findDocuments = (db, callback) => {
    const collection = db.collection("tours");
    collection.find().toArray((err, docs) => {
        console.log(docs);
        callback;
    });
}

MongoClient.connect(url, function (err, client) {
    const db = client.db('learning_mongo');
    findDocuments(db, () => {
        db.close();
    });
});