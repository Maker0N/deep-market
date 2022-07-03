const { Schema, model } = require('mongoose')

const cartSchema = new Schema({
  _id: { type: String, required: true },
  title: { type: String, required: true },
  price: { type: Number, required: true },
  description: { type: String, required: true },
  category: { type: String, required: true },
  image: { type: String, required: true },
  rating: {
    rate: { type: Number, required: true },
    count: { type: Number, required: true },
  },
  rate: { type: Number, required: true },
  count: { type: Number, required: true },
})

const schema = new Schema({
  user: { type: String, required: true },
  userCart: [cartSchema],
}, {
  timestamps: true,
})

module.exports = model('UserCart', schema)
