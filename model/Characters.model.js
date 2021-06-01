'use strict';

class Characters {
    constructor(data){
        this.name = data.name,
        this.gender = data.gender,
        this.psiPowers = data.psiPowers.img;
        this.img = data.img
    }
}

module.exports = {
    Characters
}