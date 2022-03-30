import * as nodemailer from 'nodemailer';
import * as hbs from 'nodemailer-express-handlebars';
import logger from '../logger/index';

class Transporter {

    instance: nodemailer.Transporter;

    constructor(service: string, user: string, pass: string, 
        handlebarOptions?: hbs.NodemailerExpressHandlebarsOptions) {

        this.instance = nodemailer.createTransport({
            service : service,
            auth : {
                user : user,
                pass : pass
            }
        });
        
        if(handlebarOptions) {
            try {
                this.instance.use('compile', hbs(handlebarOptions));
            }
            catch(error) {
                logger.log(error);
            }
        }

    }

    set handlebarOptions(opts: hbs.NodemailerExpressHandlebarsOptions ) {
        
        this.instance.use('compile', hbs(opts));

    }


}



export default Transporter;
