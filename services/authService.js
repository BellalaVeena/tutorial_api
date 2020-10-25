
const UserDAO = require('../dao/userDao');
const constant = require('../utils/constant');
const jwt = require('jsonwebtoken');

const authService = {
    login: (payload) => {
        return new Promise((resolve, reject) => {
            UserDAO.getUser({ email: payload.email }).then(async result => {
                if (result) {

                    let isCompare = await UserDAO.comparePassword(payload.password, result.password)
                    
                    if (isCompare) {
                        let token = jwt.sign(result._doc, constant.TOKEN_SECRET);
                        let resData = { name: result.name, email: result.email, _id: result._id }
                        resolve({status:constant.HTTP_CODES.SUCCESS,message: constant.MESSAGE.USER.LOGIN_SECCESS,user: resData, token });

                    }
                    else {
                        reject({status:constant.HTTP_CODES.INVALID_DATA,message:constant.MESSAGE.USER.INVALID_PASSWORD });
                    }

                }
                else {
                    reject({status:constant.HTTP_CODES.INVALID_DATA,message: constant.MESSAGE.USER.IMPROPER_EMAIL });
                }
            })
        })
    }
}


module.exports = authService