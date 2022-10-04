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
        logger.info(`${orderInfo.store}: has a package ready for pickup!`)
        eventPool.emit('PICKUP READY', (orderInfo) => {
            logger.info('order info:', orderInfo)});
        eventPool.on('DELIVERED', () => {
            logger.info(`Thank you: ${orderInfo.name}`);
        })
    }, 1000);
}