const User = require('../../models/User');

module.exports = {
  Query: {
    async viewUsers() {
      try {
        const users = await User.find().sort({ createdAt: -1 }); // Posts ล่าสุดอยู่ก่อน
        return users;
      } catch (err) {
        console.log(err);
        throw new Error(err);
      }
    },

    async viewUser(_, { username }) {
      try {
        const user = await User.findOne({ username });
        if (user) {
          return user;
        } else {
          throw new Error('User not found');
        }
      } catch (err) {
        console.log(err);
        throw new Error(err);
      }
    },
  },
};
