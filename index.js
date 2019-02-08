var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var productRoutes = require("./routes/product.routes");
var reviewRoutes = require('./routes/review.route');
var userRoutes = require('./routes/user.route');
var isAuthenticated = require('./utilities/Authentication')
var config = require('./utilities/config')
mongoose.connect(
  config.localConnectionString,
  {
    useNewUrlParser: true,
    useCreateIndex: true,
  }
);
var port = process.env.PORT || 2000
app.listen(port, () => console.log("server is running at post " + port))

app.use(
  bodyParser.urlencoded({
    extended: true
  })
);
app.use(bodyParser.json());
app.use("/api/users", userRoutes);
app.use(isAuthenticated);
app.use("/api/products", productRoutes);
app.use("/api/reviews", reviewRoutes);

