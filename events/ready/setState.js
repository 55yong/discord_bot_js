const { ActivityType } = require("discord.js");

module.exports = (client) => {
  client.user.setActivity({
    name: "/명령어",
    type: ActivityType.Playing,
  });
};
