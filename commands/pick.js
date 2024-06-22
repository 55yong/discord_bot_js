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
        .setMaxValue(3)
    ),
  run: ({ interaction }) => {
    const cnt = interaction.options.get("인원수").value;
    try {
      const members = Array.from(
        interaction.member.voice.channel.members.values()
      );
      if (cnt > members.length) {
        interaction.reply("추첨할 인원수가 음성 채널의 멤버 수보다 많습니다.");
        return;
      }

      const winning_members = [];
      for (let i = 0; i < cnt; i++) {
        const randomIndex = Math.floor(Math.random() * members.length);
        winning_members.push(members.splice(randomIndex, 1)[0]);
      }

      const winningNames = winning_members
        .map((member) => member.user.username)
        .join(", ");
      interaction.reply(`:tada: 당첨 :trophy: <@${winningNames}>`);
    } catch (e) {
      interaction.reply("음성 채널에 접속 후 사용해주세요.");
      console.log(e);
    }
  },
  managerOnly: false,
};
