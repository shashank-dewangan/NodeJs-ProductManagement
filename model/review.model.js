var mongoose = require('mongoose')

module.exports = mongoose.model('Review',{
    productId : {type : String, required:true},
    rating : {type: Number, required:true},
    name:{type:String, required:true},
    subject: {type: String, required:true},
    message : {type:String, required:true}
})