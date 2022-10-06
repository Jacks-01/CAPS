'use strict';

const PORT = 3001;
const log4js = require('log4js');
const logger = log4js.getLogger();
logger.level = 'DEBUG';

const server = require('socket.io')(PORT);

// create namespace
const caps = server.of('/caps');

caps.on('connection', (socket) => {
  logger.log('Socket connected to caps namespace', socket.id);
  socket.on('JOIN', (room) => {
    logger.log(`${room} has joined the room`);
    socket.join(room);
    socket.broadcast.emit('PICKUP READY');
  });

  socket.on('PICKUP READY', (payload) => {
    logger.debug('Room PICKUP READY Event ', payload);
    socket.broadcast.emit('PICKUP READY', payload);
  });
});

// connect server

server.on('connection', (socket) => {
  logger.log('Socket connected to Event Server', socket.id);

  socket.on('PICKUP READY', (payload) => {
    logger.debug('Server PICKUP READY Event ', payload);
    // socket.broadcast.emit('PICKUP READY', payload);
  });

  // final event catch in the cycle
  socket.on('RECIEVED', (payload) => {
    logger.log('SERVER RECIEVED event', payload);
    socket.broadcast.emit('RECIEVED, payload');
  });
});
