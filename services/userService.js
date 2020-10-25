const constant = require('../utils/constant');
const userDAO = require('../dao/userDao');

const UserService = {

    create: (userdetails) => {
        return new Promise((reslove, reject) => {

            if (!userdetails.email || !userdetails.name || !userdetails.password)
                reject({ status: constant.HTTP_CODES.INVALID_DATA, message: constant.MESSAGE.USER.ENTER_FIELDS });

            userDAO.checkExist(userdetails.email).then((data) => {

                if (data)
                    reject({ status: constant.HTTP_CODES.INVALID_DATA, message: constant.MESSAGE.USER.USER_ALREADY_REGISTERED });
                else {

                    userDAO.create(userdetails).then((result) => {
                        reslove({ status: constant.HTTP_CODES.SUCCESS, message: constant.MESSAGE.USER.CREATED });

                    }).catch((error) => {
                        reject({ status: constant.HTTP_CODES.INTERNAL_ERROR, message: constant.MESSAGE.USER.ENTER_FIELDS });
                    });
                }
            })

        })
    },

    getUser: (condition) => {
        return new Promise((reslove, reject) => {

            userDAO.getUser(condition).then(result => {

                reslove(result)
            }).catch(error => {

                reject(error)
            })
        })
    }


}
module.exports = UserService;



