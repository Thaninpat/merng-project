const { AuthenticationError } = require('apollo-server');
const jwt = require('jsonwebtoken');
// const { SECRET_KEY } = require('../config');
require('dotenv').config();
// dotenv.config();

module.exports = (context) => {
  // context = { ... headers }
  const authHeader = context.req.headers.authorization;
  if (authHeader) {
    // Bearer ....
    const token = authHeader.split('Bearer ')[1]; //ต้องเว้นวรรคหลัง Bearer ด้วย
    if (token) {
      try {
        const user = jwt.verify(token, process.env.SECRET_KEY);
        return user;
      } catch (err) {
        throw new AuthenticationError('Invalid/Expired token');
      }
    }
    // ถ้า Error ลบตรงนี้ออก
    const user = getUser(token);
    if (!user) throw new AuthenticationError('you must be logged in');
    // ถ้า Error ลบตรงนี้ออก

    throw new Error("Authentication token must be 'Bearer [token]");
  }
  throw new Error('Authorization header must be provided');
};
