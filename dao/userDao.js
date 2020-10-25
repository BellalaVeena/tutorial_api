const userSchema = require('../models/users');
const bcrypt = require('bcrypt');

const UserDAO = {
    create: (userdetails) => {
        return new userSchema(userdetails).save();
    },

    checkExist: (email) => {
        return userSchema.findOne({ email });
    },

    getUser: (condition) => {
        return userSchema.findOne(condition);
    },

    comparePassword: async (password, existPassword) => {
        let data = await bcrypt.compare(password, existPassword);
        return data;
    },


}

module.exports = UserDAO;

