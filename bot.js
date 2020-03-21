const Discord = require('discord.js');
const bot = new Discord.Client();

const token = 'Njg5NTQwNTM3NTAxNDgzMTA5.XnEW8g.hWiiF9sbpmVUnKGlHPqHpM4Uz2w'

const PREFIX = '$';

bot.on ('ready', () =>{
    console.log('This bot is online!');
})

bot.on('message', message=>{
  
    let args = message.content.substring(PREFIX.length).split(' ');

    switch(args[0]){
         case 'bruh':
             message.channel.send('BRUHHHHHHHHHHHHHHHHHHHHHHHH');
            break;
        case 'youtube':
            message.channel.send('https://www.youtube.com/channel/UCpS3LNwGp_2RyfyVZbVa80Q/videos')
            break;
            case 'info':
            if(args[1] === 'version'){
                message.channel.send('Version 1.0');
            }else{ 
                message.channel.send('Invalid command.You can see the commands at the #bot-commands')
            }
        break;
    }
})


bot.login (token); 
client.login(process.env.Njg5NTQwNTM3NTAxNDgzMTA5.XnYdUQ.dbYkyyECvVBqcovVUxiayXOFUew);
