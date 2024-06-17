const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");

module.exports = {
  deleted: false,
  data: new SlashCommandBuilder()
    .setName("주사위")
    .setDescription("주사위를 굴려 우선 순위를 정합니다."),
  run: ({ interaction }) => {
    let result = "";
    let color = 0x000;
    const dice1 = Math.floor(Math.random() * 6 + 1);
    const dice2 = Math.floor(Math.random() * 6 + 1);

    if (dice1 > dice2) {
      result = "1번 주장 선픽";
      color = 0xff0000;
    } else if (dice1 < dice2) {
      result = "2번 주장 선픽";
      color = 0x00ff56;
    } else {
      result = "무승부";
      color = 0xfafa00;
    }

    const embed = new EmbedBuilder()
      .setColor(color)
      .setTitle("주사위 게임 결과")
      .addFields(
        {
          name: "1번",
          value: `:game_die: ${dice1}`,
          inline: true,
        },
        {
          name: "2번",
          value: `:game_die: ${dice2}`,
          inline: true,
        }
      )
      .addFields({
        name: "결과",
        value: `${result}`,
      });

    interaction.reply({ embeds: [embed] });
  },
};
