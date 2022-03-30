import * as nodemailer from 'nodemailer';
import IBroker from "./amqp/IBroker";
import constructMail from "./mails/index";
import SimpleLogger from './logger/SimpleLogger';

let logger = new SimpleLogger('def');

class App {

    listeningQueues: string[];
    broker: IBroker;
    transporter: nodemailer.Transporter;

    constructor(listeningQueues: string[], broker: IBroker, transporter: nodemailer.Transporter) {

        this.listeningQueues = listeningQueues;
        this.broker = broker;
        this.transporter = transporter;
    }

    start() {
        this.broker.setHandler(this.acceptMessage.bind(this));

        this.listeningQueues.forEach((queue) => {
            this.broker.subscribe(queue);
        });

    }

    async acceptMessage(msg: any) {
        
        let mail;
        try {       
            let json = JSON.parse(msg.content.toString()); 
            mail = constructMail(json);
        }
        catch (error) {
            logger.log(`Cannot construct mail: \n\t ${error.message}`);
            return;
        }

        this.transporter.sendMail(mail, (error : Error, info : any) => {

            if(error) {
                return logger.log(error);
            }
            
            logger.log('Mail sent: ' + info.response);

        })

    }

}

export default App;