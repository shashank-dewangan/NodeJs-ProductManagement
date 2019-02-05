var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var productRoutes = require("./routes/product.routes");
var reviewRoutes = require('./routes/review.route');

mongoose.connect(
  "mongodb://localhost:27017/MyProductDB",
  { useNewUrlParser: true }
);

app.listen(2000, () => console.log("server is running"));

app.use(
  bodyParser.urlencoded({
    extended: true
  })
);
app.use(bodyParser.json());
app.use("/api/products", productRoutes);
app.use("/api/reviews", reviewRoutes);
