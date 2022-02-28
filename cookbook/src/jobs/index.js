let cleanBlacklistJob = require('./cleanBlacklist'); 

exports.startAllJobs = async function() {

    cleanBlacklistJob();
    
}