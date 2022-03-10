const jwt = require('jsonwebtoken');
let { businessLayerUrl : url, secret } = require('../../config.js');

let axios = require('axios').create({
    baseURL : url,
    timeout : 1000
});


const authService = {

    async signUp(userData) {

        let user = await axios.get('/user?login=' + userData.login).data.body;

        if(user)
            throw new Error('login already in use').status = 400;

        return await axios.post('/user/', userData);

    },

    async logIn(userData) {

        let user = await axios.get('/user?login=' + userData.login).data.body;
        
        if(!user)
            throw new Error('Login or password is incorrect').status = 400;
    
        if(userData.password != user.password)
            throw new Error('Login or password is incorrect').status = 400;

            let token = jwt.sign({
                userId : user.id,
                refresh : false,
                exp: Math.floor(Date.now() / 1000) + (60 * 60) //1h
            }, secret);


        return {token: token};    

    },

    async isAdmin(userData) {

        let user = await axios.get('/user/' + userData.id).data.body;

        return user.role == 'Admin';
         
    }

}

module.exports = authService;