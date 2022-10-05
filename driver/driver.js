'use strict';

const eventPool = require('../eventPool');
const log4js = require('log4js');
const logger = log4js.getLogger();

module.exports = (payload) => {
  logger.info('Order Info Recieved by Driver:', payload.orderInfo);
  eventPool.emit('PACKAGE', payload);
};
