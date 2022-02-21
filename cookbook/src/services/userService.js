const userRepository = require('../repository/userRepository');

module.exports = {

    addUser : async function(data) {

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

    }

}