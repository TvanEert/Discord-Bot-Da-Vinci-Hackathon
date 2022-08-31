//Require the necessary discord.js classes
const { Client, GatewayIntentBits } = require('discord.js')
const { Token } = require('./config.json');

//Creating a new client instance
const client = new Client({intents: [GatewayIntentBits.Guilds]});

//When the client is ready to connect, run this code (once)
client.once('ready', () =>{
    console.log('Client ready')
})

//Login to the discord client using the Bot Token.
client.login(Token);