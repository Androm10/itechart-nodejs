import * as path from 'path';
import * as hbs from 'nodemailer-express-handlebars';
import * as nodemailer from 'nodemailer';

import Transporter from './Transporter';
import config from '../config';

const handlebarOptions: hbs.NodemailerExpressHandlebarsOptions = {
    viewEngine: {
        partialsDir: path.resolve('./src/templates/'),
        defaultLayout: '',
    },
    viewPath: path.resolve('./src/templates/'),
};

const transporter: Transporter = new Transporter(
    config.usedService,
    config.usedEmail,
    config.usedPassword,
    handlebarOptions);


export const transport: nodemailer.Transporter = transporter.instance;