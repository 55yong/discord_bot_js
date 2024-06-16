const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("명령어")
    .setDescription("PSOKR Bot 명령어를 출력합니다."),
  run: ({ interaction }) => {
    interaction.reply("/추첨");
    interaction.reply("/주사위");
  },
};
