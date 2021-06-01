'use strict';

const dataCrud = require('../model/Character.mangoose.model');
const dataOfCharacter = require('../model/Characters.model')


const addfavorites = async (req,res) =>{
    const {
        name,
        gender,
        img,
        psiPowers
    }= req.body
    const slug = name.toLowerCase().split(' ').join('-');
    dataOfCharacter.find({slug:slug} ,(data)=>{
        const newDataModel = new dataCrud.dataModel(data);
    }