const userRepository = require('../repository/userRepository');
const crypt = require('../utils/crypt');

module.exports = {

    addUser : async function(data) {

        data.password = await crypt.cryptPassword(data.password);

        let user = await userRepository.addUser(data);
        return user;

    },

    getById : async function(userId) {
        
        let user = await userRepository.getById(userId);
        return user;

    },

    getByLogin : async function(login) {

        let user = await userRepository.getByLogin(login);
        return user;
    
    },

    updateProfile : async function(userId, profile) {
        
        let updatedProfile = await userRepository.updateProfile(userId, profile);
        return updatedProfile;

    },

    changePassword : async function(userId, passwords) {

        let user = await userRepository.getById(userId);

        if(!crypt.comparePassword(passwords.oldPassword, user.password)) {
            throw(new Error('Password cannot be changed'));
        }

        let hashedPassword = await crypt.cryptPassword(passwords.newPassword);

        await user.update({ password :  hashedPassword});

        return user;
    }

}