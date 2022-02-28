const jwtBlacklist = require('../utils/jwtBlacklist');

const CronJob = require('cron').CronJob;

module.exports = function() {

    let job = new CronJob('* * */23 * * *', async function() {
        jwtBlacklist.clearList();
    });


    job.start();

}