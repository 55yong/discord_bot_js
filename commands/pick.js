const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("추첨")
    .setDescription("음성 채널에 있는 플레이어 중 한 명을 무작위로 추첨합니다.")
    .addIntegerOption((option) =>
      option
        .setName("인원수")
        .setDescription("추첨할 인원수를 입력해주세요.")
        .setRequired(true)
    ),
  run: ({ interaction }) => {
    interaction.reply("asd");
  },
};
