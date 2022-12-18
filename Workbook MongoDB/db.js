const {MongoClient} = require("mongodb");

const db = {};

async function connectToDb() {
    const client = new MongoClient("mongodb+srv://admin:mindx@linh9.aa3k7pd.mongodb.net/?retryWrites=true&w=majority");

    await client.connect();

    console.log("db connected");

    const database = client.db("demo");
    db.restaurant = database.collection("restaurant");
}

module.exports = {connectToDb,db}