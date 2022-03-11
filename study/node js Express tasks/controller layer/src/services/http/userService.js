let url = require('../../config').businessLayerUrl;

let axios = require('axios').create({
    baseURL : url,
    timeout : 6000,
    
});

let userService = {

    async getAll() {

        let users = await axios.get('user/').data.body;
        
        return users;

    },

    async getById(userId) {

        let user = await axios.get('user/' + userId).data.body;
        
        if(!user)
            throw new Error('no such user');

        return user;

    },

}




module.exports = userService;