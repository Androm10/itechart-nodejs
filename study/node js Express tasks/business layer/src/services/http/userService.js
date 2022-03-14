const ResponseError = require('../../utils/ResponseError');

let url = require('../../config').DALayerUrl;

let axios = require('axios').create({
    baseURL : url,
    timeout : 6000,    
});

let userService = {

    async create(userInfo) {
        
        let user = (await axios.post('user/', userInfo)).data.body;
        
        if(!user)
            throw new ResponseError('cannot create user', 400);

        return user;
    },

    async getAll(query) {

        let res = await axios.get('user/');

        let users = res.data.body;

        if('login' in query) {
            users = users.filter((user) => {
                return user.login == query['login'];
            })
        }
                
        return users;

    },

    async getById(userId) {
        let user = (await axios.get('user/' + userId)).data.body;
        
        if(!user)
            throw new ResponseError('no such user', 404);

        return user;

    },

}




module.exports = userService;