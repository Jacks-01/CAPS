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
        eventPool.emit('DRIVER PICKUP', { orderInfo });


        eventPool.once('DELIVERED', (payload) => {
            logger.log(`Thank you for your order ${payload.orderInfo.customer}!`);
        })
        return orderInfo;
    }, 500)
    return orderInfo
};