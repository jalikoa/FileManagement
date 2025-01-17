const bcrypt = require('bcrypt');

// Function to hash password
const hashPassword =async  (password) => {
  try {
    const salt = await  bcrypt.genSalt(10); 
    const hashed = await  bcrypt.hash(password, salt); 
    console.log(hashed); 
    return hashed;
  } catch (error) {
    console.log(error.message); 
  }
}
const comparePasswords = async (hashed, provided) => {
  try {
    const res = await bcrypt.compare(provided, hashed); 
    if (res) {
      console.log("Password matches!");
      return true; 
    } else {
      console.log('Password does not match!');
      return false; 
    }
  } catch (err) {
    console.log(err.message);
    return null; 
  }
}

module.exports = { hashPassword, comparePasswords };
