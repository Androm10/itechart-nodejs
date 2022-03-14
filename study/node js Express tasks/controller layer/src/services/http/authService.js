const jwt = require('jsonwebtoken');
let { businessLayerUrl : url, secret } = require('../../config.js');
const ResponseError = require('../../utils/responseError.js');

let axios = require('axios').create({
    baseURL : url,
    timeout : 6000,
    validateStatus: function (status) {
        return (status >= 200 && status < 300) || status >= 400 && status < 500; 
      },
});


const authService = {

    async signUp(userData) {

        let res = (await axios.get('/user?login=' + userData.login));

        if(res.data.type == 'error') 
            throw new ResponseError(res.data.body, res.status);

        let user = res.data.body;
        if(user)
            throw new ResponseError('login already in use', 400);

        return (await axios.post('/user/', userData)).data;

    },

    async logIn(userData) {

        let res = (await axios.get('/user?login=' + userData.login));

        if(res.data.type == 'error')
            throw new ResponseError(res.data.body, res.status);

        let user = res.data.body[0];
        if(!user)
            throw new ResponseError('Login or password is incorrect', 400);
    
        if(userData.password != user.password)
            throw new ResponseError('Login or password is incorrect', 400);
            
            let token = jwt.sign({
                userId : user.id,
                exp: Math.floor(Date.now() / 1000) + (60 * 60) //1h
            }, secret);


        return {token: token};    

    },

    async isAdmin(userData) {

        let res = (await axios.get('/user/' + userData.id));

        if(res.data.type == 'error')
            throw new ResponseError('no such user', 404);

        let user = res.data.body;

        return user.role == 'Admin';
         
    }

}

module.exports = authService;