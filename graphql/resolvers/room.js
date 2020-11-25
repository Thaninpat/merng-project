const Room = require('../../models/Room');

module.exports = {
  Query: {
    async rooms() {
      try {
        const rooms = await Room.find().sort({ createdAt: -1 }); // Posts ล่าสุดอยู่ก่อน
        return rooms;
      } catch (err) {
        console.log(err);
        throw new Error(err);
      }
    },
  },
  Mutation: {
    async createRoom(root, { roomInput }) {
      try {
        return await Room.create(roomInput);
      } catch (err) {
        console.log(err);
        throw new Error(err);
      }
    },
  },
};
