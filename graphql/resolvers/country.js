const Country = require('../../models/Country');

module.exports = {
  Query: {
    async countries() {
      try {
        const countries = await Country.find().sort({ p: 'asc' });
        return countries;
      } catch (err) {
        throw new Error(err);
      }
    },

    async getDistrict(_, { d }) {
      try {
        const getDistrict = await Country.find({ d: d });
        return getDistrict;
      } catch (err) {
        throw new Error(err);
      }
    },
    async getAmphur(_, { a }) {
      try {
        const getAmphur = await Country.find({ a: a });
        return getAmphur;
      } catch (err) {
        throw new Error(err);
      }
    },
    async getProvince(_, { p }) {
      try {
        const getProvince = await Country.find({ p: p });
        return getProvince;
      } catch (err) {
        throw new Error(err);
      }
    },
  },
};
