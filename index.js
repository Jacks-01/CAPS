'use strict';

const eventPool = require('./eventPool');
// const packageHandler = require('./package/package');
const vendorHandler = require('./vendor/vendor');
const driverHandler = require('./driver/driver');
const log4js = require('log4js');
const logger = log4js.getLogger();
logger.level = "info";

eventPool.on('PICKUP READY', vendorHandler);
eventPool.on('DRIVER PICKUP', driverHandler);
// eventPool.on('PACKAGE', packageHandler);

setInterval(() => {
    eventPool.emit('PICKUP READY', vendorHandler);
    console.log('------------------------- break --------------------------');
}, 5000);


module.exports = logger;