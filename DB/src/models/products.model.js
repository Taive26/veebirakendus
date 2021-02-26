const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productsSchema = new Schema({
  productName: {
    type: String, 
    required: true, 
    minlength: 2, 
    maxlength: 100
  },
  description:  { 
    type: String, 
    required: false, 
    minlength: 2, 
    maxlength: 100 },
  price:{ 
    type: String, 
    required: true, 
    maxlength: 100 },
  address:{ 
      type: String, 
      required: true, 
      maxlength: 100 },
})

productsSchema.set('toJSON', { virtuals: true });

module.exports = mongoose.model('products', productsSchema);