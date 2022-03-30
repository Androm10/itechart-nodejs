const config = require('../config');
let broker = require('amqplib').connect(config.rabbitmq);

async function createQueue() {
    let ch = await (await broker).createChannel();

    await ch.assertQueue('mailer');

    return ch;
}

let channel = createQueue();

exports.sendToMailer = async function(mail) {
    
    (await channel).sendToQueue('mailer', Buffer.from(mail));

}