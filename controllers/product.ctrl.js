var Product = require("../model/Product.model");
var Review = require("../model/review.model");
module.exports = {
  //   getByPage: (req, res) => {
  //     var pageSize = +req.params.pageSize;
  //     var pageIndex = +req.params.pageIndex - 1;
  //     var count = 0;
  //     Product.count()
  //       .then(cnt => {
  //         count = cnt;
  //         var query = Product.find({}, { __v: 0 })
  //           .skip(pageIndex * pageSize)
  //           .limit(pageSize)
  //           .sort("-lastUpdated");
  //         return query.exec();
  //       })
  //       .then(products => {
  //         res.status(200);
  //         res.json({
  //           metadata: {
  //             count: count,
  //             pageSize: pageSize,
  //             totalPages: Math.ceil(count / pageSize)
  //           },
  //           data: products
  //         });
  //       })
  //       .catch(err => console.log("error", err));
  //   },
  getByPage: async (req, res) => {
    var pageSize = +req.params.pageSize;
    var pageIndex = +req.params.pageIndex - 1;

    var count = await Product.count();

    var products = await Product.find({}, { __v: 0 })
      .skip(pageIndex * pageSize)
      .limit(pageSize)
      .sort("-lastUpdated");

    //var products = await query.exec();

    res.status(200);
    res.json({
      metadata: {
        count: count,
        pageSize: pageSize,
        totalPages: Math.ceil(count / pageSize)
      },
      data: products
    });
  },
  get: async (req, res) => {
    var count = await Product.count();
    var products = await Product.find({}, { __v: 0 });

    res.status(200);
    res.json({
      count,
      data: products
    });
  },
  getById: async (req, res) => {
    var id = req.params.id;
    Product.findById(id, { __v: 0 }).then(product => {
      var jsonProduct = product.toJSON();
      Review.find({ productId: product._id }).then(reviews => {
        res.status(201);
        res.json({ ...jsonProduct, reviews });
      });
    });
  },
  save: (req, res) => {
    var product = new Product(req.body);
    product.save((err, response) => {
      res.status(201);
      res.json(req.body);
    });
  }
};
