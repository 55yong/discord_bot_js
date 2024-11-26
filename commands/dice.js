const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");

module.exports = {
  deleted: false,
  data: new SlashCommandBuilder()
    .setName("dice")
    .setDescription("Rolls dice to determine priority."),
  run: ({ interaction }) => {
    let result = "";
    let color = 0x000;
    const dice1 = Math.floor(Math.random() * 6 + 1);
    const dice2 = Math.floor(Math.random() * 6 + 1);

    if (dice1 > dice2) {
      result = "Player 1 gets first pick";
      color = 0xff0000;
    } else if (dice1 < dice2) {
      result = "Player 2 gets first pick";
      color = 0x00ff56;
    } else {
      result = "It's a tie";
      color = 0xfafa00;
    }

    const embed = new EmbedBuilder()
      .setColor(color)
      .setTitle("Dice Game Result")
      .addFields(
        {
          name: "Player 1",
          value: `:game_die: ${dice1}`,
          inline: true,
        },
        {
          name: "Player 2",
          value: `:game_die: ${dice2}`,
          inline: true,
        }
      )
      .addFields({
        name: "Result",
        value: `${result}`,
      });

    interaction.reply({ embeds: [embed] });
  },
  managerOnly: false,
};
