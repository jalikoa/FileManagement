const {verifyJwt} = require("../util/jwt_helper");

const checkAuth = (req, res, next) => {
    const token = req.header('Authorization')?.replace('Bearer ', '');
    if (!token) {
      return res.status(401).json({ message: 'No token, authorization denied' });
    }
    try {
      const decoded = verifyJwt(token);
      req.user = decoded;
      next();
    } catch (error) {
      return res.status(401).json({ message: 'Invalid or expired token' });
    }
  };
  module.exports = checkAuth;