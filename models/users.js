const mongoose = require('../db');
const constant = require('../utils/constant');
const bcrypt = require('bcrypt');

const Schema = mongoose.Schema;


const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true,

    },
    phone: {
        type: Number,
        default:0

    },
    password: {
        type: String,
        required: true

    }

})

userSchema.pre('save', async function (next) {
    let hashpassword = await bcrypt.hash(this.password, 10);
    this.password = hashpassword;
    next();
})

module.exports = mongoose.model(constant.MODEL_NAME.USER, userSchema);