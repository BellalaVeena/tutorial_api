const constant = require('../utils/constant');
const tutorialsDAO = require("../dao/tutorialDao");

const tutorialService = {
    create: (payload) => {
        return new Promise((reslove, reject) => {
            tutorialsDAO.create(payload).then((result) => {

                reslove({ status: constant.HTTP_CODES.SUCCESS, message: constant.MESSAGE.TUTORIALS.TUTORIALS_CREATED });

            }).catch((error) => {

                reject({ status: constant.HTTP_CODES.INTERNAL_ERROR, message: constant.MESSAGE.TUTORIALS.ENTER_FIELDS });
            });

        })
    },

    getAll: (page, size) => {
        return new Promise((reslove, reject) => {
            tutorialsDAO.getAll(page, size).then(result => {

                reslove({ status: constant.HTTP_CODES.SUCCESS, tutorials: result })
            }).catch(error => {

                reject(error)
            })
        })
    },
    getById: (id) => {
        return new Promise((reslove, reject) => {
            tutorialsDAO.getById(id).then(result => {
                if (!result)
                    reject({ status: constant.HTTP_CODES.INVALID_DATA, message: constant.MESSAGE.TUTORIALS.IMPROPER_ID })

                reslove({ status: constant.HTTP_CODES.SUCCESS, tutorial: result })

            }).catch(error => {

                reject(error)
            })
        })
    },

    deleteAll: () => {
        return new Promise((reslove, reject) => {
            tutorialsDAO.deleteAll().then(result => {
                if (!result.n)
                    reject({ status: constant.HTTP_CODES.INVALID_DATA, message: constant.MESSAGE.TUTORIALS.NO_RECORDS })


                reslove({ status: constant.HTTP_CODES.SUCCESS, message: constant.MESSAGE.TUTORIALS.DELETED_SUCCESS, data: result })

            }).catch(error => {

                reject(error)
            })
        })
    },

    deleteById: (id) => {
        return new Promise((reslove, reject) => {
            tutorialsDAO.deleteById({ _id: id }).then(result => {
                if (!result.n)
                    reject({ status: constant.HTTP_CODES.INVALID_DATA, message: constant.MESSAGE.TUTORIALS.IMPROPER_ID })


                reslove({ status: constant.HTTP_CODES.SUCCESS, message: constant.MESSAGE.TUTORIALS.DELETED_SUCCESS, data: result })
            }).catch(error => {

                reject(error)
            })
        })
    },
    updateById: (id, payload) => {
        return new Promise((reslove, reject) => {
            tutorialsDAO.updateById({ _id: id }, payload).then(result => {

                reslove({ status: constant.HTTP_CODES.SUCCESS, message: constant.MESSAGE.TUTORIALS.SUCCESS, modified_data: result })
            }).catch(error => {

                reject(error)
            })
        })
    },

}


module.exports = tutorialService



