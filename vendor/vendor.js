'use strict';

const eventPool = require('../eventPool');
const Chance = require('chance');
const chance = new Chance();
const log4js = require('log4js');
const logger = log4js.getLogger();

const orderInfo = {
    store: chance.company(),
    orderId: chance.string(),
    customer: chance.name(),
    address: chance.address(),
    item: chance.word(),
};

module.exports = () => {
  setTimeout(() => {
        logger.log(`${orderInfo.store}: has a package ready for pickup!`);
        eventPool.emit('PICKUP READY', (orderInfo) => {
            logger.log('order info:', orderInfo)});
        eventPool.on('DELIVERED', () => {
            logger.log(`Thank you: ${orderInfo.name}`);
        })
    }, 1000);
};