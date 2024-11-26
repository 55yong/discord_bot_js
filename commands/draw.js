const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  deleted: false,
  data: new SlashCommandBuilder()
    .setName("draw")
    .setDescription("Randomly selects one number up to the specified maximum.")
    .addIntegerOption((option) =>
      option
        .setName("max")
        .setDescription("Enter the maximum number.")
        .setRequired(true)
    ),
  run: ({ interaction }) => {
    const cnt = interaction.options.get("max").value;
    try {
      const rand = Math.floor(Math.random() * cnt + 1);

      interaction.reply(`Selected number: ${rand}`);
    } catch (e) {
      interaction.reply(`Error: ${e}`);
    }
  },
  managerOnly: false,
};
