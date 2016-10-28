/**
 * Reports to secret Telegram admins group about new events
 *
 * @module helpers/adminReports
 * @license MIT
 */

const adminChatId = -1001088665045;

/**
 * Sends admins notification that job was created
 *
 * @param  {Telegram:Bot} bot - Bot that should respond
 * @param  {Mongoose:Job} job - Job that should be sent
 */
function jobCreated(bot, job) {
  job.populate('client', (err, job) => {
    const msg = `👍 @${job.client.username} created a job:\n\n[${job.category.title}] ${job.hourly_rate}\n${job.description}`;
    bot.sendMessage(adminChatId, msg);
  });
}

/**
 * Sends admins notification that user has registered
 *
 * @param  {Telegram:Bot} bot - Bot that should respond
 * @param  {Mongoose:User} user - User that should be sent
 */
function userRegistered(bot, user) {
  bot.sendMessage(adminChatId, `🦄 @${user.username} just registered!`);
}

module.exports = {
  jobCreated,
  userRegistered,
};

