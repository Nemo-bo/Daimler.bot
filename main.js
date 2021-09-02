const {
    WAConnection,
    MessageType,
    Presence,
    Mimetype,
    GroupSettingChange
} = require('@adiwajshing/baileys')
const fs = require('fs')
const { banner, start, success } = require('./lib/functions')
const { color } = require('./lib/color')

require('./index.js')
nocache('./index.js', module => console.log(`${module} is now updated!`))

const starts = async (FxBot = new WAConnection()) => {
    FxBot.version = [2, 2119, 6]
    FxBot.logger.level = 'warn'
    console.log(banner.string)
    FxBot.on('qr', () => {
        console.log(color('[','white'), color('!','red'), color(']','white'), color('❗ Escanea el código QR de arriba'))
    })

    fs.existsSync('./session.json') && FxBot.loadAuthInfo('./session.json')
    FxBot.on('connecting', () => {
        start('2', 'Conectando...')
    })
    FxBot.on('open', () => {
        success('2', 'Ya me conecte👌🏻')
    })
    await FxBot.connect({timeoutMs: 30*1000})
        fs.writeFileSync('./session.json', JSON.stringify(FxBot.base64EncodedAuthInfo(), null, '\t'))

    FxBot.on('chat-update', async (message) => {
        require('./index.js')(FxBot, message)
    })
}

/**
 * Uncache if there is file change
 * @param {string} module Module name or path
 * @param {function} cb <optional> 
 */
function nocache(module, cb = () => { }) {
    console.log('Module', `'${module}'`, 'is now being watched for changes')
    fs.watchFile(require.resolve(module), async () => {
        await uncache(require.resolve(module))
        cb(module)
    })
}

/**
 * Uncache a module
 * @param {string} module Module name or path
 */
function uncache(module = '.') {
    return new Promise((resolve, reject) => {
        try {
            delete require.cache[require.resolve(module)]
            resolve()
        } catch (e) {
            reject(e)
        }
    })
}

starts()
