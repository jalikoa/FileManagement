const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

dotenv.config();
const jwt_secret = process.env.JWT_SECRET;
// Return the token
const creatJwt = (user)=>{
    const {name,id} = user;
    return jwt.sign({name,id},jwt_secret,{expiresIn:'1h'});
}
// returns the user particulars stored in the token
const verifyJwt = (token)=>{
    try {
      return  jwt.verify(token,jwt_secret);
    } catch (error) {
        return null;
    }
}
module.exports = { creatJwt,verifyJwt };