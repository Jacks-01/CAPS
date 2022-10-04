'use strict';

const eventPool = require('../eventPool');
const Chance = require('chance');
const chance = new Chance();
const logger = require('../index');

const orderInfo = {
    store: chance.company,
    orderId: chance.android_id,
    customer: chance.name,
    address: chance.address,
    item: chance.string,
};

module.exports = (orderInfo) => {
        logger.info(`${orderInfo.store}: has a package ready for pickup!`)
        eventPool.emit('PICKUP READY', (orderInfo) => {
            logger.info('order info:', orderInfo)});
        eventPool.on('DELIVERED', () => {
            logger.log(`Thank you: ${orderInfo.name}`);
        })
    };
