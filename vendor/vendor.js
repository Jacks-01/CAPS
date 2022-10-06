'use strict'

const Chance = require('chance')
const chance = new Chance()

const log4js = require('log4js')
const logger = log4js.getLogger()
logger.level = 'INFO'

const { io } = require('socket.io-client')
const socket = io('http://localhost:3001/caps')

const orderInfo = {
    store: chance.company(),
    orderId: chance.string(),
    customer: chance.name(),
    address: chance.address(),
    item: chance.word()
}

// setInterval(() => {
// }, 5000);

socket.emit('JOIN', orderInfo.store);

socket.emit('PICKUP READY', { orderInfo })
// socket.on('DRIVER PICKUP', payload => {
//     logger.info(`${payload.orderInfo.store}: has a package ready for pickup!`)
//     socket.emit('DRIVER PICKUP', orderInfo)
// });
    


socket.on('DELIVERED', payload => {
    logger.log(`Thank you for your order ${payload.customer}!`)
})
