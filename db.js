const mongoose = require('mongoose');
const constant = require('./utils/constant');

mongoose.connect(constant.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
}, () => {
    console.log("succesfully connected to the database");
});


module.exports = mongoose;