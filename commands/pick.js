const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  deleted: false,
  data: new SlashCommandBuilder()
    .setName("pick")
    .setDescription(
      "Randomly selects one or more players from the voice channel."
    )
    .addIntegerOption((option) =>
      option
        .setName("count")
        .setDescription("Enter the number of players to pick.")
        .setRequired(true)
        .setMaxValue(3)
    ),
  run: ({ interaction }) => {
    const cnt = interaction.options.get("count").value;
    try {
      const members = Array.from(
        interaction.member.voice.channel.members.values()
      );
      if (cnt > members.length) {
        interaction.reply(
          "The number of players to pick is greater than the number of members in the voice channel."
        );
        return;
      }

      const winning_members = [];
      for (let i = 0; i < cnt; i++) {
        const randomIndex = Math.floor(Math.random() * members.length);
        winning_members.push(members.splice(randomIndex, 1)[0]);
      }

      const winningNames = winning_members
        .map((member) => `<@${member.user.id}>`)
        .join(", ");
      interaction.reply(`:tada: ${winningNames} picked! :trophy:`);
    } catch (e) {
      interaction.reply(
        "Please join a voice channel before using this command."
      );
      console.log(e);
    }
  },
  managerOnly: false,
};
