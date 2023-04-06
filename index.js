const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");


const routes = require('./routes/clientRoute.js');
const mongoose = require("mongoose");
require("dotenv").config();


const port = process.env.SERVER_PORT;

app.use(cors());


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const db_URL = process.env.DB_URL;

mongoose.Promise = global.Promise;
mongoose.set("strictQuery", false);
mongoose
  .connect(db_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Successfully connected to the database 'MongoDb'");
  })
  .catch((err) => {
    console.log("Could not connect to the database 'MongoDb'", err);
    process.exit();
});
app.use("/api", routes);


app.listen(port, () => {
  console.log("serveur run on port " + port);
});
