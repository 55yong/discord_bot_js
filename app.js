const Discord = require("discord.js");
const client = new Discord.Client();

const TOKEN_KEY = process.env.TOKEN;

client.once("ready", () => {
  console.log("Server ready");
});

client.login(TOKEN_KEY);
