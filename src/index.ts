
import { configtype } from "../interfaces/configtype";
import { Intents, Client, Message } from 'discord.js';
import { token, guildId, clientId } from "../config.json";

const commands = [{
    name: 'ping',
    description: 'Replies with Pong!'
}];

const client = new Client({

    partials: ['MESSAGE', 'CHANNEL', 'REACTION'],
    intents: [Intents.FLAGS.GUILDS,
              Intents.FLAGS.GUILD_MESSAGES,
              Intents.FLAGS.GUILD_PRESENCES,
              Intents.FLAGS.GUILD_MEMBERS,
              Intents.FLAGS.GUILD_MESSAGE_REACTIONS]
});


client.once('ready', () => {
    console.log('Ready');
});

client.on('messageCreate', (msg: Message) => {

    console.log(msg);
    console.log(msg.channel);

});

client.login(token);

