'use strict';

const eventPool = require('../eventPool');
const log4js = require('log4js');
const logger = log4js.getLogger();

module.exports = (payload) => {
    logger.log('In transit...')
    setTimeout(() => {
        logger.log('delivered!');
        eventPool.emit('DELIVERED', payload);
    }, 1000);
    return;

}