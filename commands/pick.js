const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  deleted: false,
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
    const cnt = interaction.options.get("인원수").value;
    const channel = interaction.member.voice.channel.id;
    const members = interaction.member.voice.channel.members;
    const connection_members = [];
    const winning_members = [];

    members.forEach((key) => {
      connection_members.push(key);
    });

    for (let i = 0; i < cnt; i++) {
      const rand = Math.floor(Math.random() * connection_members.length);
      winning_members.push(connection_members[rand]);
    }

    interaction.reply(`:tada: 당첨 :trophy: ${winning_members}`);
  },
  managerOnly: true,
};
