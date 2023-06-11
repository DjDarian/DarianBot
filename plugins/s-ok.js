import { sticker } from '../lib/sticker.js'
import fetch from 'node-fetch'
import axios from 'axios'

let handler = async (m, { conn, text, usedPrefix, command }) => {
	let img = (await axios.get(`https://raw.githubusercontent.com/fgmods/fg-team/main/img/hu.json`)).data
    let stiker = await sticker(null, global.API(`${pickRandom(img)}`), global.packname, global.author)
    if (stiker) return await conn.sendFile(m.chat, stiker, 'sticker.webp', '',m, true, { contextInfo: { 'forwardingScore': 200, 'isForwarded': false, externalAdReply:{ showAdAttribution: false, title: wm, body: `h`, mediaType: 2, sourceUrl: nna, thumbnail: imagen1}}}, { quoted: m })
}

handler.customPrefix = /ok|de acuerdo|okey|okay|estoy de acuerdo|deacuerdo|👌|khajs/i 
handler.command = new RegExp

export default handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}