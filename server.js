'use strict';

const { Server } = require('socket.io');
const PORT = process.env.PORT || 3001;
const log4js = require('log4js');
const logger = log4js.getLogger();
const server = new Server(PORT);

// create namespace
const caps = server.of('/caps');

caps.on('connection', (socket) => {
  logger.log('Socket conencted to caps namespace', socket.id);
  socket.on('JOIN', (room) => {
    socket.join(room);
  });
});

// connect server
server.on('connection', (socket) => {
  logger.log('Socket connected to Event Server', socket.id);

  socket.on('FIRST EVENT', (payload) => {
    logger.log('SERVER FIRST EVENT', payload);
    socket.broadcast.emit('FIRST EVENT', payload);
  });

  socket.on('RECIEVED', (payload) => {
    logger.log('SERVER RECIEVED event', payload);
    socket.boardcast.emite('RECIEVED, payload');
  });
});
