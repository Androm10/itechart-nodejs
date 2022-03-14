const ResponseError = require('../../utils/responseError');

let url = require('../../config').businessLayerUrl;

let axios = require('axios').create({
    baseURL : url,
    timeout : 6000,
    validateStatus: function (status) {
        return (status >= 200 && status < 300) || status >= 400 && status < 500; 
      },
});

let userService = {

    async getAll() {

        let users = (await axios.get('user/')).data.body;
        
        return users;

    },

    async getById(userId) {

        let res = (await axios.get('user/' + userId));

        if(res.data.type == 'error')
            throw new ResponseError('no such user',  404);

        return res.data.body;

    },

}




module.exports = userService;