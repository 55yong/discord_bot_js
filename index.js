const { Client, Events, IntentsBitField } = require("discord.js");
const { token } = require("./config.json");
const { CommandHandler } = require("djs-commander");
const path = require("path");

const client = new Client({
  intents: [
    IntentsBitField.Flags.Guilds,
    IntentsBitField.Flags.GuildMembers,
    IntentsBitField.Flags.GuildMessages,
    IntentsBitField.Flags.MessageContent,
  ],
});

new CommandHandler({
  client,
  commandsPath: path.join(__dirname, "commands"),
  eventsPath: path.join(__dirname, "events"),
});

client.on("messageCreate", (message) => {
  if (message.author.bot) {
    return;
  }
  if (message.content === "핑") {
    message.channel.send("퐁~!");
  }
  if (message.content.includes("안녕")) {
    message.reply("안녕하세요 반갑습니다~!");
  }
  if (message.content.includes("상놈아")) {
    message.reply("뭐이씨발롬아");
  }
});

client.login(token);
