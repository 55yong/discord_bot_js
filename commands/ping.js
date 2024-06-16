const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("ping")
    .setDescription("pong이라고 응답합니다."),
  run: ({ interaction }) => {
    interaction.reply("PongPong!");
  },
};
