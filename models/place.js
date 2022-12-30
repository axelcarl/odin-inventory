const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const PlaceShema = new Schema({
  name: String,
  location: String,
  chain: Boolean,
  burgers: []
})

PlaceShema.virtual('url').get(function() {
  return `/places/${this.id}`;
})


module.exports = mongoose.model('Place', PlaceShema);