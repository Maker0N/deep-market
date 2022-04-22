const { Schema, model } = require('mongoose')

const schema = new Schema({
  title: { type: String, required: true },
  price: { type: Number, required: true },
  description: { type: String, required: true },
  category: { type: String, required: true },
  image: { type: String, required: true },
  rating: {
    rate: { type: Number, required: true },
    count: { type: Number, required: true },
  },
}, {
  timestamps: { createdAt: 'created_at' },
})

module.exports = model('Product', schema)
