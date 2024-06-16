const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("명령어")
    .setDescription("명령어 모음을 출력합니다."),
  run: ({ interaction }) => {
    interaction.reply(
      "**/추첨** : 음성 채널에 있는 플레이어 중 한 명을 무작위로 추첨합니다. \n**/주사위** : 두 개의 주사위를 굴려 순서를 결정합니다."
    );
  },
};
