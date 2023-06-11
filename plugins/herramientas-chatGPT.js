import fetch from 'node-fetch'
let handler = async (m, { text, usedPrefix, command }) => {
if (!text) throw `ɪɴɢʀᴇsᴇ ᴜɴᴀ ᴘᴇᴛɪᴄɪᴏ́ɴ ᴏ ᴜɴᴀ ᴏʀᴅᴇɴ ᴘᴀʀᴀ ᴜsᴀʀ ʟᴀ ғᴜɴᴄɪᴏ́ɴ ᴅᴇ ᴄʜᴀᴛɢᴘᴛ\n\nᴇᴊᴇᴍᴘʟᴏ ᴅᴇ ʟᴀ ᴘᴇᴛɪᴄɪᴏ́ɴ ʏ ᴏ́ʀᴅᴇɴᴇs\n*${usedPrefix + command} Reflexion sobre la serie Merlina 2022 de netflix*\n*${usedPrefix + command} Codigo en JS para un juego de cartas*`
try {
m.reply('*⏳ Aguarde un momento ⏳*')
await conn.sendPresenceUpdate('composing', m.chat)
let tiores = await fetch(`https://api.lolhuman.xyz/api/openai?apikey=${lolkeysapi}&text=${text}&user=user-unique-id`)
let hasil = await tiores.json()
m.reply(`${hasil.result}`.trim())
} catch {
throw `*[❗] 𝙴𝚁𝚁𝙾𝚁, 𝚅𝚄𝙴𝙻𝚅𝙰 𝙰 𝙸𝙽𝚃𝙴𝙽𝚃𝙰𝚁𝙻𝙾*`
}}
handler.command = ['openai', 'chatgpt', 'ia', 'robot']
export default handler