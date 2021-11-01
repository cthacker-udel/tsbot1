"use strict";
exports.__esModule = true;
var discord_js_1 = require("discord.js");
var discord_js_2 = require("discord.js");
var config_json_1 = require("../config.json");
var commands = [{
        name: 'ping',
        description: 'Replies with Pong!'
    }];
var client = new discord_js_1.Client({
    partials: ['MESSAGE', 'CHANNEL', 'REACTION'],
    intents: [discord_js_2.Intents.FLAGS.GUILDS,
        discord_js_2.Intents.FLAGS.GUILD_MESSAGES,
        discord_js_2.Intents.FLAGS.GUILD_PRESENCES,
        discord_js_2.Intents.FLAGS.GUILD_MEMBERS,
        discord_js_2.Intents.FLAGS.GUILD_MESSAGE_REACTIONS]
});
client.once('ready', function () {
    console.log('Ready');
});
client.login(config_json_1.token);
