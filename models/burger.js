const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const BurgerShema = new Schema({
  name: String,
  ingredients: [String],
})

BurgerShema.virtual('url').get(function() {
  return `/burger/${this.id}`;
})

module.exports = mongoose.model('Burger', BurgerShema);