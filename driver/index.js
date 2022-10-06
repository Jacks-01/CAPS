'use strict';

const log4js = require('log4js');
const logger = log4js.getLogger();
logger.level = 'DEBUG';

const { io } = require('socket.io-client');
const socket = io('http://localhost:3001/caps');

socket.on('DRIVER PICKUP', (payload) => {
  logger.debug(`Driver has picked up package`);
  socket.emit('IN TRANSIT', payload);

  setTimeout(() => {
    setTimeout(() => {
      logger.log('in transit...');
    }, 500);
    logger.log('Package has been delivered.');
    socket.emit('DELIVERED', payload);
  }, 5000);
});
