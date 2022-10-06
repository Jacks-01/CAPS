'use strict';

const Chance = require('chance')
const chance = new Chance()

const log4js = require('log4js')
const logger = log4js.getLogger()
logger.level = 'DEBUG'

const { io } = require('socket.io-client');
const socket = io('http://localhost:3001/caps');

const orderInfo = {
    store: chance.company(),
    orderId: chance.string(),
    customer: chance.name(),
    address: chance.address(),
    item: chance.word()
}

socket.emit('JOIN', orderInfo.store);
setInterval(() => {
    socket.emit('PICKUP READY', { orderInfo });
}, 5000);

socket.on('DELIVERED', payload => {
    logger.log(`Thank you for your order ${payload.orderInfo.customer}!`)
});
