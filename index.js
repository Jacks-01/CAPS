'use strict';

const eventPool = require('./eventPool');
const packageHandler = require('./package/package');
const vendorHandler = require('./vendor/vendor');
const driverHandler = require('./driver/driver');
const log4js = require('log4js');
const logger = log4js.getLogger();
logger.level = "info";

eventPool.once('PICKUP READY', vendorHandler);
eventPool.once('DRIVER PICKUP', driverHandler);
eventPool.once('PACKAGE', packageHandler);


eventPool.emit('PICKUP READY');

// * For continous running
// setInterval(() => {
//     eventPool.emit('PICKUP READY', vendorHandler);
// }, 5000);

// eventPool.on('PICKUP READY', vendorHandler);
// eventPool.on('DRIVER PICKUP', driverHandler);

module.exports = logger;