const { SlashCommandBuilder } = require('discord.js');
const axios = require("axios");
const cheerio = require("cheerio");

module.exports = {
	data: new SlashCommandBuilder()
		.setName('maple')
		.setDescription('Replies with Pong!'),
	async execute(interaction) {
		await interaction.reply('Pong!');
	},
};