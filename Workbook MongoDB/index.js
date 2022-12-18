const express = require("express");
const bodyParser = require("body-parser");
const {connectToDb,db} = require("./db");
const {ObjectId} = require("mongodb");
const app = express();

const port = 3000;

app.use(bodyParser.json());

const restaurantRouter = express.Router();

app.use("/restaurant", restaurantRouter);

restaurantRouter.get("/", async(req,res) => {
  const restaurant = await db.restaurant.find({}).toArray();
  res.json(restaurant);
})

restaurantRouter.get("/zipcode", async(req,res) => {
  const restaurant = await db.restaurant.find({"address.zipcode": "11209"}).toArray();
  res.json(restaurant);
})

restaurantRouter.get("/cuisine", async(req,res) => {
  const restaurant = await db.restaurant.find({cuisine : "American "}).toArray();
  res.json(restaurant);
})

restaurantRouter.get("/cuisine2", async(req,res) => {
  const restaurant = await db.restaurant.find({$and: [{borough: "Manhattan"},{cuisine: "Chicken"}]}).toArray();
  res.json(restaurant);
})

app.listen(port, () => {
  connectToDb();
});



