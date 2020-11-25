const { model, Schema } = require('mongoose');

const countrySchema = new Schema({
  d: String,
  a: String,
  p: String,
  z: Number,
});
module.exports = model('Country', countrySchema);
