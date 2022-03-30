class MessageCreator {

    static createDefault(msg: any) {

        return {
            from: '"Cookbook mailer" ' + `<${msg.from}>`,
            to: msg.to,
            subject: msg.subject,
            template: msg.template,
            context: msg.context
        }

    }   

    static createResetPassword(msg: any) {

        return {
            from: '"Cookbook mailer" ' + `<${msg.from}>`,
            to: msg.to,
            subject: 'Password resetting',
            template: 'resetPassword',
            context: msg.context
        }

    }

}

export default MessageCreator;