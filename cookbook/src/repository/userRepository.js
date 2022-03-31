const sequelize = require('../database');
const ResponseError = require('../utils/ResponseError');
const models = sequelize.models;

module.exports = {
    
    addUser : async function(data) {
        
        let existentUser = await models.user.findOne( {where : { login: data.login}} );

        if(existentUser)
            throw new ResponseError('such login already exist', 400);

        let user = await models.user.create( {login: data.login, password: data.password, status: 'active'});
        

        user.createUserInfo({ username: data.username});

        let userRole = await models.role.findOne({where : { name: 'User' }});

        user.addRole(userRole);

        return user;

    },

    getById : async function(userId) {

        let user = await models.user.findByPk(userId);

        if(!user)
            throw new ResponseError('no such user', 404);

        return user;

    },

    getByLogin : async function(login) {

        let user = await models.user.findOne({where : {login : login}});

        if(!user)
            throw new ResponseError('no such user', 404);

        return user;

    },

    updateProfile : async function(userId, profile) {

        let userInfo = await models.userInfo.findOne({where : {userId}});

        await userInfo.update(profile);

        return userInfo;

    },

    getStatusStats : async function() {

        return await models.user.findAll({
            attributes : ['status', [sequelize.fn('COUNT', '*'), 'users']],
            group: 'status'
        });

    },

    mostActive : async function() {
        
        return await sequelize.query(
            'SELECT u.id, COUNT(cr.id) + COUNT(cc.id) as "comments", '+ 
            'COUNT(lr.id) + COUNT(lc.id) as "likes" FROM users u ' +
            'LEFT JOIN c_comments cc ON u.id = cc.user_id ' +
            'LEFT JOIN r_comments cr ON u.id = cr.user_id ' +
            'LEFT JOIN c_likes lc ON u.id = lc.user_id ' +
            'LEFT JOIN r_likes lr ON u.id = lr.user_id ' +
            'GROUP BY u.id ' +
            'ORDER BY comments + likes DESC',
            {
                type : "SELECT"
            });
            
    }

}