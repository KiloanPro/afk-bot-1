const mineflayer = require('mineflayer')

const bot = mineflayer.createBot({
	host: '',
	port: 25565,
	username: '',
	password: '',

})

bot.on('chat', () => {
  bot.chat('your_message')
})



