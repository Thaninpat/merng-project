const { model, Schema } = require('mongoose');

const roomSchema = new Schema({
  username: String,
  password: String,
  email: String,
  createdAt: String,
  name: String,
  summary: String,
  description: String,
  room_type: String,
  maximum_nights: Number,
  minimum_nights: Number,
  beds: Number,
  accommodates: Number,
  price: Number,
  cleaning_fee: Number,
});
module.exports = model('Rooms', roomSchema);
