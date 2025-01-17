const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();
const PORT = process.env.SE_PORT;
const { hashPassword, comparePasswords } = require('./util/bcryptHelper');
const checkAuth = require('./middleware/auth_middleware');
app = express();
app.use(express.json());
app.use(cors());
app.get('/',async (req,res)=>{
    console.log(`${req.method}  ${req.url}`);

    res.send(await hashPassword('jalikoa'));
});
app.get('/jalikoa/',checkAuth,(req,res)=>{
 console.log('Hey man I am happy to see you you have made it to the backend bro with authentication man');
});
app.listen(PORT,()=>{
    console.log(`Server is runnning at : http://localhost:${PORT}`);
})