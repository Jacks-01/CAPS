'use strict';

const eventPool = require('./eventPool');
// const packageHandler = require('./package/package');
// const vendorHandler = requrie('./vendor/vendor');
// const driverHandler = require('./driver/driver');
const log4js = require('log4js');
const logger = log4js.getLogger();
logger.level = "info";


setInterval(() => {
    logger.info('debug stuff')
    console.log('------------------------- break --------------------------');
}, 5000);