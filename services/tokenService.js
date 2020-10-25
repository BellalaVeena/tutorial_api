const jwt = require("jsonwebtoken");
const UserDAO = require("../dao/userDao");
const constant = require("../utils/constant");

const isAuthenticate = async (req, res, next) => {
    let token = req.headers.authorization;
    try {

        
        if (!token) {
            
            throw new Error('Token not avaialable in request');
        }
        let data = jwt.verify(token, constant.TOKEN_SECRET);


        if (!data) {
            throw new Error('Invalid Token');
        }
        
        let userData = await UserDAO.getUser({ "email": data.email });


        if (!userData) {
            throw new Error('Invalid Token');
        } else {
            req.user = userData;
        }
        next();


    } catch (error) {

        
        res.status(constant.HTTP_CODES.BAD_REQUEST).send({ error: error.toString() });
    }



}


module.exports = isAuthenticate;
