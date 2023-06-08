# Discord bot

## discord.js[^link]
_v14_

[^link]: https://discord.com/developers/docs/intro

node.js 기반이다.

인증된 봇은 commands를 이용해서 봇을 호출할 수 있다.

아직 인증된 봇은 없지만 항상 SlashCommand(/)로 접근하고 기능 확장을 위하여 기능별로 따로 파일을 만들어 관리한다. (인증된 봇이 되려면 70개 이상의 채널에 등록되어야한다.)

_ping.js_
```js
const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('ping')
		.setDescription('Replies with Pong!'),
	async execute(interaction) {
		await interaction.reply('Pong!');
	},
};
```

이런식으로 기능을 등록하고 커맨드를 봇에 등록하면 사용이 가능하다.







