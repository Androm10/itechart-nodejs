import * as amqp from 'amqplib';
import IBroker from './IBroker';

class Broker implements IBroker {

    queues: Set<string>;

    rabbitURL: string;
    connection: amqp.Connection;
    channel: amqp.Channel;

    handler: (msg: any) => any;

    constructor(url: string, handler?: (msg: any) => any) {

        this.queues = new Set();
        this.rabbitURL = url;
        if(handler)
            this.handler = handler;
    }

    async initialize() {

        this.connection = await amqp.connect(this.rabbitURL);
        this.channel = await this.connection.createChannel();

    }

    async subscribe(queue: string) {

        if(!this.connection)
            await this.initialize();

        if(this.queues.has(queue))
            return;

        await this.channel.assertQueue(queue, {durable: true});
        
        this.queues.add(queue);

        this.channel.consume(queue, async (msg) => {
            
            if(this.queues.has(queue))
                this.handler(msg);

        }, { noAck : true });

    }

    unsubscribe(queue: string) {
        this.queues.delete(queue);
    }

    setHandler(handler: (msg: any) => any): void {
        this.handler = handler;
    }

}

export default Broker;