const { ActivityType } = require("discord.js");

module.exports = (client) => {
  client.user.setActivity({
    name: "/추첨",
    type: ActivityType.Playing,
  });
};
