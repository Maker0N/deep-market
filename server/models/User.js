const { Schema, model } = require('mongoose')

const schema = new Schema({
  login: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  name: { type: String, required: true },
  avatar: { type: String, required: true },
}, {
  timestamps: true,
})

module.exports = model('User', schema)