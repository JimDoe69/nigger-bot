const Discord = require("discord.js");
const bot = new Discord.Client();

bot.on('guildMemberAdd', function(member) {
    member.guild.channels.find('name', 'general').sendMessage(member.toString() + ' Welcome To The NIGGER™ Discord, You Are Now A Nigger, For A Custom Nigger Role Type !customrole');

    member.addRole(member.guild.roles.find('name', 'Member'));
});

bot.on("message", (message) => {

    if(message.content == "nigger") {
        // message.reply("faggot");
        message.channel.sendMessage("faggot");
    }

});

bot.on('message', (message) => {
    
    if(message.content == '!customrole') {
        message.reply('Please Think Of A Word Then Put It In Front Of Nigger, And There You Go!!');
    } 
    
});
    

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
