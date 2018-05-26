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
//const snekfetch = require('snekfetch');
const superagent = require("superagent");
const meme = require('memejs');
const yoMamma = require('yo-mamma').default;
const snek = require('snekfetch');
const twemoji = require('twemoji');
const ownerID = ["356510829920780289", "424916247696900135"];
const gifSearch = require("gif-search");
const figlet = require('figlet');

//const swearWords = ["XNXX", "xnxx", "FUCK", "fuck", "SHIT", "shit", "PORN", "porn"];
client.on("message", (message) => {
const swearWords = ["fuck", "FUCK", "SHIT", "shit", "PORN", "porn", "xnxx", "XNXX",];
if( swearWords.some(word => message.content.includes(word)) ) {
  message.reply("Oh no you said a bad word!!!");
  message.react('❌');
  message.delete(9999);
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
    var Gameinfo = [`${config.prefix}invite`, `Run on ${client.guilds.size} Servers`, `${config.prefix}help`,
        `Using ${(((process.memoryUsage().heapUsed)/1024)/1024).toFixed(0)}Mb's of RAM`, `Ping to API: ${(client.ping).toFixed(0)} Ms`, `I ❤ CAMBODIA` // Change these to what you want, add as many or as few as you want to
    ]

    var info = Gameinfo[Math.floor(Math.random() * Gameinfo.length)]; //Random Math to set the setGame to something in the GameInfo array

    client.user.setActivity(info) // "playing Game" '...' Sets the setGame to what the info Random math picked from the GameInfo Array
    if (config.debugMode === "1") {
        console.log(`[ LOG ] set Activity set to ( ${info} )`) //Logs to console what the setGame was set as.
    }

}

setInterval(setActivity, 1000 * 60 * 2)


client.on("presenceUpdate", (oldMember, newMember) => {
  let guild = newMember.guild;
  let playRole = guild.roles.find("name", "Playing PLAYERUNKNOWN'S BATTLEGROUNDS");
  if(!playRole) return;  
 
  if(newMember.user.presence.game && newMember.user.presence.game.name === "PLAYERUNKNOWN'S BATTLEGROUNDS") {
    newMember.addRole(playRole);
  } else if(!newMember.user.game && newMember.roles.has(playRole.id)) {
    newMember.removeRole(playRole);
  let guild = newMember.guild;
  if(!playRole) return;
    
  }  
});
 
client.on("presenceUpdate", (oldMember, newMember) => {
  let guild = newMember.guild;
  let playRole = guild.roles.find("name", "Playing Overwatch");
  if(!playRole) return;  
 
  if(newMember.user.presence.game && newMember.user.presence.game.name === "Overwatch") {
    newMember.addRole(playRole);
  } else if(!newMember.user.game && newMember.roles.has(playRole.id)) {
    newMember.removeRole(playRole);
  let guild = newMember.guild;
  if(!playRole) return;
    
  }  
});
 
client.on("presenceUpdate", (oldMember, newMember) => {
  let guild = newMember.guild;
  let playRole = guild.roles.find("name", "Playing Counter-Strike Global Offensive");
  if(!playRole) return;  
 
  if(newMember.user.presence.game && newMember.user.presence.game.name === "Counter-Strike Global Offensive") {
    newMember.addRole(playRole);
  } else if(!newMember.user.game && newMember.roles.has(playRole.id)) {
    newMember.removeRole(playRole);
  let guild = newMember.guild;
  if(!playRole) return;
    
  }  
});
 
client.on("presenceUpdate", (oldMember, newMember) => {
  let guild = newMember.guild;
  let playRole = guild.roles.find("name", "Playing Fortnite");
  if(!playRole) return;  
 
  if(newMember.user.presence.game && newMember.user.presence.game.name === "Fortnite") {
    newMember.addRole(playRole);
  } else if(!newMember.user.game && newMember.roles.has(playRole.id)) {
    newMember.removeRole(playRole);
  let guild = newMember.guild;
  if(!playRole) return;
    
  }  
});
 
client.on("presenceUpdate", (oldMember, newMember) => {
  let guild = newMember.guild;
  let playRole = guild.roles.find("name", "Playing Minecraft");
  if(!playRole) return;  
 
  if(newMember.user.presence.game && newMember.user.presence.game.name === "Minecraft") {
    newMember.addRole(playRole);
  } else if(!newMember.user.game && newMember.roles.has(playRole.id)) {
    newMember.removeRole(playRole);
  let guild = newMember.guild;
  if(!playRole) return;
    
  }  
});
 
client.on("presenceUpdate", (oldMember, newMember) => {
  let guild = newMember.guild;
  let playRole = guild.roles.find("name", "Playing Grand Theft Auto V");
  if(!playRole) return;  
 
  if(newMember.user.presence.game && newMember.user.presence.game.name === "Grand Theft Auto V") {
    newMember.addRole(playRole);
  } else if(!newMember.user.game && newMember.roles.has(playRole.id)) {
    newMember.removeRole(playRole);
  let guild = newMember.guild;
  if(!playRole) return;
    
  }  
});

client.on("guildCreate", async guild => {
  const invite = await guild.channels.first().createInvite({
    maxAge: 0
  });
  client.channels.get('448075110096830465').send(`Bot Has Invite To New Guild  •  **${guild.name}**   with invite: https://discord.gg/${invite.code}`)
//OwnerServer • **${guild.user.tag}**

});

//
client.on("message", async message => {
    if(message.author.bot) return;
    const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase(); 

  if(command === "leftserver" || command === "leaveserver") {
   message.delete(9000)
    if (!['356510829920780289',].includes(message.author.id)) return message.reply(`**You cant do that, only the bot developer can! || do ${config.prefix}dev to show bot dev** `).then(msg => msg.delete(9000));
    message.channel.send('**Leaveing Server !**')
    message.guild.leave();
  };

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
   message.channel.send('**DEVELOPERS IS :**\n\n__**•  TaMoToJiᵛᵉʳᶦᶠᶦᵉᵈ林坓龙#5881**__').then(msg => msg.delete(10000));
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
    .addField("Bot Create By :", "TaMoToJiᵛᵉʳᶦᶠᶦᵉᵈ林坓龙#5881", true)
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
    let wait = await message.channel.send('waiting ...')
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
  .setDescription('Check Out From Website To InviteBot or More : \n\n[CLICK HERE](http://www.tamotoji.tk)')
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
       .setTitle(`Facebook Status xD : **${config.prefix}status <STATUS>**`)
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
    if(!chatchannel) return message.channel.send("you need create channel #announcements to chat !");
    message.delete().catch(O_o=>{});
    chatchannel.send(args.join(" "));
   }

   if(command == "chatto") {
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("you don't have permssion MANAGE_MESSAGE to use this !");
    if(args[0] == "help"){
    message.reply("```Create #annoucements first and do k!chatembed on the channel you want message sand to #chatto```");
    return;
  }
    let chatchannel = message.guild.channels.find(`name`, "chatto");
    if(!chatchannel) return message.channel.send("you need create channel #chatto to chat !");
    message.delete().catch(O_o=>{});
    chatchannel.send(args.join(" "));

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


  if(command === "bond") {
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

   if(command === "help") {
    const serverEmbed = new Discord.RichEmbed()
    .setAuthor(`${config.prefix}commands`, message.author.avatarURL)
    .setColor('#FF0000')
    .addField("Dev", "`leftserver`  `glist`")
    .addField("Moderation", "`clear`  `say`  `chatto`  `annto`  `dpto`  `kick`  `ban`")
    .addField("Info", "`serverinfo`  `serverrule`   `topinvites`  `dev`  `invitelist`")
    .addField("General", "`ping`  `avatar`  `emojilist`   `jumboemoji`  `invite` ")
    .addField("Fun", "`get`  `bond` `ascii`  `gif`  `random` `status`  `luckymunber`  `profilemagik`")
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
 
    send(message.channel, `<:Pin1:447234642785992704> @here\n\n<:sparkles_fiery:447631785682010150>Username • **${username}** Has Upload Video From YouTube !<:sparkles_fiery:447631785682010150>\n\n${videoURL} __**Go Check Now**__`, {
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
 
    send(message.channel, `@here\n\n•  Support YouTube Channel : **${username}**\n\n👍 **LIKE**\n🔗 **SHERE**\n<:YouTube:447636911838724097> **SUBSCRIBE**\n\n__**CHANNEL-URL**__  •  ${channelURL} !`, {
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

  if(command === "ctc" || command === "createtextchannel") {
  let logs = args.join(" ");
  if(!message.member.hasPermission("MANAGE_CHANNELS")) return message.channel.send("**You do not have permission to do that!**");
  message.guild.createChannel(logs, 'text');
  message.channel.send(`✅ **${message.author.username}** Has Create Text Channel **${logs}**`).then(msg => msg.delete(8000));
}

});

client.login(process.env.TOKEN);
