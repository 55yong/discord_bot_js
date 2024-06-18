const { token, clientId, guildId } = require("./config.json");
const { REST } = require("@discordjs/rest");
const { Routes } = require("discord-api-types/v9");
const { CommandHandler } = require("djs-commander");
const { Client, IntentsBitField } = require("discord.js");
const path = require("path");
const fs = require("node:fs");

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

const commands = [];
const commandFiles = fs
  .readdirSync("./commands")
  .filter((file) => file.endsWith(".js"));

for (const file of commandFiles) {
  const command = require(`./commands/${file}`);
  commands.push(command.data.toJSON());
}

const rest = new REST({ version: "9" }).setToken(token);

rest
  .put(Routes.applicationGuildCommands(clientId, guildId), { body: commands })
  .then(() => console.log("Successfully registered application commands."))
  .catch(console.error);

client.on("messageCreate", (message) => {
  if (message.author.bot) {
    return;
  }
  if (message.content === "상놈아") {
    message.reply("뭐이씨발롬아");
  }
});

client.login(token);
