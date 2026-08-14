const config = require('../config')
const { cmd, commands } = require('../command')

cmd({
    pattern: "ping",
    desc: "Check bot's response time.",
    category: "main",
    react: "🚀",
    filename: __filename
},
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        const startTime = Date.now();
        
        // පින්තූරය සමඟ යැවීමට අවශ්‍ය පණිවිඩය
        const pingText = `╭━━━〔 𝐆ᴀʏᴀɴ 𝐌ᴅ 〕━━━┈⊷
┃ 🏓 𝐏 𝐎 𝐍 𝐆 !
╰━━━━━━━━━━━━━━━┈⊷

⭔ 𝙎𝙥𝙚𝙚𝙙 : Pinging...
⭔ 𝙎𝙩𝙖𝙩𝙪𝙨 : 𝙁𝙖𝙨𝙩 & 𝘼𝙘𝙩𝙞𝙫𝙚 🟢

*© 𝐆ᴀʏᴀɴ 𝐌𝐝*`;

        // පින්තූරය සමඟ පණිවිඩය යැවීම
        const message = await conn.sendMessage(from, { 
            image: { url: 'https://i.ibb.co/S7P5vhDd/IMG-20260711-WA0033.jpg' }, 
            caption: pingText 
        }, { quoted: mek });
        
        const endTime = Date.now();
        const ping = endTime - startTime;
        
        const updatedPingText = `╭━━━〔 ɢᴀʏᴀɴ ᴍᴅ 〕━━━┈⊷
┃ 🏓 𝐏 𝐎 𝐍 𝐆 !
╰━━━━━━━━━━━━━━━┈⊷

⭔ 𝙎𝙥𝙚𝙚𝙙 : ${ping}ms
⭔ 𝙎𝙩𝙖𝙩𝙪𝙨 : 𝙁𝙖𝙨𝙩 & 𝘼𝙘𝙩𝙞𝙫ᴇ 🟢

*© ɢᴀʏᴀɴ ᴍᴅ*`;

        await conn.sendMessage(from, { text: updatedPingText, edit: message.key });

    } catch (e) {
        console.log(e);
        reply(`Error: ${e}`);
    }
})
