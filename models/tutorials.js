let mongoose = require('../db');
const constant = require('../utils/constant');

const Schema = mongoose.Schema;

const tutorialSchema = new Schema({
    name:{
        type:String,
        required:true
    },

    author:{
        type: Schema.Types.ObjectId,
        ref: 'users'
     },

    createdAt:{
         type : Date,
         default: Date.now
         
    },

    updatedAt:{
        type : Date,
        default: Date.now

    }
   
});
module.exports=mongoose.model(constant.MODEL_NAME.TUTORIAL,tutorialSchema);