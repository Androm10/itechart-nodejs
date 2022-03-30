const { resetTokenModel } = require('../mongoose');

module.exports = {

    async addToken(token) {

        let existent = await resetTokenModel.exists({ 
            user: token.user
        });

        if(existent) {
            resetTokenModel.update({
                token: token.token
            });
            return;
        }
        
        resetTokenModel.create(token);
    },

    async getByUUID(uuid) {
        return await resetTokenModel.findOne({
            token : uuid
        });
    },


}
