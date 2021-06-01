'use strict';
const CharacterData = require('../model/Characters.model');
const superagent = require('superagent');

const getDataOfCharacter = (req , res)=> {
    const url = 'https://psychonauts-api.herokuapp.com/api/characters?limit=10';
    superagent.get(url).then(data =>{
        data.body.map(char =>{
            const newData = new CharacterData.Characters(char);
            console.log(newData); 
            res.send(newData);
        })
    }).catch(err =>{
        console.log(err);
    })
}

module.exports = {
    getDataOfCharacter
}