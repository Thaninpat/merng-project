const { model, Schema } = require('mongoose');

const companySchema = new Schema({
  name: String,
  province: String,
  amphur: String,
  district: String,
  zipCode: String,
});
module.exports = model('Company', companySchema);
