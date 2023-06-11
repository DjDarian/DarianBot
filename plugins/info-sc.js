import { promises } from 'fs'
import { join } from 'path'

let handler = async function (m, { conn, __dirname }) {
let _package = JSON.parse(await promises.readFile(join(__dirname, '../package.json')).catch(_ => ({}))) || {}
  
m.reply(`🔸️ɢɪᴛʜᴜʙ: ${_package.homepage}

ᴾᵘᵉᵈᵉ ᵃᵖᵒʸᵃʳᵐᵉ ᶜᵒᵐᵖᵃʳᵗᶦᵉⁿᵈᵒ ᵉˢᵗᵒˢ ʸ ˢᶦ ᵗᵉ ᵃᵍʳᵃᵈᵃ ᵉˡ ᴮᵒᵗ ʳᵉᵍᵃˡᵃʳᵐᵉ ᵘⁿᵃ ⭐ ᴳʳᵃᶜᶦᵃˢ
`.trim())
    
}

handler.help = ['script']
handler.tags = ['main']
handler.command = ['sc', 'git', 'script'] 
handler.register = true
export default handler
