var Review = require("../model/review.model");

module.exports = {
  save: (req, res) => {
    var review = new Review(req.body);
    review.save().then(reviewResponse => {
      res.status(201);
      res.json(reviewResponse);
    });
  },
  getId: (req, res) => {
    var id = req.params.id;
    console.log('id',id)
    Review.findById(id, { __v: 0 }).then(review => {
      res.status(201);
      res.json(review);
    });
  }
};
