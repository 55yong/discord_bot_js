const { Client, IntentsBitField } = require("discord.js");
const { token } = require("./config.json");
const { CommandHandler } = require("djs-commander");
const path = require("path");

const client = new Client({
  intents: [
    IntentsBitField.Flags.Guilds,
    IntentsBitField.Flags.GuildMembers,
    IntentsBitField.Flags.GuildMessages,
    IntentsBitField.Flags.MessageContent,
    IntentsBitField.Flags.GuildVoiceStates,
  ],
});

new CommandHandler({
  client,
  commandsPath: path.join(__dirname, "commands"),
  validationsPath: path.join(__dirname, "validations"),
  eventsPath: path.join(__dirname, "events"),
});

client.on("messageCreate", (message) => {
  if (message.author.bot) {
    return;
  }
  if (message.content === "상놈아") {
    message.reply("뭐이씨발롬아");
  }
});

client.login(token);
