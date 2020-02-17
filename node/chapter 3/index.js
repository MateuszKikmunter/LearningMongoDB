const MongoClient = require("mongodb").MongoClient;
const url = "mongodb://localhost:27017/learning_mongo";

MongoClient.connect(url, (err, db) => {
    console.log("connected succesfully yo sever");
    db.close();
});