'use strict';

const eventPool = require('../eventPool');
const Chance = require('chance');
const chance = new Chance();


module.exports = (payload, storeName) => {
    setTimeout(() => {
        console.log('VendorHandler')
    }, 1000);
}