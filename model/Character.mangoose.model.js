'use strict';
const mongoose = require('mongoose');

const dataSchema = mangoose.schema({
    name : 
        {
            type: String,
            trim: true,
            unique: true,
            lowercase: true
        },
    slug : 
        {
            type: String,
            trim: true,
            unique: true,
            lowercase: true
        },
    gender : String,
    img: String,
    psiPowers: String
})

const dataModel = mangoose.model('new data Model' ,dataSchema);

module.exports={
    dataModel
}