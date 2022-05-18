const mongoose = require('mongoose')

const { Schema } = mongoose

const placeSchema = new Schema({
  name: { type: String, required: true },
  pic: String,
  cuisines: { type: String, required: true },
  city: { type: String, default: 'Anytown' },
  state: { type: String, default: 'USA' },
  founded: Number
})

const Place = mongoose.model('Place', placeSchema)
module.exports = Place
