import * as dotenv from 'dotenv';
const parsed = dotenv.config();

console.log(parsed.parsed);

class Config {

    rabbitURL: string

    usedEmail: string;
    usedPassword: string;
    usedService: string;

    queuesToSubcribe: Array<string>

    constructor(usedEmail: string, usedPassword: string, 
        usedService: string = 'gmail', queuesToSubcribe: string[] = ['mailer'],
        rabbitURL:string = 'amqp://localhost') {
        
        this.usedEmail = usedEmail;
        this.usedPassword = usedPassword;
        this.usedService = usedService;
        this.queuesToSubcribe = queuesToSubcribe;
        this.rabbitURL = rabbitURL;
    }
    
}

export default new Config(
    process.env.USED_EMAIL,
    process.env.USED_PASSWORD,
    process.env.USED_SERVICE,
    process.env.QUEUES.split(','),
    process.env.RABBITMQ
);