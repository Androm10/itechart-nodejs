const userRepository = require('../repository/userRepository');
const crypt = require('../utils/crypt');
const ResponseError = require('../utils/ResponseError');

module.exports = {

    addUser : async function(data) {

        data.password = await crypt.cryptPassword(data.password);

        let user = await userRepository.addUser(data);
        return user;
    },

    getById : async function(userId) {
        return await userRepository.getById(userId);
    },

    getByLogin : async function(login) {
        return await userRepository.getByLogin(login);
    },

    updateProfile : async function(userId, profile) {
        return await userRepository.updateProfile(userId, profile);
    },

    changePassword : async function(userId, passwords) {

        let user = await userRepository.getById(userId);

        if(!crypt.comparePassword(passwords.oldPassword, user.password)) {
            throw new ResponseError('Password cannot be changed', 400);
        }

        let hashedPassword = await crypt.cryptPassword(passwords.newPassword);

        await user.update({ password :  hashedPassword});

        return user;
    },

    updateStatus : async function(userId, status) {

        let user = await userRepository.getById(userId);

        if(!user)
            throw new ResponseError('no such user', 404);

        return await user.update({status : status});
    },

    getStatusStats : async function() {
        return await userRepository.getStatusStats();
    },

    mostActive : async function() {
        return await userRepository.mostActive();
    }

}