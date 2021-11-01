
import { configtype } from "../interfaces/configtype";
import { Intents, Client, Message, MessageReaction, User } from 'discord.js';
import { token, guildId, clientId, connectString } from "../config.json";
import expressions from "../expressions.json";
import { MongoClient } from "mongodb";

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

const mongoClient = new MongoClient(connectString);

mongoClient.connect(err => {
    const collection = mongoClient.db("Sage").collection("admins");
    //console.log(collection);
    collection.insertOne({ user: "dalizardking", perms: "admin"}, (err, res) => {
        if(err){
            console.log(err);
        }
        else{
            console.log("no errors");
            mongoClient.close();
        }
    });
});

client.once('ready', () => {
    console.log('Ready');

});


client.on('messageCreate', (msg: Message) => {

    console.log(msg);
    if(msg.content.startsWith('bot;')){

        if(new RegExp(expressions.UserMessages.date).test(msg.content)){
            msg.channel.send(new Date().toISOString());
        }
        else{
            msg.channel.send('Command activated');
        }
    }

});

client.on('messageReactionAdd', (msgReact: MessageReaction, user: User) => {

    console.log(msgReact);

    console.log(user);

});

client.login(token);

