'use strict';

const PORT = 3001;
const log4js = require('log4js');
const logger = log4js.getLogger();
logger.level = 'DEBUG';

const socket = require('socket.io')(PORT);

//* create namespace
const caps = socket.of('/caps');

caps.on('connection', (socket) => {
  logger.log('Socket connected to caps namespace', socket.id);
  socket.on('JOIN', (payload) => {
    logger.log(`${payload} has joined the room`);
    socket.join(payload);
  });

  socket.on('PICKUP READY', (payload) => {
    logger.debug('Server PICKUP READY Event ', payload);
    socket.broadcast.emit('DRIVER PICKUP', payload);
  });

  socket.on('IN TRANSIT', (payload) => {
    logger.log('Package in transit:', payload);
  });

  socket.on('DELIVERED', (payload) => {
    logger.info('DELIVERED:', payload);
    socket.to(payload.orderInfo.store).emit('DELIVERED', payload);
  });
});
