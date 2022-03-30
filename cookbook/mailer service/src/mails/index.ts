import * as events from 'events';
import mailTypes from './mailTypes';
import MessageCreator from './MessageCreator';


export default function constructMail(msg: any) {

    switch(msg.type) {

        case mailTypes.resetPassword : 
            return MessageCreator.createResetPassword(msg);

        default : 
            throw new Error('unvalid message type');
    }

}