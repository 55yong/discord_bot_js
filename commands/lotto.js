const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  deleted: false,
  data: new SlashCommandBuilder()
    .setName("뽑기")
    .setDescription("입력한 최대 인원수 중 한 명을 뽑습니다.")
    .addIntegerOption((option) =>
      option
        .setName("최대인원수")
        .setDescription("최대 인원수를 입력해주세요.")
        .setRequired(true)
    ),
  run: ({ interaction }) => {
    const cnt = interaction.options.get("최대인원수").value;
    try {
      const rand = Math.floor(Math.random() * cnt + 1);

      interaction.reply(`${rand}번`);
    } catch (e) {
      interaction.reply(`${e}`);
    }
  },
  managerOnly: false,
};
