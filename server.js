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
  socket.on('JOIN', (room) => {
    logger.log(`${room} has joined the room`);
    socket.join(room);
  });
});

socket.on('PICKUP READY', (payload) => {
  logger.debug('Server PICKUP READY Event ', payload);
  socket.emit('DRIVER PICKUP', payload);
});
