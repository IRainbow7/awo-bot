const Discord = require('discord.js'),
      cheerio = require('cheerio'),
      Chance = require('chance'),
      random = new Chance(),
      parseArgs = require('minimist'),  
      arraySort = require('array-sort'), 
      table = require('table'), 
      querystring = require('querystring'),
      send = require('quick.hook');
const config = require("./config");
const fs = require("fs");
const client = new Discord.Client();
const ms = require("ms");
const encode = require('strict-uri-encode');
const snekfetch = require('snekfetch');
const superagent = require("superagent");
const meme = require('memejs');
const yoMamma = require('yo-mamma').default;
const snek = require('snekfetch');
const twemoji = require('twemoji');
const ownerID = ["356510829920780289", "424916247696900135"];
const gifSearch = require("gif-search");
const figlet = require('figlet');
const moment = require('moment');
               require("moment-duration-format");
const { get } = require('request-promise-native');
//const ownerID = require('356510829920780289');

let os = require('os')
let cpuStat = require("cpu-stat")
let prefix = ("k-");

client.on("message", (message) => {
const swearWords = ["fuck", "FUCK", "SHIT", "shit", "PORN", "porn", "xnxx", "XNXX",];
if( swearWords.some(word => message.content.includes(word)) ) {
  message.reply("Oh no you said a bad word!!!");
  message.react('❌');
  message.delete(999);
 }
});
//const hook = new Discord.WebhookClient('447643495528923146', 'Bendsxen4drwRTJVLOM5f9_Ns0gfPYkWPdOABYo8pJahGi0jKX5ZgWQWwvL85xcESUAi');

//hook.send(`📡 **RD-BOT** • Restarting Successfully... !`);



client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag} on ${client.guilds.size} Servers ..`);
   // client.user.setActivity(`${config.prefix}help`, { type: 'WATCHING' })
   //client.user.setActivity(`${client.guilds.size} SERVER`, { type: 'WATCHING' })
  });

function setActivity() {
    //Variable Array for what the setGame can be set to
    var Gameinfo = [`Run on ${client.guilds.size} Servers`, `${prefix}help`,
        `Using ${(((process.memoryUsage().heapUsed)/1024)/1024).toFixed(0)}Mb's of RAM`, `Ping to API: ${(client.ping).toFixed(0)} Ms`, `I ❤ CAMBODIA` // Change these to what you want, add as many or as few as you want to
    ]

    var info = Gameinfo[Math.floor(Math.random() * Gameinfo.length)]; //Random Math to set the setGame to something in the GameInfo array

    client.user.setActivity(info) // "playing Game" '...' Sets the setGame to what the info Random math picked from the GameInfo Array
    if (config.debugMode === "1") {
        console.log(`[ LOG ] set Activity set to ( ${info} )`) //Logs to console what the setGame was set as.
    }

}

setInterval(setActivity, 1000 * 60 * 2)


client.on("guildCreate", async guild => {
  const invite = await guild.channels.first().createInvite({
    maxAge: 0
  });
  client.channels.get('448075110096830465').send(`Bot Has Invite To New Guild  •  **${guild.name}**   with invite: https://discord.gg/${invite.code}`)
//OwnerServer • **${guild.user.tag}**

});

client.on("guildMemberAdd", async member => {
    let memberjoin = member.guild.channels.find('name', "welcome");
const embed = new Discord.RichEmbed()
.setThumbnail(member.user.avatarURL)
.setColor('#1f49a1')
.setFooter('🔵 MEMBER JOIN !')
.setTimestamp()
    .setDescription(`**[ ${member} ]** \nWELCOME TO **${member.guild.name}** SERVER  , YOU ARE A MEMBER : **${member.guild.memberCount}**\n• You Want To Help Please Content Server Owner : **${member.guild.owner.user.tag}** `);
memberjoin.sendEmbed(embed);
});   

client.on("guildMemberRemove", async member => {
    let memberjoin = member.guild.channels.find('name', "welcome");
const embed = new Discord.RichEmbed()
.setThumbnail(member.user.avatarURL)
.setColor('#FF0000')
.setFooter('🔴 MEMBER LEFT !')
.setTimestamp()
    .setDescription(`**[ ${member} ]** HAS LEFT **${member.guild.name}** SERVER  , THE SERVER NOW : **${member.guild.memberCount}** USER ! `);
memberjoin.send(embed);
});      

//
client.on("message", async message => {
    if(message.author.bot) return;
 //   const args = message.content.slice(prefix.length).trim().split(/ +/g);
  //  const command = args.shift().toLowerCase(); 
   // var args = message.content.split(' ').slice(1);
   // var command = message.content.split(' ')[0].replace(guildConf[message.guild.id].prefix, '');
       const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
       const command = args.shift().toLowerCase(); 

    

  if(command === "leftserver" || command === "leaveserver") {
   message.delete()
    if (!['356510829920780289',].includes(message.author.id)) return message.reply(`**You cant do that, only the bot developer can! || do ${config.prefix}dev to show bot dev** `).then(msg => msg.delete(9000));
    message.channel.send('**ByeBye @here Am Leaveing Server Now!**')
    message.guild.leave();
  };
	
	


	
if(command === "banslist") {
	let ban = await message.guild.fetchBans().catch(error => {
        return message.channel.send('Sorry, I don\'t have the proper permissions to view bans!');
    });

    ban = ban.array();
    let users = message.guild.fetchBans().id;

    arraySort(ban, 'size', {
        reverse: true
    });

    let possiblebans = [
        ['Users', 'ID']
    ];
    ban.forEach(function(ban) {
        possiblebans.push([ban.username, ban.id]);
    })

    const embed = new Discord.RichEmbed()
        .setColor(0xCB5A5E)
        .addField('Bans', `\`\`\`${table.table(possiblebans)}\`\`\``);
    send(message.channel, embed, {
        name: 'BANS-LIST',
        icon: 'http://gaia.adage.com/images/bin/image/x-large/iStock47643841422.jpg'
    });
};
	
	
 if(command === "botstats") {
    const os = require('os');
    const arch = os.arch()
    const used = process.memoryUsage().heapUsed / 1024 / 1024;

    let totalSeconds = process.uptime();
    let realTotalSecs = Math.floor(totalSeconds % 60);
    let days = Math.floor((totalSeconds % 31536000) / 86400);
    let hours = Math.floor((totalSeconds / 3600) % 24);
    let mins = Math.floor((totalSeconds / 60) % 60);

    var ping = client.ping
    message.channel.send(`\n= Memory usage: ${Math.round(used * 100) / 100}MB\n= Ping: ${ping}\n= Uptime: Days: ${days} | Hours: ${hours} | Minutes: ${mins} | Seconds: ${realTotalSecs}\n= Node: ${process.version}\n= Library: discord.js\n= ARCH: ${arch}\n= Plataform: ${os.platform}\n= Servers: ${client.guilds.size}\n= Users: ${client.users.size}`, {
        code: 'AsciiDoc'
    })

}
if(command === "kiss") {
	var images = ["https://i.imgur.com/3aX4Qq2.gif", "https://i.imgur.com/eKcWCgS.gif", "https://i.imgur.com/MzAjNdv.gif", "https://i.imgur.com/aypxaOB.gif", "https://i.imgur.com/JZLaOA2.gif", "https://i.imgur.com/2QwD7M0.gif", "https://i.imgur.com/JnheKgG.gif", "https://i.imgur.com/AGfaBJD.gif", "https://i.imgur.com/BUJZGzg.gif", "https://i.imgur.com/w1AmQF7.gif", "https://i.imgur.com/PKOsDVW.gif", ];
    var rand = Math.floor(Math.random() * images.length);
    var randomImage = images[rand];

    const patEmb = new Discord.RichEmbed()
        .setColor(0xA901DB)
        .setImage(randomImage);
    const sadEmb = new Discord.RichEmbed()
        .setColor(0xA901DB)
        .setImage('https://media.giphy.com/media/Y4z9olnoVl5QI/giphy.gif');
    if (!args[0]) {
        message.channel.send(`<@${message.author.id}> **KISS** <@${message.author.id}>.. Lonely forever.`, {
            embed: sadEmb
        });
        return;
    }

    if (!message.mentions.users.first()) return message.channel.send(`Please mention user you want to kiss!`).then(msg => {
        msg.delete(3000)
    });
    message.channel.send(`<@${message.author.id}> **KISS** ${args[0]}`, {
        embed: patEmb
    });


}
	
if(command === "pat") {
	    var images = ["https://i.imgur.com/2lacG7l.gif", "https://i.imgur.com/UWbKpx8.gif", "https://i.imgur.com/LUypjw3.gif", "https://i.pinimg.com/originals/c0/3f/58/c03f5817acde4b1c168d31ffe02c522e.gif", "data:image/jpeg;base64,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", "https://media1.tenor.com/images/1e92c03121c0bd6688d17eef8d275ea7/tenor.gif?itemid=9920853", "https://pa1.narvii.com/6401/9629e80dbe24f32a009ac51ee633a32dfbe1773f_hq.gif", "https://media1.tenor.com/images/2b2f9c5d046ea2cdaca41dfdc4356eea/tenor.gif?itemid=7552114", ];
    var rand = Math.floor(Math.random() * images.length);
    var randomImage = images[rand];

    const patEmb = new Discord.RichEmbed()
        .setColor(0xA901DB)
        .setImage(randomImage);
    const sadEmb = new Discord.RichEmbed()
        .setColor(0xA901DB)
        .setImage('https://media.giphy.com/media/Y4z9olnoVl5QI/giphy.gif');
    if (!args[0]) {
        message.channel.send(`<@${message.author.id}> Pat <@${message.author.id}>.. Oh wait! You can't pat yourself!`, {
            embed: sadEmb
        });
        return;
    }

    if (!message.mentions.users.first()) return message.channel.send(`Please mention user you want to pat`).then(msg => {
        msg.delete(3000)
    });
    message.channel.send(`<@${message.author.id}> Pat ${args[0]}`, {
        embed: patEmb
    });


}
	
  if(command === "userinfo") {
	let user;
    if (message.mentions.users.first()) {
      user = message.mentions.users.first();
    } else {
        user = message.author;
    }
    const member = message.guild.member(user);
    const embed = new Discord.RichEmbed()
		.setColor('RANDOM')
		.setThumbnail(user.avatarURL)
		.setTitle(`${user.username}#${user.discriminator}`)
		.addField("ID:", `${user.id}`, true)
		.addField("Nickname:", `${member.nickname !== null ? `${member.nickname}` : 'None'}`, true)
		.addField("Bot:", `${user.bot}`, true)
		.addField("Status:", `${user.presence.status}`, true)
		.addField("Game:", `${user.presence.game ? user.presence.game.name : 'None'}`, true)
		.addField("Roles:", member.roles.map(roles => `${roles.name}`).join('.  '), true)
		.addField("Created At:", `${moment.utc(user.createdAt).format('dddd, MMMM Do YYYY, HH:mm:ss')}`)
		.addField("Joined Server:", `${moment.utc(member.joinedAt).format('dddd, MMMM Do YYYY, HH:mm:ss')}`)
		.setFooter(`Replying to ${message.author.username}#${message.author.discriminator}`)
     message.channel.send({embed});
   }	
	
  if(command === "discordpartner" || command === "dpartner") {
	  message.delete();
   if(!message.member.hasPermission("MANAGE_MESSAGE")) return message.channel.send(`${message.author.username} You Don\'t Have **Manage Message** To Use This Commands !`).then(msg => msg.delete(8000));
  if(!args[0]) {
       const help = new Discord.RichEmbed()
       .addField(`DiscordPartners Help : **${config.prefix}dpartner @guildname @invitelink @description**\n\n**Ex: ${config.prefix}discordpartner|dpartner MIRAIKURIYAMA https:/discord.gg/ZWWD7zT Community Server !**\n\nnot allow use spec on keyboard!`)
        return message.channel.send(help).then(msg => msg.delete(8000));
    }

  let guildname = args[0]; 
  let invite = args[1];
  let des = args[2];
	  const embed = new Discord.RichEmbed()
	  .setColor('RANDOM')
	  .setAuthor('Discord Partners', "https://www.podfeet.com/blog/2018/02/discord/")
	  .setTitle(`📥 Server Name :  👑${guildname}👑 `)
	  //.addField('📥 Server Name :', guildname)
	  .addField('🔗 Invite Links :', `[CLICK HERE TO JOIN SERVER](${invite})`)
	  .addField("📄 Descriptions :", `\`\`\`${des}\`\`\``)
	  .setFooter(`By ${message.author.username} | DiscordPartner !`)
	  //.addField('Submit To Advertise D-Server  ;', '[SUBMIT HERE](https://goo.gl/forms/oAP5JsgYmjGuu70X2)');
		
 message.channel.send(embed);
	  message.react('👥');
 // message.channel.send(`**• Submit to advertise discord server** • **https://goo.gl/forms/oAP5JsgYmjGuu70X2**`);
}
	
  if(command === "glist" || command === "guildlist") {
message.delete();
//if(message.author.id !== ownerID) return message.channel.send('Heng Ot Mean Permission Use Ah Ng Te xD');
if (!['356510829920780289',].includes(message.author.id)) return message.channel.send(`**You cant do that, only the bot developer can! || do ${config.prefix}dev to show is dev bot**`).then(msg => msg.delete(9000));
	let user = message.mentions.users.first() || message.author;
	let servers = client.guilds.filter(g => g.members.has(user.id));
	var message2 = "```";
	for (var i = 0; i < servers.map(g => g.name).length; i++) {
		var temp = (i === 0 ? `On Guild List ${user.tag}\n` : "") + (i + 1) + ". " + servers.map(g => g.name)[i] + "\n";
		if ((message2 + temp).length <= 2000 - 3) {
			message2 += temp;
		} else {
			message2 += "```";
			message.channel.send(message2);
			message2 = "```";
		}
	}
	message2 += "```";
	message.channel.send(message2);
  }

//   if(command === "autoroleplaying" | command === "playinglist") {
//	   message.delete();
//	   message.channel.send("**AutoRolePlaying :** \n\n__**Example**__\n```Playing Minecraft\nPlaying <GameName>```\n\n**Working On Role :**\n```-PLAYERUNKNOWN'S BATTLEGROUNDS \n-Minecraft \n-Fortnite \n-Grand Theft Auto V \n-Rules Of Survival \n-Counter-Strike Global Offensive \n-Overwatch```");
//}
			
    if(command === "hentai") {
  let {body} = await superagent
    .get(`https://nekos.life/api/v2/img/Random_hentai_gif`);
    if (!message.channel.nsfw) return message.reply(" You must be in a N.S.F.W channel to use this command.");
  
    let hentaiEmbed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setTitle("Hentai is art.")
    .setImage(body.url)
    .setColor("RANDOM")
    .setFooter("Bot Version: 0.0.3");

    message.channel.send(hentaiEmbed);

}
	
    if(command === "gif") {
  if (message.author.bot) return;
  if (message.channel.type == "dm") return;

    if (!args[0]) return message.channel.send("`"+config.prefix+"gif <gname>`");

    gifSearch.random(args[0]).then(
        gifUrl => {

        let randomcolor = ((1 << 24) * Math.random() | 0).toString(16) //Optional
        var embed = new Discord.RichEmbed()
            .setColor(`#${randomcolor}`)
            .setImage(gifUrl)
        message.channel.send(embed);
    });
 }

   if(command === "dev" || command === "developers") {
   message.channel.send('**DEVELOPERS IS :**\n\n**DISCORD** • `HeaaLOng#5881`\n**FACEBOOK** • `https://www.facebook.com/heaalong855` ').then(msg => msg.delete(10000));
   }

    if(command === 'botinfo') {
    let bicon = client.user.displayAvatarURL;
    let botembed = new Discord.RichEmbed()
    .setDescription("Bot Information")
    .setColor('RANDOM')
    .setThumbnail(bicon)
    .addField("Bot Name", client.user.username, true)
    .addField("TotalUser", client.users.size, true)
    .addField("On Servers", client.guilds.size, true)
    .addField("Bot Create By :", "HeaaLOng#5881", true)
    .addField("Created On", client.user.createdAt, true);
    return message.channel.send(botembed);
}

  if(command === "jb" || command === "jumboemoji") {
    if(!args[0]) return message.channel.send("**Provide an emoji to jumbify.** `k-jumboemoji :wave:`")

    try {
      const emote = Discord.Util.parseEmoji(args[0]);
      if (emote.animated === true) {
        const URL = `https://cdn.discordapp.com/emojis/${emote.id}.gif?v=1`;
        const { body: buffer } = await snek.get(`${URL}`);
        const toSend = fs.writeFileSync('emote.gif', buffer);
        message.channel.send({ file: 'emote.gif' });
      } else if (emote.id === null) {
        const twemote = twemoji.parse(args[0]);
        const regex = /src="(.+)"/g;
        const regTwemote = regex.exec(twemote)[1];
        const { body: buffer } = await snek.get(`${regTwemote}`);
        const toSend = fs.writeFileSync('emote.png', buffer);
        await message.channel.send({ file: 'emote.png' });
      } else {
        const URL = `https://cdn.discordapp.com/emojis/${emote.id}.png`;
        const { body: buffer } = await snek.get(`${URL}`);
        const toSend = fs.writeFileSync('emote.png', buffer);
        message.channel.send({ file: 'emote.png' });
      }
    } catch (error) {
      if (error.message === 'TypeError: Cannot read property \'1\' of null') {
        message.reply('Give me an actual emote.');
      }
    }
  }

  if(command === "magik" || command === "profilemagik") { 
    let target = message.mentions.users.first() || message.author;
    let wait = await message.channel.send('Wait I Going To Edit MagikPhoto....')
    let userAvatar = (target.displayAvatarURL);
    if (['jpg', 'jpeg', 'gif', 'png', 'webp'].some(x => args.join(' ').includes(x))) {
        userAvatar = args.join(' ').replace(/gif|webp/g, 'jpg')
    }
    let res = await snek.get(`https://discord.services/api/magik?url=${userAvatar}`)
            await wait.delete()
            const magikEmbed = new Discord.RichEmbed() 
                .setImage(`https://discord.services/api/magik?url=${userAvatar}`); 
            return message.channel.send(magikEmbed) 
}

  if(command === "invite") {
  message.delete();
  const invite = new Discord.RichEmbed()
  .setColor('RANDOM')
  .setDescription('Check Out From Website To InviteBot or More : \n\n[CLICK HERE](https://www.facebook.com/heaalong855)')
  message.author.send(invite);
  message.channel.send(`${message.author.username} **Please Check Out From Your DM or Pivite Message !**`);//.then(msg => msg.delete(11000));
  message.react('🔗');
  }

  if(command === "ban") {
    message.delete();
    if(!message.member.hasPermission("BAN_MEMBERS")) return message.reply("you don't have permssion **BAN MESSAGE** to use this !");
    let member = message.mentions.members.first();
    if(!member)
      return message.reply("Please Mention User To Want To **BAN** !");
    if(!member.bannable) 
      return message.reply("I cannot ban this user! Do they have a higher role? Do I have ban permissions?");

    let reason = args.slice(1).join(' ');
    if(!reason) reason = "No Reason";
    
    await member.ban(reason)
      .catch(error => message.reply(`Sorry ${message.author} I couldn't ban because of : ${error}`));
   // message.reply(`${member.user.tag} has been banned by ${message.author.tag} because: ${reason}`);

    const ban = new Discord.RichEmbed()
    .setColor('#FF0000')
    .setTitle('•▬▬BAN-MANAGER▬▬•')
    .addField('User :', `${member.user.tag}`)
    .addField('Ban By :', `${message.author.tag}`)
    .addField('Reason :', `${reason}`)
    message.channel.send(ban);
  }

  if(command === "kick") {
    if(!message.member.hasPermission("KICK_MEMBERS")) return message.reply("you don't have permssion **KICK MESSAGE** to use this !");
    let member = message.mentions.members.first() || message.guild.members.get(args[0]);
    if(!member)
      return message.reply("Please mention a valid member of this server");
    if(!member.kickable) 
      return message.reply("I cannot kick this user! Do they have a higher role? Do I have kick permissions?");
    let reason = args.slice(1).join(' ');
    if(!reason) reason = "No reason provided";
    await member.kick(reason)
      .catch(error => message.reply(`Sorry ${message.author} I couldn't kick because of : ${error}`));
    //message.reply(`${member.user.tag} has been kicked by ${message.author.tag} because: ${reason}`);

    const ban = new Discord.RichEmbed()
    .setColor('#FF0000')
    .setTitle('•▬▬KICK-MANAGER▬▬•')
    .addField('User :', `${member.user.tag}`)
    .addField('Kick By :', `${message.author.tag}`)
    .addField('Reason :', `${reason}`)
    message.channel.send(ban);
  }

   if(command === "status" ) {
  message.delete();
 //if(!message.member.roles.some(r=>["STATUS", "status"].includes(r.name)) )
     // return message.reply("You Need Invite 10 People To Get `STATUS` Roles To Use This Commands ! \n\nGo To #bot-command and do `--ranks` to view more role rewards !").then(msg => msg.delete(12000));
    if(!args[0]) {
       const statushelp = new Discord.RichEmbed()
       .setTitle(`Facebook Status xD : ${config.prefix}status <STATUS>`)
        return message.channel.send(statushelp).then(msg => msg.delete(8000));
    }
    let status = args.join(" ");
    message.delete();
    let announceEmbed = new Discord.RichEmbed()
    .setColor(`RANDOM`)
    .setFooter(`${message.author.username} Status :`, message.author.avatarURL)
    .setTimestamp()
    .setTitle(status)

    let m = await message.channel.send(announceEmbed);
    await m.react(`👍`);
    await m.react(`❤`);
    await m.react(`😂`);
    await m.react(`😮`);
    await m.react(`😢`);
    await m.react(`😡`);

}

   if(command == "annto") {
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("you don't have permssion MANAGE_MESSAGE to use this !");
    if(args[0] == "help"){
    message.reply("```Create #annoucements first and do k!chatembed on the channel you want message sand to #announcements```");
    return;
  }
    let chatchannel = message.guild.channels.find(`name`, "announcements");
    if(!chatchannel) return message.channel.send("you need create channel #announcements to use annto !");
    message.delete().catch(O_o=>{});
    chatchannel.send(args.join(" "));
   }

   if(command == "chatto") {
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("you don't have permssion MANAGE_MESSAGE to use this !");
    if(args[0] == "help"){
    message.reply("```Create #annoucements first and do k!chatembed on the channel you want message sand to #chatto```");
    return;
  }
    let chatchannel = message.guild.channels.find(`name`, "chat");
    if(!chatchannel) return message.channel.send("you need create channel #chat to chatto !");
    message.delete().catch(O_o=>{});
    chatchannel.send(args.join(" "));

   }

   if(command === "sayto") {
    message.delete(4000);
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("you don't have permssion **MANAGE MESSAGE** to use this !");
    let sayChannel = args.join[0];
    let sayMessage = args.join[1];
    let chatchannel = message.guild.channels.find(`name`, `${sayChannel}`);
    if(!chatchannel) return message.channel.send(`you need create channel ${sayChannel} to chatto !`);
    
    let embed = new Discord.Rich()
    .setColor('RANDOM')
    .setDescription(`${sayMessage}`)
    .setFooter(`Requested By ADMIN ${message.author.username}`)
    chatchannel.send(embed);
    

  }


  if(command === "ctc" || command === "create textchannel") {
  let logs = args.join(" ");
  if(!message.member.hasPermission("MANAGE_CHANNELS")) return message.channel.send("**You do not have permission to do that!**");
  message.guild.createChannel(logs, 'text');
  message.channel.send(`✅ **${message.author.username}** Has Create Text Channel **${logs}**`).then(msg => msg.delete(8000));

}

     if(command === "ping") {
    message.delete(6000);
     const newemb = new Discord.RichEmbed()
      .setColor('RANDOM')
      .setTitle(`<:missiles:446258205333520384> Pong | ${Date.now() - message.createdTimestamp} ms`)
      .setFooter(`Requested by ${message.author.username}`)
      message.channel.send({embed: newemb}).then(message => message.delete(7002));
      message.react("446258205333520384");
 }

    if(command === "setup") {
     const setup = new Discord.RichEmbed()
     .setColor('RANDOM')
     .setAuthor(`${message.author.username} Thank You For Use The BOT : `, message.author.avatarURL)
     .setDescription("<:discord:445437920686637056> **This BOT Make For Player - Make Fire Server** \n\nSERVER-1 : **DiscordPartner**\n\nSERVER-2 : **CommunityServer**\n\nSERVER-3 : **GamingServer** ")
     .setFooter(`${config.prefx}commands Examsple : ${config.prefix}s-1 | ${config.prefix}s-2`)
     message.channel.send(setup)
 }    

     if(command === "serversetup" || command === "ssetup") {
     const one = new Discord.RichEmbed()
     .setTitle(`<:DiscordPartner:446309047990222848> DiscordPartner `)
     .addField('DiscordPartner Roles :', "`OWNER`  `ADMIN`  `MOD`  `PARTNERS`  `PLAYER`")
     .addField('Category Channel : ', "`INFORMATION`  `TEXT CHANNEL`  `VOICE ROOM`  `PIVITE ROOM`")
     .addField('INFORMATION Chnnael :', "`announcements`  `rules`  `new-player`  `partners`")
     .addField('TEXT Chnnael :', "`mine-chat`  `rules`  `new-player`  `partners`")
     message.channel.send(one);

     }


  if(command === "love") {
  if(!args[0]) return message.channel.send("**Mention a user or users that you want to bond.** `PREFIX bond <user> <user>`")

   var bondLevel = Math.floor(Math.random() * 102);
   let user1 = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
   let user2 = message.guild.member(message.guild.members.get(args[1]));
   let user3 = message.guild.member(message.guild.members.get(args[2]));

    if (bondLevel > 100 ) {
        var ship = 'Perfect Couple <3_<3 :ok_hand:'
        var bondLevelResults = `♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥`
    } else
    if (bondLevel == 100) {
        var ship = 'Lit Couple <3 :ok_hand:'
        var bondLevelResults = `♥♥♥♥♥♥♥♥♥♥`
    } else
    if (bondLevel >= 90 && bondLevel < 100) {
        var ship = 'Great Couple <3'
        var bondLevelResults = `♥♥♥♥♥♥♥♥♥🖤`
    } else
    if (bondLevel >= 80 && bondLevel < 90) {
        var ship = 'Great Couple <3'
        var bondLevelResults = `♥♥♥♥♥♥♥♥🖤🖤`
    } else
    if (bondLevel >= 75 && bondLevel < 80) {
        var ship = 'Great Couple <3'
        var bondLevelResults = `♥♥♥♥♥♥♥🖤🖤🖤`
    } else
    if (bondLevel >= 70 && bondLevel < 75) {
        var ship = 'A littly risky but can work out! '
        var bondLevelResults = `♥♥♥♥♥♥♥🖤🖤🖤`
    } else
    if (bondLevel >= 60 && bondLevel < 70) {
        var ship = 'Eh.'
        var bondLevelResults = `♥♥♥♥♥♥🖤🖤🖤🖤`
    } else
    if (bondLevel >= 50 && bondLevel < 60) {
        var ship = 'Eh. '
        var bondLevelResults = `♥♥♥♥♥🖤🖤🖤🖤🖤`
    } else
    if (bondLevel >= 40 && bondLevel < 50) {
        var ship = 'Eh. '
        var bondLevelResults = `♥♥♥♥🖤🖤🖤🖤🖤🖤`
    } else
    if (bondLevel >= 30 && bondLevel < 40) {
        var ship = 'Eh. '
        var bondLevelResults = `♥♥♥🖤🖤🖤🖤🖤🖤🖤`
    } else
    if (bondLevel >= 25 && bondLevel < 30) {
        var ship = 'No Comment'
        var bondLevelResults = `♥♥🖤🖤🖤🖤🖤🖤🖤🖤`
    } else
    if (bondLevel >= 20 && bondLevel < 25) {
        var ship = 'Rip'
        var bondLevelResults = `♥♥🖤🖤🖤🖤🖤🖤🖤🖤`
    } else
    if (bondLevel >= 10 && bondLevel < 20) {
        var ship = 'Rip'
        var bondLevelResults = `♥🖤🖤🖤🖤🖤🖤🖤🖤🖤`
    } else
    if (bondLevel >= 0 && bondLevel < 10) {
        var ship = 'Not even possible...'
        var bondLevelResults = `🖤🖤🖤🖤🖤🖤🖤🖤🖤🖤`
    }


    if(!args[1]){
        var bondEmbed = new Discord.RichEmbed()

        .setColor("#FF0000")
        .addField("Users", `${message.author} x ${args[0]}`)
        .addField("Bond Score", `${bondLevel}%`)
        .addField("Bond Bar", bondLevelResults)
        .addField("Summary", ship);


        return message.channel.send(bondEmbed)
    }

    if(!args[2]){
        var bondEmbed2 = new Discord.RichEmbed()

        .setColor("#FF0000")
        .addField("Users", `${args[0]} x ${args[1]}`)
        .addField("Bond Score", `${bondLevel}%`)
        .addField("Bond Bar", bondLevelResults)
        .addField("Summary", ship);


        return message.channel.send(bondEmbed2)
    }


    if(!args[3]) {

        var bondEmbed3 = new Discord.RichEmbed()

        .setColor("#FF0000")
        .addField("Users", `${args[0]} x ${args[1]} x ${args[2]}`)
        .addField("Bond Score", `${bondLevel}%`)
        .addField("Bond Bar", bondLevelResults)
        .addField("Summary", ship);


        return message.channel.send(bondEmbed)
    }
}

  if(command === "meme") {
  meme(function(data) {
  const embed = new Discord.RichEmbed()
  .setTitle(data.title[0])
  .setColor("RANDOM")
  .setImage(data.url[0])
  message.channel.send({embed});
 // message.delete();
  })};

   if(command === "serverinfo") {
      let online = message.guild.members.filter(member => member.user.presence.status !== 'offline');
      let day = message.guild.createdAt.getDate()
      let month = 1 + message.guild.createdAt.getMonth()
      let year = message.guild.createdAt.getFullYear()
       let sicon = message.guild.iconURL;
       let serverembed = new Discord.RichEmbed()
       .setAuthor(message.guild.name, sicon)
       .setFooter(`Server Created : Day:${day} | Month:${month} | Year:${year}`)
       .setColor('#FF0000')
       .setThumbnail(sicon)
       .addField("ServerName", message.guild.name, true)
       .addField("OWNER", message.guild.owner.user.tag, true)
       .addField("Region", message.guild.region, true)
       .addField("Channels", message.guild.channels.size, true)
       .addField("MEMBER", message.guild.memberCount, true)
       .addField("Humans", message.guild.memberCount - message.guild.members.filter(m => m.user.bot).size, true)
       .addField("BOT", message.guild.members.filter(m => m.user.bot).size, true)
       .addField("Online", online.size, true)
       .addField("Created At", message.member.joinedAt, true)

       message.channel.send(serverembed);
    
    }

    if(command === "clear") {
        if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("```You Don\'t Have Permissions [Message_Message] To Clear Message !```");
        if(!args[0]) return message.channel.send(`**Example :**\n${config.prefix}clear 10\n${config.prefix}clear 100 \n\n**Limite To Clear 2 to 100**`);
        message.channel.bulkDelete(args[0]).then(() => {
       message.channel.send(`${message.author.username} Has Been Clear Message To ▫ **${args[0]}** .`).then(msg => msg.delete(2000));
    });
}

      if(command === "random") {
    const embed = new Discord.RichEmbed()
        .setColor(0xffffff)
    if (!args[0] || args[0].toLowerCase() === 'list') {
        let resp = Object.keys(Object.getPrototypeOf(random))
        resp.shift();
        embed.setDescription(resp.join(',  '))
             .setTitle(`${config.prefix}random List `);
        return message.channel.send(embed)      
    }
    let item = args[0];
    args.shift();
    let options = parseArgs(args);
    delete options['_'];
    let response;
    try {
        response = random[item.toLowerCase()](options);
    } catch (e) {
        response = `Sorry, I can't return a random ${item}`;
    }
    if (typeof response === 'object') { // Parse Objects
        response = JSON.stringify(response, null, 4);
        embed.setDescription(`\`\`\`js\n${response}\`\`\``)
    } else { // Run if NOT an object
        embed.setFooter(response);   
    }
    message.channel.send(embed);
    
}

 if(command === "luckymunber" || command === "lmunber") {
  var LuckNumber = Math.floor((Math.random() * 12000) + 0.120);
  const numEmb = new Discord.RichEmbed()
  .setColor(0xFFFF00)
  .setAuthor('LUCKY NUMBER', 'https://vignette.wikia.nocookie.net/nintendo/images/0/02/Question_Block_NSMB.png/revision/latest?cb=20151206055532&path-prefix=en')
  .addField('» Your LuckyMunber :', `${LuckNumber}!`);
  message.channel.send({embed: numEmb})
  message.react("✅")

}

  if (command === "ign") {
  message.delete();
    if(args[0] == "help"){
  const help = new Discord.RichEmbed()
  .setDescription(`**${config.prefix}ign** [**IGN-PUBG**]  [**IGN-FORTNITE**]  [**IGN-CSGO**]  [**IGN-GTAV**]  [**IGN-DOTA2**]  [**NAME-STEAMG**]\n\nExample : ${config.prefix}ign pubg fortnite csgo gtav dota2 steamacc`)
  .setColor('RANDOM')
  message.channel.send(help).then(msg => msg.delete(11000));
    return;
  }
  let pubg = args[0];
  let fortnite = args[1];
  let csgo = args[2];
  let gtav = args[3];
  let dota = args[4];
  let steam = args[5];

  const ign = new Discord.RichEmbed()
  .setColor('RANDOM')
  .setAuthor(`${message.author.tag} - IGN :`, message.author.avatarURL)
  .setThumbnail(message.author.avatarURL)
  .addField("<:pubg:445459131931820044> PUBG IGN :", pubg, true)
  .addField("<:fortnite:445468274029887488> FORTNITE IGN :", fortnite, true)
  .addField("<:csgo:445457715574079509> CS-GO IGN :", csgo, true)
  .addField("<:gtav:445457716534575115> GTA V IGN :", gtav, true)
  .addField("<:dota:445457915285864458> DOTA 2 IGN :", dota, true)
  .addField("<:steam:445457979224096779> STEAM NAME :", steam, true)
  .setFooter("@ = [SPAEC] ")
  .setTimestamp()
    const pollTitle = await message.channel.send(ign);
      await pollTitle.react(`445459131931820044`);
      await pollTitle.react(`445468274029887488`);
      await pollTitle.react(`445457715574079509`);
      await pollTitle.react(`445457716534575115`);
      await pollTitle.react(`445457915285864458`);
      await pollTitle.react(`445457979224096779`);
    const filter = (reaction) => reaction.emoji.name === '445459131931820044';
    const collector = pollTitle.createReactionCollector(filter, { time: 1500 });

    const filter1 = (reaction) => reaction.emoji.name === '445468274029887488';
    const collector1 = pollTitle.createReactionCollector(filter1, { time: 1500 });

    const filter2 = (reaction) => reaction.emoji.name === '445457715574079509';
    const collector2 = pollTitle.createReactionCollector(filter2, { time: 1500 });

    const filter3 = (reaction) => reaction.emoji.name === '445457716534575115';
    const collector3 = pollTitle.createReactionCollector(filter3, { time: 1500 });

    const filter4 = (reaction) => reaction.emoji.name === '445457915285864458';
    const collector4 = pollTitle.createReactionCollector(filter4, { time: 1500 });

    const filter5 = (reaction) => reaction.emoji.name === '445457979224096779';
    const collector5 = pollTitle.createReactionCollector(filter5, { time: 1500 });
   
}

  if(command === "avatar") {
    let msg = await message.channel.send("Waitng avatar...");
    let mentionedUser = message.mentions.users.first() || message.author;

    let avatarEmbed = new Discord.RichEmbed()
    .setImage(mentionedUser.displayAvatarURL)
    .setColor(`RANDOM`)
    .setTitle(`Avatar`)
    .setDescription("[Avatar Link]("+mentionedUser.displayAvatarURL+")")
    .setFooter(`Requested by ${message.author.tag}`);
    message.channel.send(avatarEmbed)
    msg.delete();
}

   if(command === "playinglist" || command === "autoroleplaying") {
 const playing = new Discord.RichEmbed()
 .setAuthor("AutoRolePlaying ! ⬇", message.author.avatarURL)
 .setColor('RANDOM')
 .setDescription("**▫Playing PLAYERUNKNOWN'S BATTLEGROUNDS\n▫Playing Counter-Strike Global Offensive\n▫Playing Grand Theft Auto V\n▫Playing Minecraft\n▫Playing Fortnite\n▫Playing Overwatch\n▫Playing Rules Of Survival\n▫Playing osu!\n▫Playing DOTA 2**")
 .setThumbnail(message.author.avatarURL)
 .addField('Examples To Use :', "Playing Minecraft » Playing <GameName>")
 .addField('MY FB ACC', "[CLICK HERE TO VIEW](https://www.facebook.com/healongg)")
 .setFooter(`By : ${message.author.username} | AutoRole-Playing-List`)
  message.channel.send(playing).then(msg => msg.delete(91000));
  }

   if(command === "help") {
    const serverEmbed = new Discord.RichEmbed()
    .setAuthor(`${config.prefix}commands`, message.author.avatarURL)
    .setColor('#FF0000')
    .addField("Dev", "`leftserver`  `glist`")
    .addField("Moderation", "`clear`  `say`  `chatto`  `annto`  `discordpartner`  `kick`  `ban`")
    .addField("Info", "`serverinfo`  `serverrule`   `topinvites`  `dev`  `invitelist`  `banslist`")
    .addField("General", "`ping`  `avatar`  `emojilist`   `jumboemoji`  `invite`  `botstats`   `userinfo`  `playinglist`")
    .addField("Fun", "`get`  `ascii`  `gif`  `random` `status`  `luckymunber`  `profilemagik` ")
    .addField("Roleplay", "`pat`  `kiss`  `love`")
    .setFooter(`Requested by : ${message.author.tag}`);

    return message.channel.send(serverEmbed);
}

   if(command === "say") {
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("you don't have permssion **MANAGE MESSAGE** to use this !");
    const sayMessage = args.join(" ");
    message.delete().catch(O_o=>{}); 
    message.channel.send(sayMessage);

  }

// this command = addrole = removerole = https://hastebin.com/savoyufupe.js

  if(command === "get") {
  let [title, contents] = args.join(" ").split("|");
  if(!contents) {
    [title, contents] = ["Achievement Get :", title];
  }
  let rnd = Math.floor((Math.random() * 39) + 1);
  if(args.join(" ").toLowerCase().includes("burn")) rnd = 38;
  if(args.join(" ").toLowerCase().includes("cookie")) rnd = 21;
  if(args.join(" ").toLowerCase().includes("cake")) rnd = 10;

  if(title.length > 22 || contents.length > 22) return message.edit("Max Length: 22 Characters. Soz.").then(message.delete.bind(message), 2000);
  const url = `https://www.minecraftskinstealer.com/achievement/a.php?i=${rnd}&h=${encodeURIComponent(title)}&t=${encodeURIComponent(contents)}`;
  snek.get(url)
   .then(r=>message.channel.send("", {files:[{attachment: r.body}]}));
  message.delete();

}



     if(command === "topinvites" || command === "invitelist") {
    let invites = await message.guild.fetchInvites().catch(error => { // This will store all of the invites into the variable
        return message.channel.send('Sorry, I don\'t have the proper permissions to view invites!');
    }) // This will store all of the invites into the variable
    invites = invites.array();
    arraySort(invites, 'uses', { reverse: true }); // Be sure to enable 'reverse'
    let possibleInvites = [['User', 'Invite']]; // Each array object is a rown in the array, we can start up by setting the header as 'User' & 'Uses'
    invites.forEach(function(invite) {
        possibleInvites.push([invite.inviter.username, invite.uses]); // This will then push 2 items into another row
    })
    const embed = new Discord.RichEmbed()
        .setColor(0xCB5A5E)
        .addField('Leaderboard :', `\`\`\`${table.table(possibleInvites)}\`\`\``);
    send(message.channel, embed, {
        name: 'Server Invites',
        icon: 'https://image.flaticon.com/icons/png/512/262/262831.png'
    })
    
}

if(command === "newvideo" || command === "nv") {
message.delete()
if(args[0] == "help"){
  message.channel.send("**Enter • <YTUsername> <VideoURL>**").then(msg => msg.delete(11000));
    return;
  }
  let username = args[0]; 
  let videoURL = args[1];
 
    send(message.channel, `📌 @here\n\nUsername ● **${username}** Has Upload Video From YouTube !\n\n${videoURL} __**Go Check Now**__`, {
        name: 'YouTube',
        icon: 'https://cdn.discordapp.com/attachments/434019301448613908/447626767222439947/image.jpg'
     
    })
}

if(command === "ytc" || command === "youtubechaanel") {
message.delete()
if(args[0] == "help"){
  message.channel.send("**Enter • <YTUsername> <chnanelURL>**").then(msg => msg.delete(11000));
    return;
  }
  let username = args[0]; 
  let channelURL = args[1];
 
    send(message.channel, `@here\n\n•  Support YouTube Channel : **${username}**\n\n👍 **LIKE**\n🔗 **SHERE**\n<:YouTube:447660670108827659> **SUBSCRIBE**\n\n__**CHANNEL-URL**__  •  ${channelURL} !`, {
        name: 'YouTubeChannel',
        icon: 'https://cdn.discordapp.com/attachments/434019301448613908/447626767222439947/image.jpg'
     
    })
}


if(command === "serverrule") {
    const serverrule = new Discord.RichEmbed()
    .setColor('RANDOM')
    .setImage('https://cdn.discordapp.com/attachments/443665749656207360/445215855534407690/ServerRules-Mirai.png')
    .setDescription("**ServerRule :**\n\n1. No Bullying\n2. No Spamming\n3. No Aggressive Fighting\n4. No Threats\n5. No Racist or Offensive or Degrading Content\n6. No Begging or Repeated Asking\n7. Any Sort of Abuse is Not Allowed\n8. Use Appropriate Channels\n9. No Punishment Evading\n10. No Links That Are Evasive\n11. Staff Decisions Are Final\n\nMore Check #server-rule")   
    const pollTitle = await message.channel.send(serverrule);
      await pollTitle.react(`444878652090613763`);
      await pollTitle.react(`444873045488697375`);
      await pollTitle.react(`444873046776348679`);
      await pollTitle.react(`444873175747133471`);
      await pollTitle.react(`444873284622745610`);
    const filter = (reaction) => reaction.emoji.name === '444878652090613763';
    const collector = pollTitle.createReactionCollector(filter, { time: 1500 });
    const filter1 = (reaction) => reaction.emoji.name === '444873045488697375';
    const collector1 = pollTitle.createReactionCollector(filter1, { time: 1500 });
    const filter3 = (reaction) => reaction.emoji.name === '444873046776348679';
    const collector3 = pollTitle.createReactionCollector(filter3, { time: 1500 });
    const filter4 = (reaction) => reaction.emoji.name === '444873175747133471';
    const collector4 = pollTitle.createReactionCollector(filter4, { time: 1500 });
    const filter5 = (reaction) => reaction.emoji.name === '444873284622745610';
    const collector5 = pollTitle.createReactionCollector(filter5, { time: 1500 });
    message.delete(800);
};

   if(command === "ascii") {
  if(args.join(' ').length > 14) return message.channel.send('Only 14 characters are admitted!') 
  if (!args.join(' ')) return message.channel.send('Please, provide text to format in ASCII! Usage: ascii <text>').then(msg => msg.delete({timeout: 10000})); 
    figlet(args.join(' '), (err, data) => {
      message.channel.send('```' + data + '```')
    })
};

   if(command === "dmall") {
      message.delete(500);
      let member = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0])
      if(!message.member.hasPermission("ADMINISTRATOR"))
          return message.reply("You Dont Have Permission");
     // let DMALL = args.join(" ").slice(0);
      let Message = args.join(" ").slice(0);
   // if (!DMALL) return message.channel.send(""+message.member+" Please Enter Your Text To Dm Player From Server");

    message.guild.members.forEach((player) => {
        message.guild.member(player).send({embed: {      
          color: 0xffffff,
       //   Author: `${mess`,
          title: `► ANNOUNCEMENT`,
          description: `${Message}`

        }});
    });

    message.channel.send("<@"+message.author.id+"> Your Dm Has Been Send To Player !").then(m => m.delete(1000));


};

   if(command === "prserver") {
      message.delete(500);
      let member = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0])
      //if(!message.member.hasPermission("ADMINISTRATOR"))
     // let devID = "356510829920780289"
      if(message.author.id !== "356510829920780289") return message.reply(`> You Can't Do It , Only Bot Developer! || Do **${config.prefix}dev** To Slow BOT DEVELOPER`).then(msg => msg.delete(10000));
       
     // return message.reply("You Dont Have Permission");
     // let Message = args.join(" ").slice(0);
    //  let LINK = args.join(" ").slice(1);
   // if (!LINK) return message.channel.send(""+message.member+" Please Enter Your Text To Dm Player From Server");

    message.guild.members.forEach((player) => {
        message.guild.member(player).send({embed: {
          color: 0xffffff,
       //   Author: `${mess`,
          title: `► SUPPORT DEVELOPRER`,
          description: `•FACEBOOK  ACC : [CLICK HERE](https://www.facebook.com/heaalong855)\n•DISCORD SERER : [CLICK HERE](https://discord.gg/ZWWD7zT)`,
        }});
    });

    message.channel.send("<@"+message.author.id+"> Your Dm Has Been Send To Player !").then(m => m.react("📥"));
   

};

   if(command === "emojilist") {
        const List = message.guild.emojis.map(e => e.toString()).join(" ");
        let sicon = message.guild.iconURL;
        const EmojiList = new Discord.RichEmbed() 
            .setTitle('➠ Server Emoji\'s List') 
            .setColor('RANDOM')
            .setAuthor(message.guild.name, sicon)
            .setDescription(List) 
            .setTimestamp() 
            .setFooter(message.guild.name) 
        message.channel.send(EmojiList); 
        message.react("📥");
  }

});

client.login(process.env.TOKEN);
