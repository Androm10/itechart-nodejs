let url = require('../../config').DALayerUrl;

let axios = require('axios').create({
    baseURL : url,
    timeout : 6000,
    
});

let userService = {

    async create(userInfo) {
        
        let user = await axios.post('user/', userInfo).data.body;
        
        if(!user)
            throw new Error('cannot create user');

        return user;
    },

    async getAll(query) {

        let users = await axios.get('user/').data.body;

        if('login' in query) {
            users = users.filter((user) => {
                return user.login == query['login'];
            })
        }
        
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