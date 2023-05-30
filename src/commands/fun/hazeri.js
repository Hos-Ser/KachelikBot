const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("pong")
    .setDescription("Hazeri Time!"),
  async execute(interaction) {
    await interaction.reply("وقت حاضریه پپسا");
  },
};
