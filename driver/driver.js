'use strict';

const eventPool = require('../eventPool');
const logger = require('../index');


module.exports = (orderInfo) => {
    logger.info('Order Info Recieved by Driver:', orderInfo);
    eventPool.emit('DRIVER PICKUP', () => {
        logger.log('Driver has recieved the package, in transit now...');
    })
};