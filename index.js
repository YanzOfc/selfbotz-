//SC ORI "RAMDANI STORE" LUH JAN NGAKU2 DAH
//KALO MAU AMBIL CASE TAG "RAMDANI OFFICIAL"
//BASE NEW BANYAK FITUR YG ERROR!!!
//MAU NO ERROR? BIKIN SENDIRI
const {
   WAConnection,
   MessageType,
   Presence,
   MessageOptions,
   Mimetype,
   WALocationMessage,
   WA_MESSAGE_STUB_TYPES,
   ReconnectMode,
   ProxyAgent,
   GroupSettingChange,
   waChatKey,
   mentionedJid,
   processTime,
} = require("@Ramdaniofficial/baileys")
const brainly = require('brainly-scraper')
const fs = require('fs')
const crypto = require('crypto')
const request = require('request')
const moment = require('moment-timezone')
const fetch = require('node-fetch')
const ffmpeg = require('fluent-ffmpeg')
const axios = require('axios')
const Exif = require('./lib/exif')
const exif = new Exif() 
const yts = require( 'yt-search')
const hx = require('hxz-api')
const { exec } = require('child_process')
const { pinterest } = require('./lib/pinterest')
const { iklan } = require('./lib/iklan')
const { color, bgcolor } = require('./lib/color')
const { wait, simih, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, banner, start, info, success, close } = require('./lib/functions')
const { fetchJson, fetchText } = require('./lib/fetcher')
const { recognize } = require('./lib/ocr')
const { rules } = require('./lib/rules') 
const { yta, ytv, igdl, upload, formatDate } = require('./lib/ytdl')
let { isWarn, addWarn, getWarn, addWarning, checkWarn, delWarn } = require('./database/warning')
const { donasi } = require('./lib/donasi')
const { grupbot } = require('./lib/grupbot')
const { allmenu } = require('./message/allmenu')
const { bahasa } = require('./lib/bahasa')
const { negara } = require('./lib/kodenegara')
const { lirikLagu } = require('./lib/lirik.js')
const { herolist } = require('./lib/herolist.js')
const { herodetails } = require('./lib/herodetail.js')
const antilink = JSON.parse(fs.readFileSync('./database/antilink.json'))
const antiunchek = JSON.parse(fs.readFileSync('./database/antiunchek.json'))
const nsfw = JSON.parse(fs.readFileSync('./src/nsfw.json'))
const samih = JSON.parse(fs.readFileSync('./src/simi.json'))
const ban = JSON.parse(fs.readFileSync('./database/banned.json'))
const prem = JSON.parse(fs.readFileSync('./database/premium.json'))
const _user = JSON.parse(fs.readFileSync('./database/user.json'))
const _registered = JSON.parse(fs.readFileSync('./database/registered.json'))
const setting = JSON.parse(fs.readFileSync('./config/settings.json'))
let _scommand = JSON.parse(fs.readFileSync("./database/scommand.json"));
const welkom = JSON.parse(fs.readFileSync('./database/welkom.json'))
const scommand = JSON.parse(fs.readFileSync("./database/scommand.json"));
const settings = JSON.parse(fs.readFileSync('./config/settings.json'))
const Apikey = JSON.parse(fs.readFileSync('./apikey/Apikey.json'))
const config = JSON.parse(fs.readFileSync('./donate/donate.json'))
const thumbmenu = fs.readFileSync("./media/foto/menu.jpg"); 
const thumb = fs.readFileSync("./media/foto/thumb.jpg");
const qris = fs.readFileSync("./media/foto/qris.jpg");
Lolhuman = Apikey.Lolhuman
AlphaBot = Apikey.AlphaBot
Leyscoders = Apikey.Leyscoders
autorespon = true
autoread = false
autocomposing = true
autorecording = false
AutoRespon: true
publik = true
//semting 
namabot = settings.BotName
namaowner = settings.OwnerName
nomorowner = settings.OwnerNumber
//config
gopay = config.Gopay
dana = config.Dana
ovo = config.Ovo
pulsa = config.Pulsa
urlqris = config.Qris
saweria = config.Saweria
linktree = config.Linktree
//break
const addCmd = (id, command) => {
    const obj = { id: id, chats: command }
    scommand.push(obj)
    fs.writeFileSync('./database/scommand.json', JSON.stringify(scommand))
}
const getCommandPosition = (id) => {
    let position = null
    Object.keys(scommand).forEach((i) => {
        if (scommand[i].id === id) {
            position = i
        }
    })
    if (position !== null) {
        return position
    }
}
const getCmd = (id) => {

  let position = null;
  Object.keys(scommand).forEach((i) => {
    if (scommand[i].id === id) {
      position = i;
    }
  });
  if (position !== null) {
    return scommand[position].chats;
  }
};  


module.exports = Ramdani = async (Ramdani, mek) => {
		try {
            if (!mek.hasNewMessage) return
            mek = mek.messages.all()[0]
			if (!mek.message) return
			if (mek.key && mek.key.remoteJid == 'status@broadcast') return
			global.blocked
			const content = JSON.stringify(mek.message)
			const from = mek.key.remoteJid
			const type = Object.keys(mek.message)[0]
			const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
			const time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
            const cmd = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''.slice(1).trim().split(/ +/).shift().toLowerCase()
            const prefix = /^[°•π÷×¶∆£¢€¥®™=|~!#$%^&.?/\\©^z+*@,;]/.test(cmd) ? cmd.match(/^[°•π÷×¶∆£¢€¥®™=|~!#$%^&.?/\\©^z+*,;]/gi) : '/' 
        body = (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message[type].caption.startsWith(prefix) ? mek.message[type].caption : (type == 'videoMessage') && mek.message[type].caption.startsWith(prefix) ? mek.message[type].caption : (type == 'extendedTextMessage') && mek.message[type].text.startsWith(prefix) ? mek.message[type].text : (type == 'listResponseMessage') && mek.message[type].singleSelectReply.selectedRowId ? mek.message[type].singleSelectReply.selectedRowId : (type == 'buttonsResponseMessage') && mek.message[type].selectedButtonId ? mek.message[type].selectedButtonId : (type == 'stickerMessage') && (getCmd(mek.message[type].fileSha256.toString('base64')) !== null && getCmd(mek.message[type].fileSha256.toString('base64')) !== undefined) ? getCmd(mek.message[type].fileSha256.toString('base64')) : ""
		budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
		selectedButton = (type == 'buttonsResponseMessage') ? mek.message.buttonsResponseMessage.selectedButtonId : ''
        responseButton = (type == 'listResponseMessage') ? mek.message.listResponseMessage.title : ''
		button = (type == 'buttonsResponseMessage') ? mek.message.buttonsResponseMessage.selectedDisplayText : ''
		isImage = (type === 'imageMessage')
		const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()		
		const arg = body.substring(body.indexOf(' ') + 1)
		const args = body.trim().split(/ +/).slice(1)
		const isCmd = body.startsWith(prefix)
		const q = args.join(' ')
		const c = args.join(' ')
		var pes = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''
//Respon
			mess = {
				daftar: `maaf Kamu Belum Terdaftar Silahkan Daftar Ketik .daftar`,
				wait: 'Tunggu sebentar dekks....',
				banned: 'Luh dah di banned awoakawok, chat owner untuk di ruqyah',
				success: 'Nih deks jan lupa subscribe https://youtube.com/channel/UCB157jomCne961WzYHpG4gg',
				error: {
			    stick: 'Gagal, terjadi kesalahan saat mengkonversi gambar ke sticker',
			    link: 'Lu ngasih link apaan tolol'
				},
				only: {
					group: 'FITUR INI HANYA BISA DIGUNAKAN UNTUK GRUP!!! ❌',
					premium: 'LUH BUKAN USER PREMIUM, CHAT OWNER UNTUK DI RUQYAH!!!',
					ownerG: 'FITUR INI HANYA BISA DIGUNAKAN OLEH OWNER GRUP!!! ❌',
					ownerB: 'FITUR INI HANYA BISA DIGUNAKAN OLEH OWNER BOT!!! ❌',
					admin: 'FITUR INI HANYA BISA DIGUNAKAN OLEH ADMIN GRUP!!! ❌',
					Badmin: 'FITUR INI HANYA BISA DIGUNAKAN KETIKA BOT MENJADI ADMIN!!! ❌'
				}
			}
			const botNumber = Ramdani.user.jid
			const ownerNumber = [`${nomorowner}@s.whatsapp.net`] 
			const isGroup = from.endsWith('@g.us')
			const sender = isGroup ? mek.participant : mek.key.remoteJid
			pushname = Ramdani.contacts[sender] != undefined ? Ramdani.contacts[sender].vname || Ramdani.contacts[sender].notify : undefined
			const groupMetadata = isGroup ? await Ramdani.groupMetadata(from) : ''
			const groupName = isGroup ? groupMetadata.subject : ''
			const groupId = isGroup ? groupMetadata.jid : ''
			const groupMembers = isGroup ? groupMetadata.participants : ''
			const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
			const isBanned = ban.includes(sender)
			const isPremium= prem.includes(sender)
			const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
			const isGroupAdmins = groupAdmins.includes(sender) || false
			const isWelkom = isGroup ? welkom.includes(from) : false
			const isAntilink = isGroup ? antilink.includes(from) : false
			const isOwner = ownerNumber.includes(sender)
		var dates = moment().tz('Asia/Jakarta').format("YYYY-MM-DDTHH:mm:ss");
        var date = new Date(dates);
        var tahun = date.getFullYear();
        var bulan = date.getMonth();
        var tanggal = date.getDate();
        var hari = date.getDay();
        //${jam} ${hari} ${tanggal} ${bulan} ${tahun}
       
        switch(hari) {
            case 0: hari = "Minggu"; break;
            case 1: hari = "Senin"; break;
            case 2: hari = "Selasa"; break;
            case 3: hari = "Rabu"; break;
            case 4: hari = "Kamis"; break;
            case 5: hari = "Jum`at"; break;
            case 6: hari = "Sabtu"; break;
        }
		switch(bulan) {
            case 0: bulan = "Januari"; break;
            case 1: bulan = "Februari"; break;
            case 2: bulan = "Maret"; break;
            case 3: bulan = "April"; break;
            case 4: bulan = "Mei"; break;
            case 5: bulan = "Juni"; break;
            case 6: bulan = "Juli"; break;
            case 7: bulan = "Agustus"; break;
            case 8: bulan = "September"; break;
            case 9: bulan = "Oktober"; break;
            case 10: bulan = "November"; break;
            case 11: bulan = "Desember"; break;
        }
			const Tanggal= "" + hari + ", " + tanggal + " " + bulan + " " + tahun;
			const jam = moment.tz('Asia/Jakarta').format('HH:mm:ss z')
			const timeWib = moment.tz('Asia/Jakarta').format('HH:mm:ss')
		const timeWit= moment().tz('Asia/Makassar').format('HH:mm:ss')
        const timeWita = moment().tz('Asia/Jayapura').format('HH:mm:ss')
        //${jam} ${timeWib}
        const isUrl = (url) => {
			    return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))
			}
			const reply = (teks) => {
			Ramdani.sendMessage(from, teks, text, { thumbnail: thumb, sendEphemeral: true, quoted: mek, contextInfo: { forwardingScore: 508, isForwarded: true, externalAdReply:{title: `New Base By Ramdani Official`,body:"© Creator By Ramdani Official",previewType:"PHOTO",thumbnail:thumb,sourceUrl:`https://youtube.com/channel/UCB157jomCne961WzYHpG4gg`}}})
		}
		const reply2 = (teks) => {
Ramdani.sendMessage(from, teks, text, {quoted: mek, contextInfo: {"forwardingScore":999,"isForwarded":true},sendEphemeral: true})
}
			const sendMess = (hehe, teks) => {
				Ramdani.sendMessage(hehe, teks, text)
			}
			const mentions = (teks, memberr, id) => {
				(id == null || id == undefined || id == false) ? Ramdani.sendMessage(from, teks.trim(), extendedText, {contextInfo: {"mentionedJid": memberr}}) : Ramdani.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": memberr}})
			}
			if (budy.includes("https://chat.whatsapp.com/")) {
				if (!isGroup) return
				if (!isAntilink) return
				if (isGroupAdmins) return
				var kic = `${sender.split("@")[0]}@s.whatsapp.net`
				reply(` *「 GROUP LINK DETECTOR 」*\nAwokawok ngirim link, sorry gua kick🗿 :(`)
				setTimeout(() => {
				Ramdani.groupRemove(from, [kic]).catch((e) => { reply(`BOT HARUS JADI ADMIN`) })
				}, 0)
			   }
			            var ase = new Date();
                        var waktoonyabro = ase.getHours();
                        switch(waktoonyabro){
                case 0: waktoonyabro = `Selamat Malam ${pushname}`; break;
                case 1: waktoonyabro = `Selamat Malam ${pushname}`; break;
                case 2: waktoonyabro = `Selamat Malam ${pushname}`; break;
                case 3: waktoonyabro = `Selamat Pagi ${pushname}`; break;
                case 4: waktoonyabro = `Selamat Pagi ${pushname}`; break;
                case 5: waktoonyabro = `Selamat Pagi ${pushname}`; break;
                case 6: waktoonyabro = `Selamat Pagi ${pushname}`; break;
                case 7: waktoonyabro = `Selamat Pagi ${pushname}`; break;
                case 8: waktoonyabro = `Selamat Pagi ${pushname}`; break;
                case 9: waktoonyabro = `Selamat Pagi ${pushname}`; break;
                case 10: waktoonyabro = `Selamat Pagi ${pushname}`; break;
                case 11: waktoonyabro = `Selamat Siang ${pushname}`; break;
                case 12: waktoonyabro = `Selamat Siang ${pushname}`; break;
                case 13: waktoonyabro = `Selamat Siang ${pushname}`; break;
                case 14: waktoonyabro = `Selamat Siang ${pushname}`; break;
                case 15: waktoonyabro = `Selamat Sore ${pushname}`; break;
                case 16: waktoonyabro = `Selamat Sore ${pushname}`; break;
                case 17: waktoonyabro = `Selamat Sore ${pushname}`; break;
                case 18: waktoonyabro = `Selamat Malam ${pushname}`; break;
                case 19: waktoonyabro = `Selamat Malam ${pushname}`; break;
                case 20: waktoonyabro = `Selamat Malam ${pushname}`; break;
                case 21: waktoonyabro = `Selamat Malam ${pushname}`; break;
                case 22: waktoonyabro = `Selamat Malam ${pushname}`; break;
                case 23: waktoonyabro = `Selamat Malam ${pushname}`; break;
            }
            var ucapanFakereply = "" + waktoonyabro;
           
//FAKE TROLI

           const fakedoc = {key: {fromMe: false, participant: `${nomorowner}@s.whatsapp.net`, ...(from ? {remoteJid: "status@broadcast" } : {}) }, message: {documentMessage: {mimetype: 'application/octet-stream', title: `${ucapanFakereply}`, pageCount: 0, fileName: `RamdaniBot`, jpegThumbnail: fs.readFileSync(`./media/foto/thumb.jpg`)}}}
			const ftoko = { key: { fromMe: false, 
			             participant: `0@s.whatsapp.net`, ...(from ? { 
			             remoteJid: 'status@broadcast' } : {}) }, 
			             message: { 'productMessage': { 'product': { 'productImage':{ 'mimetype': 'image/jpeg', 'jpegThumbnail': fs.readFileSync('./media/foto/thumb.jpg') }, 'title': `${namabot}\nRp. 10.000`, 'productImageCount': 9999 }, 'businessOwnerJid': `0@s.whatsapp.net`}}}
    const ftrol = {key : {fromMe:false, 
	participant : '0@s.whatsapp.net'},
       message: {
              orderMessage: {
                            itemCount : 999999999,
                            status: 1,
                            surface : 1,
                            message: `New Base By Yanz Official \nRp. 999.999.999`, 
                            orderTitle: `© Creator By Yanz Official`,
                            thumbnail: thumb, 
                            sellerJid: '0@s.whatsapp.net',
                            contextInfo: {"forwardingScore":999,"isForwarded":true}, sendEphemeral: true}}}
const fhidetag = {key : {fromMe:false, 
	participant : '0@s.whatsapp.net'},
       message: {
              orderMessage: {
                            itemCount : 999999999,
                            status: 1,
                            surface : 1,
                            message: `New Base By Yanz Official`, 
                            orderTitle: `© Creator By Yanz Official`,
                            thumbnail: thumb, 
                            sellerJid: '0@s.whatsapp.net',
                            contextInfo: {"forwardingScore":999,"isForwarded":true}, sendEphemeral: true}}}
const ftrolMENU = {key : {fromMe:false,
	participant : '0@s.whatsapp.net'},
       message: { 
              orderMessage: {
                            itemCount : 999999999,
                            status: 1,
                            surface : 1,
                            message: `New Base By Yanz Official`, 
                            orderTitle: `© Creator By Yanz Official`,
                            thumbnail: thumb, 
                            sellerJid: '0@s.whatsapp.net',
                            contextInfo: {"forwardingScore":999,"isForwarded":true}, sendEphemeral: true}}}
			const fakeitem = (teks) => {
           Ramdani.sendMessage(from, teks, text, {
                   quoted: {
                           key:{
                 	       fromMe:false, 
                           participant:`0@s.whatsapp.net`, ...(from ? {
                           remoteJid :"0-1604595598@g.us" }: {})
                           },message:{"orderMessage":{
                                  "orderId":"4302154426574187",
                                  "thumbnail":fs.readFileSync("./media/foto/thumb.jpg"),
                                  "itemCount":999999999,
                                  "status":"INQUIRY",
                                  "surface":"CATALOG",
                                  "message": `${namabot}\nRp. 999.999.999.999`,
                                  "token":"AR6xBKbXZn0Xwmu76Ksyd7rnxI+Rx87HfinVlW4lwXa6JA=="}}},
                           contextInfo: {"forwardingScore":999,"isForwarded":true}, sendEphemeral: true})}


	Ramdani.on('CB:action,,battery', json => {
		global.batteryLevelStr = json[2][0][1].value
		global.batterylevel = parseInt(batteryLevelStr)
		baterai = batterylevel
		if (json[2][0][1].live == 'true') charging = true
		if (json[2][0][1].live == 'false') charging = false
		console.log(json[2][0][1])
		console.log('Baterai : ' + batterylevel + '%')
	})
	global.batrei = global.batrei ? global.batrei : []
	Ramdani.on('CB:action,,battery', json => {
		const batteryLevelStr = json[2][0][1].value
		const batterylevel = parseInt(batteryLevelStr)
		global.batrei.push(batterylevel)
	})                                              


    const sendButImage = async (from, context, fotext, img, but) => {
    gam = img
    jadinya = await Ramdani.prepareMessage(from, gam, MessageType.image)
    buttonMessagesI = {
      imageMessage: jadinya.message.imageMessage,
      contentText: context,
      footerText: fotext,
      buttons: but,
      headerType: 4
    }
    Ramdani.sendMessage(from, buttonMessagesI, MessageType.buttonsMessage, {quoted: mek})
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
                    Ramdani.sendMessage(to, media, type, { quoted: mek, mimetype: mime, caption: text,contextInfo: {"mentionedJid": mids}})
                    
                    fs.unlinkSync(filename)
                });
            }  
      
      const sendButVideo = async (id, text1, desc1, gam1, but = [], options = {} ) => {
      kma = gam1;
      mhan = await Ramdani.prepareMessage(from, kma, video);
      const buttonMessages = {
        videoMessage: mhan.message.videoMessage,
        contentText: text1,
        footerText: desc1,
        buttons: but,
        headerType: 4,
      };
      Ramdani.sendMessage(id, buttonMessages, MessageType.buttonsMessage, {quoted: mek})
    };
        
        const sendButloc = async(id, text1, desc1, gam1, but = [], options = {}) => {
               let kma = gam1
               Ramdani.sendMessage(id, {"contentText": text1,
               "footerText": desc1, 
               "buttons": but,
               "headerType": "LOCATION",
                       "locationMessage": {
                   "text": "BOT",
                   "name": "South Brisbane",
                   "address": "Cloudflare, Inc",
                   "jpegThumbnail": kma
                }}, MessageType.buttonsMessage, {quoted: mek, contextInfo:{mentionedJid: parseMention(text1, desc1)}}, options)  
              }          
      
      const sendButMessage = (id, text1, desc1, but = [], options = {}) => {
      const buttonMessage = {
        contentText: text1,
        footerText: desc1,
        buttons: but,
        headerType: 1,
      };
      Ramdani.sendMessage(id, buttonMessage, MessageType.buttonsMessage, {quoted: mek})
    };
    
    const sendKontak = (from, nomor, nama, org, Ponsel, descBiz = "") => {
      const vcard =
        "BEGIN:VCARD\n" +
        "VERSION:3.0\n" +
        "FN:" +
        nama +
        "\n" +
        "ORG:" +
        org +
        "\n" +
        "TEL;type=CELL;type=VOICE;waid=" +
        nomor +
        ":+" +
        nomor +
        "\n" +
        "END:VCARD";
        let nano = `Berikut Adalah Nomor Developer Saya, Silahkan Chat/Simpan Nomor Developer Saya.\n\n*NB: Dilarang Chat Yang Tidak Berkepentingan.*`
      Ramdani.sendMessage(
        from,
        { displayname: nama, vcard: vcard },
        MessageType.contact,
        { quoted: mek, caption: nano}
      );
    }; 
    
      function clockString(ms) {
      let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000);
      let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60;
      let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60;
      return [h, m, s].map((v) => v.toString().padStart(2, 0)).join(':');
    }
    function parseMention(text = '') {
return [...text.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net')
}



			colors = ['red','white','black','blue','yellow','green']
			const isMedia = (type === 'imageMessage' || type === 'videoMessage')
			const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
			const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
			const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
			if (!isGroup && isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
			if (!isGroup && !isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mRECV\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
			if (isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
			if (!isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mRECV\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
			let authorname = Ramdani.contacts[from] != undefined ? Ramdani.contacts[from].vname || Ramdani.contacts[from].notify : undefined	
			if (authorname != undefined) { } else { authorname = groupName }	
			
			function addMetadata(packname, author) {	
				if (!packname) packname = 'Bot'; if (!author) author = 'By RamdaniBot';	
				author = author.replace(/[^a-zA-Z0-9]/g, '');	
				let name = `${author}_${packname}`
				if (fs.existsSync(`./media/stickers/${name}.exif`)) return `./media/stickers/${name}.exif`
				const json = {	
					"sticker-pack-name": packname,
					"sticker-pack-publisher": author,
				}
				const littleEndian = Buffer.from([0x49, 0x49, 0x2A, 0x00, 0x08, 0x00, 0x00, 0x00, 0x01, 0x00, 0x41, 0x57, 0x07, 0x00])	
				const bytes = [0x00, 0x00, 0x16, 0x00, 0x00, 0x00]	

				let len = JSON.stringify(json).length	
				let last	

				if (len > 256) {	
					len = len - 256	
					bytes.unshift(0x01)	
				} else {	
					bytes.unshift(0x00)	
				}	

				if (len < 16) {	
					last = len.toString(16)	
					last = "0" + len	
				} else {	
					last = len.toString(16)	
				}	

				const buf2 = Buffer.from(last, "hex")	
				const buf3 = Buffer.from(bytes)	
				const buf4 = Buffer.from(JSON.stringify(json))	
				const buffer = Buffer.concat([littleEndian, buf2, buf3, buf4])	
				fs.writeFile(`./media/stickers/${name}.exif`, buffer, (err) => {	
					return `./media/stickers/${name}.exif`	
				})	
	          }
async function sendButLocation(id, text1, desc1, gam1, but = [], options = {}) {
            let buttonMessages = { locationMessage: { jpegThumbnail: gam1 }, contentText: text1, footerText: desc1, buttons: but, headerType: 6 }
            return Ramdani.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
        }       
Ramdani.updatePresence(from, Presence.composing)
if (!publik) {
if (!isOwner && !mek.key.fromMe) return
}
const time2 = moment().tz('Asia/Jakarta').format('HH:mm:ss')  
 if(time2 < "23:59:00"){
var ucapanWaktu = 'Good night🌃'
 }
 if(time2 < "19:00:00"){
var ucapanWaktu = 'Good afternoon🌉'
 }
 if(time2 < "18:00:00"){
var ucapanWaktu = 'Good afternoon🌆'
 }
 if(time2 < "15:00:00"){
var ucapanWaktu = 'Good afternoon🌇'
 }
 if(time2 < "11:00:00"){
var ucapanWaktu = 'Good morning🌄'
 }
 if(time2 < "05:00:00"){
var ucapanWaktu = 'Good Night🌃'
 } 
const froxx = {
	 key: { 
          fromMe: false,
	      participant: `0@s.whatsapp.net`, ...(from ? 
	 { remoteJid: "status@broadcast" } : {}) 
                },
	 message: { 
		"extendedTextMessage": {
                 "text": `© Creator Yanz Official`,
                 "title": `© Creator Yanz Official`,
                 'jpegThumbnail': fs.readFileSync("./media/foto/thumb.jpg"),
                        }
	                  } 
                     }
runi = process.uptime() 
           Ramdani.setStatus(`Miko Botz Aktif Selama ${(runi)} `).catch((_)=>_);
          settingstatus = new Date() * 1;
const jmn = moment.tz('Asia/Jakarta').format('HH.mm')
				let d = new Date
				let locale = 'id'
				let gmt = new Date(0).getTime() - new Date('1 Januari 2021').getTime()
				const weton = ['Pahing', 'Pon','Wage','Kliwon','Legi'][Math.floor(((d * 1) + gmt) / 84600000) % 5]
				const week = d.toLocaleDateString(locale, { weekday: 'long' })
				const calender = d.toLocaleDateString(locale, {
				day: 'numeric',
				month: 'long',
				year: 'numeric'
		       })
const fakeText = (teks) => {
Ramdani.sendMessage(from, teks, text, {quoted: froxx})
}

switch(command) {
//CASE NYA
//MENU
//case 'menu':
/////////if (isBanned) return reply(mess.banned)
/////////////menu =`*Hai kak 👋 ${pushname} ${ucapanWaktu}*
//////////////Jangan lupa kunjungi sosial media kami ya kak😀`
////////////sendButImage(from, menu,`ᴍʏ ɢɪᴛʜᴜʙ : https://github.com/Ramdaniofficial
/////////////ᴍʏ ʜᴇʀᴏᴋᴜ : https://heroku.com/Ramdaniofficial
/////////////ᴍʏ ᴡᴇʙ : https://ramdaniofficial.blogspot.com/?m=1
////////////////ᴍʏ ʏᴏᴜᴛᴜʙᴇ : https://youtube.com/channel/UCB157jomCne961WzYHpG4gg
///////////////ᴍʏ ɪɴsᴛᴀɢʀᴀᴍ : https://www.instagram.com/muhammadramdani196453
//////////////ᴍʏ ᴛᴡɪᴛᴛᴇʀ : https://mobile.twitter.com/Muhamma56633691
/////////////ᴍʏ ғᴀᴄᴇʙᴏᴏᴋ : https://www.facebook.com/profile.php?id=100055274594084
///////////ᴍʏ sᴀᴡᴇʀɪᴀ : https://saweria.co/ramdaniofficial
////////////ᴍʏ ʟɪɴᴋᴛʀᴇᴇ : https://linktr.ee/ramdaniofficial\n${jam} ${hari} ${tanggal} ${bulan} ${tahun}\n© Creator By Ramdani Official`, thumb, [
    //////////////////     {buttonId: `${prefix}${prefix}c`, buttonText: {displayText: `SIMPLE MENU`, }, type: 1, },
       /////////////////////     {buttonId: `${prefix}${prefix}donate`, buttonText: { displayText: `DONATE`, }, type: 1, },
           /// ]); 
///break
//COMMAND/MENU//
case 'menu':
case 'help':
case 'm':
case 'danz':
if (isBanned) return reply(mess.banned)
 listMsg = {
 buttonText: 'Click here',
 footerText: '© Creator By Yanz Official',
 description: `Hai Kak @${sender.split('@')[0]}👋, Silahkan Pilih Menunya Disini\nJangan Spam Ya Kak, Kasih Jeda 5 Detik!!!`,
 sections: [
                     {
                      "title": `Jangan Lupa Donasi Tod`,
 rows: [
                            {                         
                              "title": "[📝]Rules bot",
                              "description" :"Menampilkan Fitur Rules Bot",
                              "rowId": `${prefix}rules`
                           },
                           {                         
                              "title": "[❤️]Thanks to",
                              "description" :"Menampilkan Fitur Thanks To",
                              "rowId": `${prefix}tqtq`
                           },
                            {
                        "title": "[👤]Owner",
                       "description" :"Menampilkan Fitur Owner Bot",
                       "rowId": `${prefix}owner`
                           },
                           {                         
                              "title": "[🛒]Donasi",
                              "description" :"Menampilkan Fitur Donasi Untuk Bot",
                              "rowId": `${prefix}donasi`
                          },
                          {
                        "title": "[🗂️]Script",
                       "description" :"Menampilkan Fitur Script Bot",
                       "rowId": `${prefix}sc`
                           },
                           {                         
                              "title": "[🤖]Jadi bot",
                              "description" :"Menampilkan Fitur Jadi Bot",
                              "rowId": `${prefix}jadibot`
                           },                          
                           {
                        "title": "[📒]Allmenu",
                       "description" :"Menampilkan Fitur Allmenu",
                       "rowId": `${prefix}allmenu`
                           },                                                      
                           {                         
                              "title": "[🛒]Store menu",
                              "description" :"Menampilkan Fitur Menu Store",
                              "rowId": `${prefix}storemenu`
                           },
                           {                         
                              "title": "[👥]Group Menu",
                              "description" :"Menampilkan Fitur Menu Grup",
                              "rowId": `${prefix}grupmenu`
                           },
                           {
                        "title": "[🤍]Asupan Menu",
                       "description" :"Menampilkan Fitur Menu Asupan",
                       "rowId": `${prefix}asupanmenu`
                           },
                           {                         
                              "title": "[🖨️]Maker Menu",
                              "description" :"Menampilkan Fitur Menu Maker",
                              "rowId": `${prefix}makermenu`
                           },
                           {                         
                              "title": "[🉐]Anime Menu",
                              "description" :"Menampilkan Fitur Menu Anime",
                              "rowId": `${prefix}animemenu`
                           },
                           {                         
                              "title": "[🎮]Game Menu",
                              "description" :"Menampilkan Fitur Menu Game",
                              "rowId": `${prefix}gamemenu`
                           },
                           {                         
                              "title": "[👳]Islam Menu",
                              "description" :"Menampilkan Fitur Menu Islam",
                              "rowId": `${prefix}islammenu`
                           },
                           {                         
                              "title": "[🦊]Hewan Menu",
                              "description" :"Menampilkan Fitur Menu Hewan",
                              "rowId": `${prefix}hewanmenu`
                           },
                           {                         
                              "title": "[🈵]Hentai Menu",
                              "description" :"Menampilkan Fitur Menu Hentai",
                              "rowId": `${prefix}hentaimenu`
                           },
                           {                         
                              "title": "[📥]Download Menu",
                              "description" :"Menampilkan Fitur Menu Download",
                              "rowId": `${prefix}downloadmenu`
                           },
                           {                         
                              "title": "[👩‍💻]Owner Menu",
                              "description" :"Menampilkan Fitur Menu Owner",
                              "rowId": `${prefix}ownermenu`
                           },
                           {                         
                              "title": "[🎩]Ocr Menu",
                              "description" :"Menampilkan Fitur Menu OCR",
                              "rowId": `${prefix}ocrmenu`
                           },
                           {                         
                              "title": "[🗿]Sticker Menu",
                              "description" :"Menampilkan Fitur Menu Sticker",
                              "rowId": `${prefix}stickermenu`
                           },
                           {                         
                              "title": "[#️⃣]Kode Menu",
                              "description" :"Menampilkan Fitur Menu Kode",
                              "rowId": `${prefix}kodemenu`
                           },                           
                           {                         
                              "title": "[🕹️]Mode Menu",
                              "description" :"Menampilkan Fitur Menu Mode",
                              "rowId": `${prefix}modemenu`
                           },                           
                        ]
                     }],
 listType: 1
}
Ramdani.sendMessage(from, listMsg, MessageType.listMessage, {contextInfo: { mentionedJid: [sender]},quoted:fhidetag})
break
case 'store menu':
case 'storemenu':
case 'sm':
if (isBanned) return reply(mess.banned)
 listMsg = {
 buttonText: 'Click here',
 footerText: '© Creator By Yanz Official',
 description: `Hai kak @${sender.split('@')[0]}, Silahkan pilih Command nya disini`,
 sections: [
                     {
                      "title": `Jangan Lupa Donasi Tod`,
 rows: [
                           {
                        "title": "TOP UP GAME",
                       "description" :"Menampilkan Fitur Menu Top Up Game",
                       "rowId": `${prefix}topupgame`
                           },
                           {
                        "title": "TOP UP SALDO",
                       "description" :"Menampilkan Fitur Menu Top Up Saldo",
                       "rowId": `${prefix}topupsaldo`
                           },
                           {                         
                              "title": "SEWA BOT",
                              "description" :"Menampilkan Fitur Menu Sewa Bot",
                              "rowId": `${prefix}sewabot`
                          },
                          {
                        "title": "BELI PREMIUM",
                       "description" :"Menampilkan Fitur List Beli Premium",
                       "rowId": `${prefix}buypremium`
                           },
                           {                         
                              "title": "BELI SCRIPT",
                              "description" :"Menampilkan Fitur List Menu Beli Script Bot",
                              "rowId": `${prefix}buysc`
                           },
                           {
                        "title": "Donasi",
                       "description" :"Menampilkan Fitur List Menu Donasi",
                       "rowId": `${prefix}donasi`
                           },                           
                        ]
                     }],
 listType: 1
}
Ramdani.sendMessage(from, listMsg, MessageType.listMessage, {contextInfo: { mentionedJid: [sender]},quoted:fhidetag})
break
case 'top up game':
case 'topupgame':
if (isBanned) return reply(mess.banned)
 listMsg = {
 buttonText: 'Click here',
 footerText: '© Creator By Yanz Official',
 description: `Hai kak @${sender.split('@')[0]}, Silahkan pilih Game nya disini`,
 sections: [
                     {
                      "title": `Jangan Lupa Donasi Tod`,
 rows: [
                           {
                        "title": "MOBILE LEGENDS",
                       "description" :"Menampilkan Fitur List Menu Top Up Mobile Legends",
                       "rowId": `${prefix}topupml`
                           },
                           {                         
                              "title": "FREE FIRE",
                              "description" :"Menampilkan Fitur List Menu Top Up Free Fire (game bocil x burik awokawok)",
                              "rowId": `${prefix}topupff`
                          },
                          {
                        "title": "PUBG MOBILE",
                       "description" :"Menampilkan Fitur List Menu Top Up Pubg (papbiji)",
                       "rowId": `${prefix}topuppubg`
                           },
                           {                         
                              "title": "POINT BLANK",
                              "description" :"Menampilkan Fitur List Menu Top Up Point blank",
                              "rowId": `${prefix}topuppb`
                           },                                                      
                        ]
                     }],
 listType: 1
}
Ramdani.sendMessage(from, listMsg, MessageType.listMessage, {contextInfo: { mentionedJid: [sender]},quoted:fhidetag})
break
case 'top up saldo':
case 'topupsaldo':
if (isBanned) return reply(mess.banned)
 listMsg = {
 buttonText: 'Click here',
 footerText: '© Creator By Yanz Official',
 description: `Hai kak @${sender.split('@')[0]}, Silahkan pilih Aplikasi nya disini`,
 sections: [
                     {
                      "title": `Jangan Lupa Donasi Tod`,
 rows: [
                           {
                        "title": "GOPAY",
                       "description" :"Menampilkan Fitur List Menu Top Up Go-Pay",
                       "rowId": `${prefix}topupgopay`
                           },
                           {                         
                              "title": "DANA",
                              "description" :"Menampilkan Fitur List Menu Top Up Dana",
                              "rowId": `${prefix}topupdana`
                          },
                          {
                        "title": "OVO",
                       "description" :"Menampilkan Fitur List Menu Top Up Ovo",
                       "rowId": `${prefix}topupovo`
                           },
                           {                         
                              "title": "PULSA",
                              "description" : "Menampilkan List Menu Top Up Pulsa",
                              "rowId": `${prefix}topuppulsa`
                           },                                                      
                        ]
                     }],
 listType: 1
}
Ramdani.sendMessage(from, listMsg, MessageType.listMessage, {contextInfo: { mentionedJid: [sender]},quoted:fhidetag})
break
//CASEE NYAA BWANGG
case 'allmenu':
reply(`*hallo kak👋 ${pushname} ${ucapanWaktu}*
notes = Jangan spam ya kak, kasih jeda 5 detik agar bot tidak delay, okeh kak?
Bot ini masih baru ngab, banyak fitur2 yg error kek nya 🗿 kalo mau gak error, bikin sendiri aja!!!




*⌜ Grup Menu ⌟* 
• ${prefix}welcome <enable/disable>
• ${prefix}antilink <enable/disable>
• ${prefix}group <enable/disable>
• ${prefix}simi <enable/disable>
• ${prefix}kick <@user>
• ${prefix}kickall
• ${prefix}hedsot <@user>
• ${prefix}reportbug
• ${prefix}request
• ${prefix}here
• ${prefix}setdesk
• ${prefix}setnamegc
• ${prefix}setppgrup
• ${prefix}promote
• ${prefix}demote
• ${prefix}wame
• ${prefix}notif

*⌜ Asupan Menu ⌟* 
• ${prefix}asupanbunga
• ${prefix}asupanayu
• ${prefix}asupancaca
• ${prefix}asupangeayubi
• ${prefix}asupanaura

*⌜ Maker Menu ⌟* 
• ${prefix}blackpink <text>
• ${prefix}pipe <text>
• ${prefix}heloween <text>
• ${prefix}heloween2 <text>
• ${prefix}horor <text>
• ${prefix}nulis <text>
• ${prefix}sirkuit <text>
• ${prefix}discovery <text>
• ${prefix}fiction <text>
• ${prefix}8bit <text>
• ${prefix}demon <text>
• ${prefix}transformer <text>
• ${prefix}berry <text>
• ${prefix}leyered <text>
• ${prefix}thunder <text>
• ${prefix}magma <text>
• ${prefix}stone <text>
• ${prefix}neon3 <text>
• ${prefix}glitch <text>
• ${prefix}glitch2 <text>
• ${prefix}broken <text>
• ${prefix}nulis2 <text>
• ${prefix}gradient <text>
• ${prefix}glossy <text>
• ${prefix}watercolor <text>
• ${prefix}multicolor <text>
• ${prefix}neondevil <text>
• ${prefix}underwater <text>
• ${prefix}bear <text>

*⌜ Game Menu ⌟* 
• ${prefix}family100
• ${prefix}tebakgambar
• ${prefix}caklontong
• ${prefix}tebakbendera

*⌜ Anime Menu ⌟* 
• ${prefix}ppcouple
• ${prefix}uniform
• ${prefix}cuckold
• ${prefix}zettairyouiki
• ${prefix}sfwneko
• ${prefix}sao
• ${prefix}cosplay
• ${prefix}milf
• ${prefix}loli
• ${prefix}lovelive
• ${prefix}hsdxd
• ${prefix}husbu
• ${prefix}wallml
• ${prefix}waifu

*⌜ Hewan Menu ⌟* 
• ${prefix}fox
• ${prefix}dog
• ${prefix}cat
• ${prefix}panda
• ${prefix}panda1
• ${prefix}bird
• ${prefix}koala

*⌜ Hentai Menu ⌟* 
• ${prefix}art
• ${prefix}bts
• ${prefix}exo
• ${prefix}elf
• ${prefix}loli
• ${prefix}neko
• ${prefix}waifu
• ${prefix}shota
• ${prefix}husbu
• ${prefix}sagiri
• ${prefix}shinobu
• ${prefix}megumin
• ${prefix}wallnime
• ${prefix}chiisaihentai
• ${prefix}trap
• ${prefix}blowjob
• ${prefix}yaoi
• ${prefix}ecchi
• ${prefix}hentai
• ${prefix}ahegao
• ${prefix}hololewd
• ${prefix}sideoppai
• ${prefix}animefeets
• ${prefix}animebooty
• ${prefix}animethighss
• ${prefix}hentaiparadise
• ${prefix}animearmpits
• ${prefix}hentaifemdom
• ${prefix}lewdanimegirls
• ${prefix}biganimetiddies
• ${prefix}animebellybutton
• ${prefix}hentai4everyone
• ${prefix}bj
• ${prefix}ero
• ${prefix}cum
• ${prefix}feet
• ${prefix}yuri
• ${prefix}trap
• ${prefix}lewd
• ${prefix}feed
• ${prefix}eron
• ${prefix}solo
• ${prefix}gasm
• ${prefix}poke
• ${prefix}anal
• ${prefix}holo
• ${prefix}tits
• ${prefix}kuni
• ${prefix}kiss
• ${prefix}erok
• ${prefix}smug
• ${prefix}baka
• ${prefix}solog
• ${prefix}feetg
• ${prefix}lewdk
• ${prefix}waifu
• ${prefix}pussy
• ${prefix}femdom
• ${prefix}cuddle
• ${prefix}hentai
• ${prefix}eroyuri
• ${prefix}cum_jpg
• ${prefix}blowjob
• ${prefix}erofeet
• ${prefix}holoero
• ${prefix}classic
• ${prefix}erokemo
• ${prefix}fox_girl
• ${prefix}futanari
• ${prefix}lewdkemo
• ${prefix}wallpaper
• ${prefix}pussy_jpg
• ${prefix}kemonomimi
• ${prefix}nsfw_avatar
• ${prefix}ngif
• ${prefix}nsfw_neko_gif
• ${prefix}random_hentai_gif

*⌜ Islam Menu ⌟* 
• ${prefix}listsurah
• ${prefix}asmaulhusna
• ${prefix}alquran 
• ${prefix}alquran 
• ${prefix}alquran 
• ${prefix}alquranaudio 
• ${prefix}alquranaudio 
• ${prefix}kisahnabi 
• ${prefix}jadwalsholat 

*⌜ Download Menu ⌟* 
• ${prefix}play <judul lagu>
• ${prefix}ytmp3 <judul/link>
• ${prefix}ytmp4 <judul/link>
• ${prefix}shortlink <link>
• ${prefix}mediafire <link>
• ${prefix}playstore <nama apk>
• ${prefix}appsstore <nama apl>
• ${prefix}y2mate <link>
• ${prefix}tiktok <judul>
• ${prefix}tiktokmusic <link>
• ${prefix}tiktoknowm <link>
• ${prefix}tiktokwm <link>
• ${prefix}igvideo <link>
• ${prefix}igfoto <link>
• ${prefix}ktp <isi dengan lengkap>
• ${prefix}pinterest <text>
• ${prefix}ssweb <link>
• ${prefix}lirik <text>
• ${prefix}herolist <text>
• ${prefix}herodetail <nama hero>

*⌜ Serti Menu ⌟* 
• ${prefix}serti1 <text>
• ${prefix}serti2 <text>
• ${prefix}serti3 <text>
• ${prefix}serti4 <text>
• ${prefix}serti5 <text>
• ${prefix}serti6 <text>
• ${prefix}serti7 <text>
• ${prefix}serti8 <text>
• ${prefix}serti9 <text>
• ${prefix}serti10 <text>

*⌜ Ocr Menu ⌟* 
• ${prefix}namaninja
• ${prefix}pantun
• ${prefix}katasindiran
• ${prefix}katailham
• ${prefix}tongue
• ${prefix}ssweb
• ${prefix}nickepep

*⌜ Sticker Menu ⌟* 
• ${prefix}sticker <reply image>
• ${prefix}ttp <text>
• ${prefix}attp <text>
• ${prefix}attp2 <text>
• ${prefix}attp3 <text>
• ${prefix}attp4 <text>
• ${prefix}attp5 <text>
• ${prefix}amongus <text>
• ${prefix}patrick <text>
• ${prefix}toimg <reply sticker>

*⌜ Kode Menu ⌟*
• ${prefix}tts <text>
• ${prefix}kodenegara <text>
• ${prefix}kodebahasa <text>

*⌜ Owner Menu ⌟* 
• ${prefix}broadcast <text>
• ${prefix}broadcast2 <text>
• ${prefix}broadcastvideo <text>
• ${prefix}bcvideo <text>
• ${prefix}bc <text>
• ${prefix}bc2 <text>
• ${prefix}bc3 <text>
• ${prefix}bc4 <text>
• ${prefix}bc5 <text>
• ${prefix}delete <reply message>
• ${prefix}ban <target>
• ${prefix}unban <target>
• ${prefix}block <user>
• ${prefix}unblock <user>
• ${prefix}settppbot <image>
• ${prefix}leaveall (keluar semua grup)
• ${prefix}join <link grup>
• ${prefix}join2 <link grup>
• ${prefix}clearall
• ${prefix}restart
• ${prefix}addcmd
• ${prefix}delcmd
• ${prefix}listcmd
• ${prefix}exif`)
break
  case 'allmenu2':
					Ramdani.sendMessage(from, allmenu(prefix, pushname, ucapanWaktu), text)
					break              
                case 'grupbot':
                case 'groupbot':
                case 'gcbot':
                Ramdani.sendMessage(from, grupbot(prefix), text)
		        break
                case 'bebantot':
                reply(`*JANGAN GITU LU*\n*SESAMA BEBAN HARUS SALING*\n*HINA*`)
                break
                case 'berkat':
                reply(`*ANJG CUMA MAU BERKAT NYA:V*`)
                break
                case 'donasi2':
				case 'donate2':
					Ramdani.sendMessage(from, donasi(prefix, namabot, namaowner), text)
					break
					case 'iklan':
					Ramdani.sendMessage(from, iklan(prefix, namabot, namaowner), text)
					break
					case 'rules':
					Ramdani.sendMessage(from, rules(prefix, namabot, namaowner), text)
					break
					case 'tnc':
					Ramdani.sendMessage(from, tnc(prefix, namabot, namaowner), text)
					break
				case 'bingungcok':
					Ramdani.sendMessage(from, cara(prefix, namabot, namaowner), text)
					break
case 'donasi':
case 'donate':
if (isBanned) return reply(mess.banned)
reply(`HALLO KAK, MAU DONASI?
• *PAYMENT*
*Gopay:* ${gopay}
*Dana:* ${dana}
*Ovo:* ${ovo}
*Pulsa:* ${pulsa}
*Qris:* ${urlqris}
*Saweria:* ${saweria}
*Linktree:* ${linktree}`)
break
case 'sewabot':
if (isBanned) return reply(mess.banned)
reply(`━━━━━『 *LIST SEWA BOT* 』━━━━━

❏ PERHARI : 1 HARI 2K, 5 HARI 10K 
❏ PERMINGGU : 1MIN. 14K, 2MIN. 28K, 3MIN. 60K,
❏ PERBULAN : 1B. 30K, 2B. 70K, 3B. 140K,
❏ PERTAHUN : 1THN. 350K, 2THN. 700K,
❏ PERMANEN : TIMDAK TERSEDIA!
*minat chat owner*`)
break
case 'buypremium':
if (isBanned) return reply(mess.banned)
reply(`━━━━━『 *LIST PREMIUM* 』━━━━━

❏ PERHARI : 2H. 1K, 5H. 4K, 7H 6K,
❏ PERMINGGU : 1MIN. 6K, 2MIN. 10K, 3MIN. 15K,
❏ PERBULAN : 1B. 18K, 2B. 28K, 3B. 38K,
❏ PERTAHUN : 1THN. 100K
❏ PERMANEN : 150K
*minat chat owner*`)
break
//buysc
case 'buysc':
reply(`_*silahkan hubungi owner jika ingin membeli script bot*_\n_*ketik ${prefix}owner untuk mendapatkan nomor owner*_`)
break
case 'topupml':
reply(`*💎DIAMOND ML💎*
➖➖➖➖➖➖➖➖➖➖➖

39    💎= Rp.9.000
65    💎= Rp.14.500
92    💎= Rp.20.000
133  💎= Rp.29.000
266  💎= Rp.58.000
400  💎= Rp.86.000
534  💎= Rp.115.000
670  💎= Rp.144.000
709  💎= Rp.153.000
735  💎= Rp.158.500
803  💎= Rp.170.000
936  💎= Rp.200.000
1070💎=Rp.229.000
1342💎=Rp.285.000
1434💎=Rp.305.000
1742💎=Rp.370.000
2700💎=Rp.570.000
 
➖➖➖➖➖➖➖➖➖➖➖
 *_© Creator By Yanz Official_*    
➖➖➖➖➖➖➖➖➖➖➖`)
break
case 'topupff':
reply(`*💎DIAMOND FREE FIRE💎*
➖➖➖➖➖➖➖➖➖➖➖

20    💎 3.000
50    💎 7.000
70    💎 9.500
100  💎 13.500
140  💎 18.500
210  💎 27.500
280  💎 37.000
355  💎 46.000
425  💎 55.000
500  💎 65.000
720  💎 92.500
860  💎 111.000
1000💎 129.500
1075💎 138.000
1440💎 185.000
2000💎 250.000
2720💎 342.500
3000💎 380.000
4000💎 500.000
MM : 28.000
MB  : 140.000
 
➖➖➖➖➖➖➖➖➖➖➖
 *_©Creator by Yanz Official_*    
➖➖➖➖➖➖➖➖➖➖➖`)
break
case 'topuppubg':
reply(`➖➖➖➖➖➖➖➖➖➖➖

- 🎟️60 = Rp14.000
- 🎟️120 = Rp28.000
- 🎟️240 = Rp56.000
 
➖➖➖➖➖➖➖➖➖➖➖
 *_©Creator By Yanz Official_*    
➖➖➖➖➖➖➖➖➖➖➖`)
break
case 'topupb':
reply(`*🎟️POINT BLANK🎟️*
➖➖➖➖➖➖➖➖➖➖➖

_tidak tersedia, ke Indomaret Sono_
 
➖➖➖➖➖➖➖➖➖➖➖
 *_© Creator By Yanz Official_*    
➖➖➖➖➖➖➖➖➖➖➖`)
break
case 'topupgopay':
reply(`_chat owner_`)
break
case 'topupdana':
reply(`_chat owner_`)
break
case 'topupovo':
reply(`_chat owner_`)
break
case 'topuppulsa':
reply(`_beli di warung sono_`)
break
//JADIBOT
case 'jadibot':
case 'jadibotwa':
case 'carajadibot':
reply(`*Jika ingin menjadi bot silahkan kunjungi channel YouTube Yanz Official*\n*link* : https://youtube.com/channel/UCB157jomCne961WzYHpG4gg`)
break
//SOSMET
//YOUTUBE
case 'youtube':
case 'ytb':
reply(`*nih channel youtube creator, jan lupa subscribe ya*\nhttps://youtube.com/channel/UCB157jomCne961WzYHpG4gg`)
break
//INSTAGRAM
case 'intagram':
case 'ig':
case 'ige':
reply(`*nih Instagram creator, jan lupa follow ya*\nhttps://www.instagram.com/muhammadramdani196453`)
break
//OWNER/CREATOR
//OWNER
case 'owner':
            case 'ownerbot': 
const vcard = 'BEGIN:VCARD\n'  
            + 'VERSION:3.0\n'  
            + `FN: ${namaowner}\n`  
            + `ORG:${namabot};\n` 
            + `TEL;type=CELL;type=VOICE;waid=${nomorowner}:+${nomorowner}\n`  
            + 'END:VCARD'  
  Ramdani.sendMessage(from, {displayname: "Jeff", vcard: vcard}, MessageType.contact, { quoted: mek})
titid = 'Hallo kak, itu owner ku, jangan di ganggu ya\nbtw mau tau soal apa tentang owner ku?'
           sendButMessage(from, titid, `${namabot}\n${Tanggal}`, [
          {buttonId: `${prefix}ytb`, buttonText: { displayText: `YOUTUBE`, }, type: 1, },
          {buttonId: `${prefix}ig`, buttonText: { displayText: `INSTAGRAM`, }, type: 1, },
]); 
                 break; 
case 'pembuatbot':
            case 'creator':
            case 'creatorbot':
            case 'powered':
const vcard2 = 'BEGIN:VCARD2\n'  
            + 'VERSION:3.0\n'  
            + `FN: Ramdani Official\n`  
            + `ORG:sibuk;\n` 
            + `TEL;type=CELL;type=VOICE;waid=6289512545999:+6289512545999\n`  
            + 'END:VCARD2'  
  Ramdani.sendMessage(from, {displayname: "Jeff", vcard2: vcard2}, MessageType.contact, { quoted: mek})
titit = 'Hallo kak, itu pembuat ini, jangan di ganggu ya\nbtw mau tau soal apa tentang pembuat bot?'
           sendButMessage(from, titit, `${namabot}\n${Tanggal}`, [
          {buttonId: `${prefix}ytb`, buttonText: { displayText: `YOUTUBE`, }, type: 1, },
          {buttonId: `${prefix}ig`, buttonText: { displayText: `INSTAGRAM`, }, type: 1, },
]); 
                 break
//THANKS TO
case 'thanksto':
case 'tqto':
case 'tqtq':
reply(`• *BIG THANKS TO*
• RAMDANI OFFICIAL (ME)
• ARUL (MY GURU)
• MHANKBARBAR (MASTAH)
• APRILIA
• ZEEONE OFC
• DIKA ARDNT
• RIMURUBOTZ
• KAHFZXZY
• LEXXY OFFICIAL
• HERMAN CHANNEL
• ABIL BOT
• KURR XD OFFICIAL
• DIKA XD
• SIEGRIN
• KANNABOT
• YANZ BOT`)
break
//FITUR NYAAH BANGGG
case 'grupmenu':
if (isBanned) return reply(mess.banned)
reply(`*⌜ Grup Menu ⌟* 
• ${prefix}welcome <enable/disable>
• ${prefix}antilink <enable/disable>
• ${prefix}group <enable/disable>
• ${prefix}simi <enable/disable>
• ${prefix}kick <@user>
• ${prefix}kickall
• ${prefix}hedsot <@user>
• ${prefix}reportbug
• ${prefix}request
• ${prefix}here
• ${prefix}setdesk
• ${prefix}setnamegc
• ${prefix}setppgrup
• ${prefix}promote
• ${prefix}demote
• ${prefix}wame
• ${prefix}notif`)
break
case 'asupanmenu':
if (isBanned) return reply(mess.banned)
reply(`*⌜ Asupan Menu ⌟* 
• ${prefix}asupanbunga
• ${prefix}asupanayu
• ${prefix}asupancaca
• ${prefix}asupangeayubi
• ${prefix}asupanaura`)
break
case 'makermenu':
if (isBanned) return reply(mess.banned)
reply(`*⌜ Maker Menu ⌟* 
• ${prefix}blackpink <text>
• ${prefix}pipe <text>
• ${prefix}heloween <text>
• ${prefix}heloween2 <text>
• ${prefix}horor <text>
• ${prefix}nulis <text>
• ${prefix}sirkuit <text>
• ${prefix}discovery <text>
• ${prefix}fiction <text>
• ${prefix}8bit <text>
• ${prefix}demon <text>
• ${prefix}transformer <text>
• ${prefix}berry <text>
• ${prefix}leyered <text>
• ${prefix}thunder <text>
• ${prefix}magma <text>
• ${prefix}stone <text>
• ${prefix}neon3 <text>
• ${prefix}glitch <text>
• ${prefix}glitch2 <text>
• ${prefix}broken <text>
• ${prefix}nulis2 <text>
• ${prefix}gradient <text>
• ${prefix}glossy <text>
• ${prefix}watercolor <text>
• ${prefix}multicolor <text>
• ${prefix}neondevil <text>
• ${prefix}underwater <text>
• ${prefix}bear <text>`)
break
case 'gamemenu':
if (isBanned) return reply(mess.banned)
reply(`*⌜ Game Menu ⌟* 
• ${prefix}family100
• ${prefix}tebakgambar
• ${prefix}caklontong
• ${prefix}tebakbendera`)
break
case 'animemenu':
if (isBanned) return reply(mess.banned)
reply(`*⌜ Anime Menu ⌟* 
• ${prefix}ppcouple
• ${prefix}uniform
• ${prefix}cuckold
• ${prefix}zettairyouiki
• ${prefix}sfwneko
• ${prefix}sao
• ${prefix}cosplay
• ${prefix}milf
• ${prefix}loli
• ${prefix}lovelive
• ${prefix}hsdxd
• ${prefix}husbu
• ${prefix}wallml
• ${prefix}waifu`)
break
case 'hewanmenu':
if (isBanned) return reply(mess.banned)
reply(`*⌜ Hewan Menu ⌟* 
• ${prefix}fox
• ${prefix}dog
• ${prefix}cat
• ${prefix}panda
• ${prefix}panda1
• ${prefix}bird
• ${prefix}koala`)
break
case 'hentaimenu':
if (isBanned) return reply(mess.banned)
reply(`*⌜ Hentai Menu ⌟* 
• ${prefix}art
• ${prefix}bts
• ${prefix}exo
• ${prefix}elf
• ${prefix}loli
• ${prefix}neko
• ${prefix}waifu
• ${prefix}shota
• ${prefix}husbu
• ${prefix}sagiri
• ${prefix}shinobu
• ${prefix}megumin
• ${prefix}wallnime
• ${prefix}chiisaihentai
• ${prefix}trap
• ${prefix}blowjob
• ${prefix}yaoi
• ${prefix}ecchi
• ${prefix}hentai
• ${prefix}ahegao
• ${prefix}hololewd
• ${prefix}sideoppai
• ${prefix}animefeets
• ${prefix}animebooty
• ${prefix}animethighss
• ${prefix}hentaiparadise
• ${prefix}animearmpits
• ${prefix}hentaifemdom
• ${prefix}lewdanimegirls
• ${prefix}biganimetiddies
• ${prefix}animebellybutton
• ${prefix}hentai4everyone
• ${prefix}bj
• ${prefix}ero
• ${prefix}cum
• ${prefix}feet
• ${prefix}yuri
• ${prefix}trap
• ${prefix}lewd
• ${prefix}feed
• ${prefix}eron
• ${prefix}solo
• ${prefix}gasm
• ${prefix}poke
• ${prefix}anal
• ${prefix}holo
• ${prefix}tits
• ${prefix}kuni
• ${prefix}kiss
• ${prefix}erok
• ${prefix}smug
• ${prefix}baka
• ${prefix}solog
• ${prefix}feetg
• ${prefix}lewdk
• ${prefix}waifu
• ${prefix}pussy
• ${prefix}femdom
• ${prefix}cuddle
• ${prefix}hentai
• ${prefix}eroyuri
• ${prefix}cum_jpg
• ${prefix}blowjob
• ${prefix}erofeet
• ${prefix}holoero
• ${prefix}classic
• ${prefix}erokemo
• ${prefix}fox_girl
• ${prefix}futanari
• ${prefix}lewdkemo
• ${prefix}wallpaper
• ${prefix}pussy_jpg
• ${prefix}kemonomimi
• ${prefix}nsfw_avatar
• ${prefix}ngif
• ${prefix}nsfw_neko_gif
• ${prefix}random_hentai_gif`)
break
case 'islammenu':
if (isBanned) return reply(mess.banned)
reply(`*⌜ Islam Menu ⌟* 
• ${prefix}listsurah
• ${prefix}asmaulhusna
• ${prefix}alquran 
• ${prefix}alquran 
• ${prefix}alquran 
• ${prefix}alquranaudio 
• ${prefix}alquranaudio 
• ${prefix}kisahnabi 
• ${prefix}jadwalsholat`)
break
case 'downloadmenu':
if (isBanned) return reply(mess.banned)
reply(`*⌜ Download Menu ⌟* 
• ${prefix}play <judul lagu>
• ${prefix}ytmp3 <judul/link>
• ${prefix}ytmp4 <judul/link>
• ${prefix}shortlink <link>
• ${prefix}mediafire <link>
• ${prefix}playstore <nama apk>
• ${prefix}appsstore <nama apl>
• ${prefix}y2mate <link>
• ${prefix}tiktok <judul>
• ${prefix}tiktokmusic <link>
• ${prefix}tiktoknowm <link>
• ${prefix}tiktokwm <link>
• ${prefix}igvideo <link>
• ${prefix}igfoto <link>
• ${prefix}ktp <isi dengan lengkap>
• ${prefix}pinterest <text>
• ${prefix}ssweb <link>
• ${prefix}lirik <text>
• ${prefix}herolist <text>
• ${prefix}herodetail <nama hero>`)
break
case 'sertimenu':
if (isBanned) return reply(mess.banned)
reply(`*⌜ Serti Menu ⌟* 
• ${prefix}serti1 <text>
• ${prefix}serti2 <text>
• ${prefix}serti3 <text>
• ${prefix}serti4 <text>
• ${prefix}serti5 <text>
• ${prefix}serti6 <text>
• ${prefix}serti7 <text>
• ${prefix}serti8 <text>
• ${prefix}serti9 <text>
• ${prefix}serti10 <text>`)
break
case 'ocrmenu':
if (isBanned) return reply(mess.banned)
reply(`*⌜ Ocr Menu ⌟* 
• ${prefix}namaninja
• ${prefix}pantun
• ${prefix}katasindiran
• ${prefix}katailham
• ${prefix}tongue
• ${prefix}ssweb
• ${prefix}nickepep`)
break
case 'stickermenu':
if (isBanned) return reply(mess.banned)
reply(`*⌜ Sticker Menu ⌟* 
• ${prefix}sticker <reply image>
• ${prefix}ttp <text>
• ${prefix}attp <text>
• ${prefix}attp2 <text>
• ${prefix}attp3 <text>
• ${prefix}attp4 <text>
• ${prefix}attp5 <text>
• ${prefix}amongus <text>
• ${prefix}patrick <text>
• ${prefix}toimg <reply sticker>`)
break
case 'kodemenu':
if (isBanned) return reply(mess.banned)
reply(`*⌜ Kode Menu ⌟*
• ${prefix}tts <text>
• ${prefix}kodenegara <text>
• ${prefix}kodebahasa <text>`)
break
case 'ownermenu':
if (isBanned) return reply(mess.banned)
reply(`*⌜ Owner Menu ⌟* 
• ${prefix}broadcast <text>
• ${prefix}broadcast2 <text>
• ${prefix}broadcastvideo <text>
• ${prefix}bcvideo <text>
• ${prefix}bc <text>
• ${prefix}bc2 <text>
• ${prefix}bc3 <text>
• ${prefix}bc4 <text>
• ${prefix}bc5 <text>
• ${prefix}delete <reply message>
• ${prefix}ban <target>
• ${prefix}unban <target>
• ${prefix}block <user>
• ${prefix}unblock <user>
• ${prefix}settppbot <image>
• ${prefix}leaveall (keluar semua grup)
• ${prefix}join <link grup>
• ${prefix}join2 <link grup>
• ${prefix}clearall
• ${prefix}restart
• ${prefix}addcmd
• ${prefix}delcmd
• ${prefix}listcmd
• ${prefix}exif`)
break
case 'sc':
case 'script':
if (isBanned) return reply(mess.banned)
reply(`*⌜ Script Bot ⌟* 
• SC ORI : Ramdani Official
• RECODE : Yanz Official
• LINK DOWN VIA GIT : https://github.com/Ramdaniofficial/v13
• LINK DOWN VIA YT : https://youtube.com/channel/UCB157jomCne961WzYHpG4gg`)
break
//ASUPAN MENU
case 'asupangeayubi':
             if (isBanned) return reply(mess.banned)
             if (!isPremium) return reply(mess.only.premium)
             reply(mess.wait)
             const geayubi = await getBuffer(`https://api-alphabot.herokuapp.com/api/asupan/geayubi?apikey=Alphabot`)
             buttons = [{buttonId: `${prefix}caca`,buttonText:{displayText: `➡️ NEXT`},type:1}]
             videoMsg = (await Ramdani.prepareMessageMedia(geayubi, "videoMessage", { thumbnail: geayubi, })).videoMessage
              buttonsMessage = {footerText:'KLIK NEXT UNTUK SELANJUTNYA', videoMessage: videoMsg,
              contentText:`DONE`,buttons,headerType:5}
              prep = await Ramdani.prepareMessageFromContent(from,{buttonsMessage},{quoted: fhidetag})
              Ramdani.relayWAMessage(prep)
              break
             case 'asupanaura':
             if (isBanned) return reply(mess.banned)
             if (!isPremium) return reply(mess.only.premium)
             reply(mess.wait)
             const naura = await getBuffer(`https://api-alphabot.herokuapp.com/api/asupan/aura?apikey=${AlphaBot}`)
             buttons = [{buttonId: `${prefix}caca`,buttonText:{displayText: `➡️ NEXT`},type:1}]
             videoMsg = (await Ramdani.prepareMessageMedia(naura, "videoMessage", { thumbnail: naura, })).videoMessage
              buttonsMessage = {footerText:'KLIK NEXT UNTUK SELANJUTNYA', videoMessage: videoMsg,
              contentText:`DONE`,buttons,headerType:5}
              prep = await Ramdani.prepareMessageFromContent(from,{buttonsMessage},{quoted: fhidetag})
              Ramdani.relayWAMessage(prep)
              break
            case 'asupanbunga':
            if (isBanned) return reply(mess.banned)
            if (!isPremium) return reply(mess.only.premium)
            reply(mess.wait)
            const bunga = await getBuffer(`https://api-alphabot.herokuapp.com/api/asupan/bunga?apikey=${AlphaBot}`)
             buttons = [{buttonId: `${prefix}caca`,buttonText:{displayText: `➡️ NEXT`},type:1}]
              videoMsg = (await Ramdani.prepareMessageMedia(bunga, "videoMessage", { thumbnail: bunga, })).videoMessage
              buttonsMessage = {footerText:'KLIK NEXT UNTUK SELANJUTNYA', videoMessage: videoMsg,
              contentText:`DONE`,buttons,headerType:5}
              prep = await Ramdani.prepareMessageFromContent(from,{buttonsMessage},{quoted: fhidetag})
              Ramdani.relayWAMessage(prep)
              break
            case 'asupanayu':
            if (isBanned) return reply(mess.banned)
            if (!isPremium) return reply(mess.only.premium)
            reply(mess.wait)
            const ayu = await getBuffer(`https://api-alphabot.herokuapp.com/api/asupan/ayu?apikey=${AlphaBot}`)
             buttons = [{buttonId: `${prefix}caca`,buttonText:{displayText: `➡️ NEXT`},type:1}]
             videoMsg = (await Ramdani.prepareMessageMedia(ayu, "videoMessage", { thumbnail: ayu, })).videoMessage
              buttonsMessage = {footerText:'KLIK NEXT UNTUK SELANJUTNYA', videoMessage: videoMsg,
              contentText:`DONE`,buttons,headerType:5}
              prep = await Ramdani.prepareMessageFromContent(from,{buttonsMessage},{quoted: fhidetag})
              Ramdani.relayWAMessage(prep)
              break
             case 'asupancaca':
             if (isBanned) return reply(mess.banned)
             if (!isPremium) return reply(mess.only.premium)
             reply(mess.wait)
             const caca = await getBuffer(`https://api-alphabot.herokuapp.com/api/asupan/delvira?apikey=${AlphaBot}`)
             buttons = [{buttonId: `${prefix}caca`,buttonText:{displayText: `➡️ NEXT`},type:1}]
              videoMsg = (await Ramdani.prepareMessageMedia(caca, "videoMessage", { thumbnail: caca, })).videoMessage
              buttonsMessage = {footerText:'KLIK NEXT UNTUK SELANJUTNYA', videoMessage: videoMsg,
              contentText:`DONE`,buttons,headerType:5}
              prep = await Ramdani.prepareMessageFromContent(from,{buttonsMessage},{quoted: fhidetag})
              Ramdani.relayWAMessage(prep)
              break
//TEXT PRO MENU
case 'blackpink':
if (isBanned) return reply(mess.banned)
if (args.length < 1) return reply(`Nama yang mau di tulis?\nContoh: ${prefix + command} RamdaniCode`)
reply(mess.wait)
query = args.join (" ")
bf = await getBuffer(`https://api-alphabot.herokuapp.com/api/textpro/blackpink?text=${query}&apikey=${AlphaBot}`)
Ramdani.sendMessage(from, bf, image, { quoted: froxx, caption: 'Logo maker' })
break
case 'pipe':
if (isBanned) return reply(mess.banned)
if (args.length < 1) return reply(`Nama yang mau di tulis?\nContoh: ${prefix + command} RamdaniCode`)
reply(mess.wait)
query = args.join (" ")
bf = await getBuffer(`https://api-alphabot.herokuapp.com/api/textpro/water_pipe?text=${query}&apikey=${AlphaBot}`)
Ramdani.sendMessage(from, bf, image, { quoted: froxx, caption: 'Logo maker' })
break
case 'heloween':
if (isBanned) return reply(mess.banned)
if (args.length < 1) return reply(`Nama yang mau di tulis?\nContoh: ${prefix + command} RamdaniCode`)
reply(mess.wait)
query = args.join (" ")
bf = await getBuffer(`https://api-alphabot.herokuapp.com/api/textpro/halloween?text=${query}&apikey=${AlphaBot}`)
Ramdani.sendMessage(from, bf, image, { quoted: froxx, caption: 'Logo maker' })
break
case 'heloween2':
if (isBanned) return reply(mess.banned)
if (args.length < 1) return reply(`Nama yang mau di tulis?\nContoh: ${prefix + command} RamdaniCode`)
reply(mess.wait)
query = args.join (" ")
bf = await getBuffer(`https://api-alphabot.herokuapp.com/api/textpro/halloween2?text=${query}&text2=${query}&apikey=${AlphaBot}`)
Ramdani.sendMessage(from, bf, image, { quoted: froxx, caption: 'Logo maker' })
break
case 'horor':
if (isBanned) return reply(mess.banned)
if (args.length < 1) return reply(`Nama yang mau di tulis?\nContoh: ${prefix + command} RamdaniCode`)
reply(mess.wait)
query = args.join (" ")
bf = await getBuffer(`https://api-alphabot.herokuapp.com/api/textpro/horror?text=${query}&text2=${query}&apikey=${AlphaBot}`)
Ramdani.sendMessage(from, bf, image, { quoted: froxx, caption: 'Logo maker' })
break
case 'nulis':
if (isBanned) return reply(mess.banned)
if (args.length < 1) return reply(`Nama yang mau di tulis?\nContoh: ${prefix + command} RamdaniCode`)
reply(mess.wait)
query = args.join (" ")
bf = await getBuffer(`https://api-alphabot.herokuapp.com/api/textpro/sketch?text=${query}&apikey=${AlphaBot}`)
Ramdani.sendMessage(from, bf, image, { quoted: froxx, caption: 'Logo maker' })
break
case 'sirkuit':
if (isBanned) return reply(mess.banned)
if (args.length < 1) return reply(`Nama yang mau di tulis?\nContoh: ${prefix + command} RamdaniCode`)
reply(mess.wait)
query = args.join (" ")
bf = await getBuffer(`https://api-alphabot.herokuapp.com/api/textpro/sircuit?text=${query}&apikey=${AlphaBot}`)
Ramdani.sendMessage(from, bf, image, { quoted: froxx, caption: 'Logo maker' })
break
case 'discovery':
if (isBanned) return reply(mess.banned)
if (args.length < 1) return reply(`Nama yang mau di tulis?\nContoh: ${prefix + command} RamdaniCode`)
reply(mess.wait)
query = args.join (" ")
bf = await getBuffer(`https://api-alphabot.herokuapp.com/api/textpro/discovery?text=${query}&apikey=${AlphaBot}`)
Ramdani.sendMessage(from, bf, image, { quoted: froxx, caption: 'Logo maker' })
break
case 'fiction':
if (isBanned) return reply(mess.banned)
if (args.length < 1) return reply(`Nama yang mau di tulis?\nContoh: ${prefix + command} RamdaniCode`)
reply(mess.wait)
query = args.join (" ")
bf = await getBuffer(`https://api-alphabot.herokuapp.com/api/textpro/fiction?text=${query}&apikey=${AlphaBot}`)
Ramdani.sendMessage(from, bf, image, { quoted: froxx, caption: 'Logo maker' })
break
case '8bit':
if (isBanned) return reply(mess.banned)
if (args.length < 1) return reply(`Nama yang mau di tulis?\nContoh: ${prefix + command} RamdaniCode`)
reply(mess.wait)
query = args.join (" ")
bf = await getBuffer(`https://api-alphabot.herokuapp.com/api/textpro/game8bit?text=${query}&text2=${query}&apikey=${AlphaBot}`)
Ramdani.sendMessage(from, bf, image, { quoted: froxx, caption: 'Logo maker' })
break
case 'demon':
if (isBanned) return reply(mess.banned)
if (args.length < 1) return reply(`Nama yang mau di tulis?\nContoh: ${prefix + command} RamdaniCode`)
reply(mess.wait)
query = args.join (" ")
bf = await getBuffer(`https://api-alphabot.herokuapp.com/api/textpro/demon?text=${query}&apikey=${AlphaBot}`)
Ramdani.sendMessage(from, bf, image, { quoted: froxx, caption: 'Logo maker' })
break
case 'transformer':
if (isBanned) return reply(mess.banned)
if (args.length < 1) return reply(`Nama yang mau di tulis?\nContoh: ${prefix + command} RamdaniCode`)
reply(mess.wait)
query = args.join (" ")
bf = await getBuffer(`https://api-alphabot.herokuapp.com/api/textpro/transformer?text=${query}&apikey=${AlphaBot}`)
Ramdani.sendMessage(from, bf, image, { quoted: froxx, caption: 'Logo maker' })
break
case 'berry':
if (isBanned) return reply(mess.banned)
if (args.length < 1) return reply(`Nama yang mau di tulis?\nContoh: ${prefix + command} RamdaniCode`)
reply(mess.wait)
query = args.join (" ")
bf = await getBuffer(`https://api-alphabot.herokuapp.com/api/textpro/berry?text=${query}&apikey=${AlphaBot}`)
Ramdani.sendMessage(from, bf, image, { quoted: froxx, caption: 'Logo maker' })
break
case 'leyered':
if (isBanned) return reply(mess.banned)
if (args.length < 1) return reply(`Nama yang mau di tulis?\nContoh: ${prefix + command} RamdaniCode`)
reply(mess.wait)
query = args.join (" ")
bf = await getBuffer(`https://api-alphabot.herokuapp.com/api/textpro/layered?text=${query}&text2=${query}&apikey=${AlphaBot}`)
Ramdani.sendMessage(from, bf, image, { quoted: froxx, caption: 'Logo maker' })
break
case 'thunder':
if (isBanned) return reply(mess.banned)
if (args.length < 1) return reply(`Nama yang mau di tulis?\nContoh: ${prefix + command} RamdaniCode`)
reply(mess.wait)
query = args.join (" ")
bf = await getBuffer(`https://api-alphabot.herokuapp.com/api/textpro/thunder?text=${query}&apikey=${AlphaBot}`)
Ramdani.sendMessage(from, bf, image, { quoted: froxx, caption: 'Logo maker' })
break
case 'magma':
if (isBanned) return reply(mess.banned)
if (args.length < 1) return reply(`Nama yang mau di tulis?\nContoh: ${prefix + command} RamdaniCode`)
reply(mess.wait)
query = args.join (" ")
bf = await getBuffer(`https://api-alphabot.herokuapp.com/api/textpro/magma?text=${query}&apikey=${AlphaBot}`)
Ramdani.sendMessage(from, bf, image, { quoted: froxx, caption: 'Logo maker' })
break
case 'stone':
if (isBanned) return reply(mess.banned)
if (args.length < 1) return reply(`Nama yang mau di tulis?\nContoh: ${prefix + command} RamdaniCode`)
reply(mess.wait)
query = args.join (" ")
bf = await getBuffer(`https://api-alphabot.herokuapp.com/api/textpro/3dstone?text=${query}&apikey=${AlphaBot}`)
Ramdani.sendMessage(from, bf, image, { quoted: froxx, caption: 'Logo maker' })
break
case 'neon3':
if (isBanned) return reply(mess.banned)
if (args.length < 1) return reply(`Nama yang mau di tulis?\nContoh: ${prefix + command} RamdaniCode`)
reply(mess.wait)
query = args.join (" ")
bf = await getBuffer(`https://api-alphabot.herokuapp.com/api/textpro/neon?text=${query}&apikey=${AlphaBot}`)
Ramdani.sendMessage(from, bf, image, { quoted: froxx, caption: 'Logo maker' })
break
case 'glitch':
if (isBanned) return reply(mess.banned)
if (args.length < 1) return reply(`Nama yang mau di tulis?\nContoh: ${prefix + command} RamdaniCode`)
reply(mess.wait)
query = args.join (" ")
bf = await getBuffer(`https://api-alphabot.herokuapp.com/api/textpro/glitch?text=${query}&apikey=${AlphaBot}`)
Ramdani.sendMessage(from, bf, image, { quoted: froxx, caption: 'Logo maker' })
break
case 'glitch2':
if (isBanned) return reply(mess.banned)
if (args.length < 1) return reply(`Nama yang mau di tulis?\nContoh: ${prefix + command} RamdaniCode`)
reply(mess.wait)
query = args.join (" ")
bf = await getBuffer(`https://api-alphabot.herokuapp.com/api/textpro/glitch2?text=${query}&text2=${query}&apikey=${AlphaBot}`)
Ramdani.sendMessage(from, bf, image, { quoted: froxx, caption: 'Logo maker' })
break
case 'herrypoter':
if (isBanned) return reply(mess.banned)
if (args.length < 1) return reply(`Nama yang mau di tulis?\nContoh: ${prefix + command} RamdaniCode`)
reply(mess.wait)
query = args.join (" ")
bf = await getBuffer(`https://api-alphabot.herokuapp.com/api/textpro/harry_potter?text=${query}&apikey=${AlphaBot}`)
Ramdani.sendMessage(from, bf, image, { quoted: froxx, caption: 'Logo maker' })
break
case 'embosed':
if (isBanned) return reply(mess.banned)
if (args.length < 1) return reply(`Nama yang mau di tulis?\nContoh: ${prefix + command} RamdaniCode`)
reply(mess.wait)
query = args.join (" ")
bf = await getBuffer(`https://api-alphabot.herokuapp.com/api/textpro/embossed?text=${query}&apikey=${AlphaBot}`)
Ramdani.sendMessage(from, bf, image, { quoted: froxx, caption: 'Logo maker' })
break
case 'broken':
if (isBanned) return reply(mess.banned)
if (args.length < 1) return reply(`Nama yang mau di tulis?\nContoh: ${prefix + command} RamdaniCode`)
reply(mess.wait)
query = args.join (" ")
bf = await getBuffer(`https://api-alphabot.herokuapp.com/api/textpro/broken?text=${query}&apikey=${AlphaBot}`)
Ramdani.sendMessage(from, bf, image, { quoted: froxx, caption: 'Logo maker' })
break
case 'nulis2':
if (isBanned) return reply(mess.banned)
if (args.length < 1) return reply(`Nama yang mau di tulis?\nContoh: ${prefix + command} RamdaniCode`)
reply(mess.wait)
query = args.join (" ")
bf = await getBuffer(`https://api-alphabot.herokuapp.com/api/textpro/papercut?text=${query}&apikey=${AlphaBot}`)
Ramdani.sendMessage(from, bf, image, { quoted: froxx, caption: 'Logo maker' })
break
case 'gradient':
if (isBanned) return reply(mess.banned)
if (args.length < 1) return reply(`Nama yang mau di tulis?\nContoh: ${prefix + command} RamdaniCode`)
reply(mess.wait)
query = args.join (" ")
bf = await getBuffer(`https://api-alphabot.herokuapp.com/api/textpro/gradient?text=${query}&apikey=${AlphaBot}`)
Ramdani.sendMessage(from, bf, image, { quoted: froxx, caption: 'Logo maker' })
break
case 'glossy':
if (isBanned) return reply(mess.banned)
if (args.length < 1) return reply(`Nama yang mau di tulis?\nContoh: ${prefix + command} RamdaniCode`)
reply(mess.wait)
query = args.join (" ")
bf = await getBuffer(`https://api-alphabot.herokuapp.com/api/textpro/glossy?text=${query}&apikey=${AlphaBot}`)
Ramdani.sendMessage(from, bf, image, { quoted: froxx, caption: 'Logo maker' })
break
case 'watercolor':
if (isBanned) return reply(mess.banned)
if (args.length < 1) return reply(`Nama yang mau di tulis?\nContoh: ${prefix + command} RamdaniCode`)
reply(mess.wait)
query = args.join (" ")
bf = await getBuffer(`https://api-alphabot.herokuapp.com/api/textpro/watercolor?text=${query}&apikey=${AlphaBot}`)
Ramdani.sendMessage(from, bf, image, { quoted: froxx, caption: 'Logo maker' })
break
case 'multicolor':
if (isBanned) return reply(mess.banned)
if (args.length < 1) return reply(`Nama yang mau di tulis?\nContoh: ${prefix + command} RamdaniCode`)
reply(mess.wait)
query = args.join (" ")
bf = await getBuffer(`https://api-alphabot.herokuapp.com/api/textpro/multicolor?text=${query}&apikey=${AlphaBot}`)
Ramdani.sendMessage(from, bf, image, { quoted: froxx, caption: 'Logo maker' })
break
case 'neondevil':
if (isBanned) return reply(mess.banned)
if (args.length < 1) return reply(`Nama yang mau di tulis?\nContoh: ${prefix + command} RamdaniCode`)
reply(mess.wait)
query = args.join (" ")
bf = await getBuffer(`https://api-alphabot.herokuapp.com/api/textpro/neon_devil?text=${query}&apikey=${AlphaBot}`)
Ramdani.sendMessage(from, bf, image, { quoted: froxx, caption: 'Logo maker' })
break
case 'underwater':
if (isBanned) return reply(mess.banned)
if (args.length < 1) return reply(`Nama yang mau di tulis?\nContoh: ${prefix + command} RamdaniCode`)
reply(mess.wait)
query = args.join (" ")
bf = await getBuffer(`https://api-alphabot.herokuapp.com/api/textpro/underwater?text=${query}&apikey=${AlphaBot}`)
Ramdani.sendMessage(from, bf, image, { quoted: froxx, caption: 'Logo maker' })
break
case 'bear':
if (isBanned) return reply(mess.banned)
if (args.length < 1) return reply(`Nama yang mau di tulis?\nContoh: ${prefix + command} RamdaniCode`)
reply(mess.wait)
query = args.join (" ")
bf = await getBuffer(`https://api-alphabot.herokuapp.com/api/textpro/bear?text=${query}&apikey=${AlphaBot}`)
Ramdani.sendMessage(from, bf, image, { quoted: froxx, caption: 'Logo maker' })
break
//ANIME MENU
case 'ppcouple':
            if (isBanned) return reply(mess.banned)
             anu = await fetchJson(`https://ziy.herokuapp.com/api/ppcouple?apikey=xZiyy`)
             cewe = await getBuffer(anu.result.female)
              cowo = await getBuffer(anu.result.male)
              Ramdani.sendMessage(from, cowo, image, {quoted: froxx, caption: 'Nih Versi Cowo Nya ^_^' })
              Ramdani.sendMessage(from, cewe, image, {quoted: froxx, caption: 'Nih Versi Cewe Nya ^_^' })
              break
                case 'sao':
                if (isBanned) return reply(mess.banned)
				Ramdani.updatePresence(from, Presence.composing) 
				 data = fs.readFileSync('./lib/swortartonline.js');
                 jsonData = JSON.parse(data);
                 randIndex = Math.floor(Math.random() * jsonData.length);
                 randKey = jsonData[randIndex];
                 swordartonline = await getBuffer(randKey.result)
                 Ramdani.sendMessage(from, swordartonline, image, {quoted: froxx, caption: 'swort art online\nMEZ RazoR'})
				 break
				case 'hsdxd':
				if (isBanned) return reply(mess.banned)
				 Ramdani.updatePresence(from, Presence.composing) 
				 data = fs.readFileSync('./lib/highschooldxd.js');
                 jsonData = JSON.parse(data);
                 randIndex = Math.floor(Math.random() * jsonData.length);
                 randKey = jsonData[randIndex];
                 highschooldxd = await getBuffer(randKey.result)
                 Ramdani.sendMessage(from, highschooldxd, image, {quoted: froxx, caption: 'NIH BANG '})
				break
				 case 'lovelive':
				if (isBanned) return reply(mess.banned)
				 Ramdani.updatePresence(from, Presence.composing) 
				 data = fs.readFileSync('./lib/lovelive.js');
                 jsonData = JSON.parse(data);
                 randIndex = Math.floor(Math.random() * jsonData.length);
                 randKey = jsonData[randIndex];
                 lovelive = await getBuffer(randKey.result)
                 Ramdani.sendMessage(from, lovelive, image, {quoted: froxx, caption: 'NIH BANG '})
				break
                    case 'uniform':
					case 'sfwneko':
					case 'cuckold':
					case 'wpnsfwmobile':
					case 'zettairyouiki':
					if (isBanned) return reply(mess.banned)
					qute6 = await getBuffer(`https://api.xteam.xyz/randomimage/${command}?APIKEY=7415bc4287ad5ca8`)
					Ramdani.sendMessage(from, qute6, image, { quoted: froxx, caption: ':)' })
					break
             case 'waifu':
             case 'loli':
            case 'husbu':
            case 'milf':
            case 'cosplay':
            case 'wallml':
            if (isBanned) return reply(mess.banned)
              let wipu = (await axios.get(`https://raw.githubusercontent.com/Arya-was/endak-tau/main/${command}.json`)).data
              let wipi = wipu[Math.floor(Math.random() * (wipu.length))]
              fs.writeFileSync(`./${sender}.jpeg`, await getBuffer(wipi))
		      buttons = [{buttonId: `${command}`,buttonText:{displayText: `Next`},type:1},{buttonId:`owner`,buttonText:{displayText:'OWNER'},type:1}]
              imageMsg = ( await Ramdani.prepareMessage(from, fs.readFileSync(`./${sender}.jpeg`), 'imageMessage', {thumbnail: Buffer.alloc(0)})).message.imageMessage
              buttonsMessage = {footerText:'Menuju Tak Terbatas', imageMessage: imageMsg,
              contentText:`Creator RamdaniCode`,buttons,headerType:4}
              prep = await Ramdani.prepareMessageFromContent(from,{buttonsMessage},{quoted: froxx})
              Ramdani.relayWAMessage(prep)
              fs.unlinkSync(`./${sender}.jpeg`)
              break
//HEWAN MENU
case 'fox':  
                   if (isBanned) return reply(mess.banned)
                   anu = await fetchJson(`https://some-random-api.ml/img/fox`)
                   anu1 = await getBuffer(anu.link)
                   Ramdani.sendMessage(from, anu1, image, {caption: `nih kak mirip kamu`, quoted: froxx})
                   break
                   case 'dog':  
                   if (isBanned) return reply(mess.banned)
                   anu = await fetchJson(`https://some-random-api.ml/img/dog`)
                   anu1 = await getBuffer(anu.link)
                   Ramdani.sendMessage(from, anu1, image, {caption: `nih kak mirip kamu`, quoted: froxx})
                   break
                   case 'cat':
                   if (isBanned) return reply(mess.banned)
                   anu = await fetchJson(`https://some-random-api.ml/img/cat`)
                   anu1 = await getBuffer(anu.link)
                   Ramdani.sendMessage(from, anu1, image, {caption: `nih kak mirip kamu`, quoted: froxx})
                   break
                   case 'panda':  
                   if (isBanned) return reply(mess.banned)
                   anu = await fetchJson(`https://some-random-api.ml/img/panda`)
                   anu1 = await getBuffer(anu.link)
                   Ramdani.sendMessage(from, anu1, image, {caption: `nih kak mirip kamu`, quoted: froxx})
                   break
                   case 'panda1':  
                   if (isBanned) return reply(mess.banned)
                   anu = await fetchJson(`https://some-random-api.ml/img/red_panda`)
                   anu1 = await getBuffer(anu.link)
                   Ramdani.sendMessage(from, anu1, image, {caption: `nih kak mirip kamu`, quoted: froxx})
                   break
                   case 'bird': 
                   if (isBanned) return reply(mess.banned)
                   anu = await fetchJson(`https://some-random-api.ml/img/birb`)
                   anu1 = await getBuffer(anu.link)
                   Ramdani.sendMessage(from, anu1, image, {caption: `nih kak mirip kamu`, quoted: froxx})
                   break
                   case 'koala':  
                   if (isBanned) return reply(mess.banned)
                   anu = await fetchJson(`https://some-random-api.ml/img/koala`)
                   anu1 = await getBuffer(anu.link)
                   Ramdani.sendMessage(from, anu1, image, {caption: `nih kak mirip kamu`, quoted: froxx})
                   break
//ISLAM MENU
case 'listsurah':
                if (isBanned) return reply(mess.banned)
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/quran?apikey=${Lolhuman}`)
                    get_result = get_result.result
                    ini_txt = 'List Surah:\n'
                    for (var x in get_result) {
                        ini_txt += `${x}. ${get_result[x]}\n`
                    }
                    reply(ini_txt)
                    break
                case 'alquran':
                if (isBanned) return reply(mess.banned)
                    if (args.length < 1) return reply(`Example: ${prefix + command} 18 or ${prefix + command} 18/10 or ${prefix + command} 18/1-10`)
                    urls = `https://api.lolhuman.xyz/api/quran/${args[0]}?apikey=${Lolhuman}`
                    quran = await fetchJson(urls)
                    result = quran.result
                    ayat = result.ayat
                    ini_txt = `QS. ${result.surah} : 1-${ayat.length}\n\n`
                    for (var x of ayat) {
                        arab = x.arab
                        nomor = x.ayat
                        latin = x.latin
                        indo = x.indonesia
                        ini_txt += `${arab}\n${nomor}. ${latin}\n${indo}\n\n`
                    }
                    ini_txt = ini_txt.replace(/<u>/g, "").replace(/<\/u>/g, "")
                    ini_txt = ini_txt.replace(/<strong>/g, "").replace(/<\/strong>/g, "")
                    ini_txt = ini_txt.replace(/<u>/g, "").replace(/<\/u>/g, "")
                    reply(ini_txt)
                    break
                case 'alquranaudio':
                if (isBanned) return reply(mess.banned)
                    if (args.length == 0) return reply(`Example: ${prefix + command} 18 or ${prefix + command} 18/10`)
                    surah = args[0]
                    ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/quran/audio/${surah}?apikey=${Lolhuman}`)
                    await lolhuman.sendMessage(from, ini_buffer, audio, { quoted: lol, mimetype: Mimetype.mp4Audio })
                    break
                case 'asmaulhusna':
                if (isBanned) return reply(mess.banned)
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/asmaulhusna?apikey=${Lolhuman}`)
                    get_result = get_result.result
                    ini_txt = `No : ${get_result.index}\n`
                    ini_txt += `Latin: ${get_result.latin}\n`
                    ini_txt += `Arab : ${get_result.ar}\n`
                    ini_txt += `Indonesia : ${get_result.id}\n`
                    ini_txt += `English : ${get_result.en}`
                    reply(ini_txt)
                    break
                case 'kisahnabi':
                if (isBanned) return reply(mess.banned)
                    if (args.length == 0) return reply(`Example: ${prefix + command} Muhammad`)
                    query = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/kisahnabi/${query}?apikey=${Lolhuman}`)
                    get_result = get_result.result
                    ini_txt = `Name : ${get_result.name}\n`
                    ini_txt += `Lahir : ${get_result.thn_kelahiran}\n`
                    ini_txt += `Umur : ${get_result.age}\n`
                    ini_txt += `Tempat : ${get_result.place}\n`
                    ini_txt += `Story : \n${get_result.story}`
                    reply(ini_txt)
                    break
                case 'jadwalsholat':
                if (isBanned) return reply(mess.banned)
                reply(mess.wait)
                    if (args.length == 0) return reply(`Example: ${prefix + command} Yogyakarta`)
                    daerah = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/sholat/${daerah}?apikey=${Lolhuman}`)
                    get_result = get_result.result
                    ini_txt = `Wilayah : ${get_result.wilayah}\n`
                    ini_txt += `Tanggal : ${get_result.tanggal}\n`
                    ini_txt += `Sahur : ${get_result.sahur}\n`
                    ini_txt += `Imsak : ${get_result.imsak}\n`
                    ini_txt += `Subuh : ${get_result.subuh}\n`
                    ini_txt += `Terbit : ${get_result.terbit}\n`
                    ini_txt += `Dhuha : ${get_result.dhuha}\n`
                    ini_txt += `Dzuhur : ${get_result.dzuhur}\n`
                    ini_txt += `Ashar : ${get_result.ashar}\n`
                    ini_txt += `Maghrib : ${get_result.imsak}\n`
                    ini_txt += `Isya : ${get_result.isya}`
                    reply(ini_txt)
                    break
//RANDOM FOTO
case 'art':
                case 'bts':
                case 'exo':
                case 'elf':
                case 'loli':
                case 'neko':
                case 'waifu':
                case 'shota':
                case 'husbu':
                case 'sagiri':
                case 'shinobu':
                case 'megumin':
                case 'wallnime':
                if (isBanned) return reply(mess.banned)
                reply(mess.wait)
                    getBuffer(`https://api.lolhuman.xyz/api/random/${command}?apikey=${Lolhuman}`).then((gambar) => {
                        Ramdani.sendMessage(from, gambar, image, { quoted: froxx })
                    })
                    break
                case 'chiisaihentai':
                case 'trap':
                case 'blowjob':
                case 'yaoi':
                case 'ecchi':
                case 'hentai':
                case 'ahegao':
                case 'hololewd':
                case 'sideoppai':
                case 'animefeets':
                case 'animebooty':
                case 'animethighss':
                case 'hentaiparadise':
                case 'animearmpits':
                case 'hentaifemdom':
                case 'lewdanimegirls':
                case 'biganimetiddies':
                case 'animebellybutton':
                case 'hentai4everyone':
                if (isBanned) return reply(mess.banned)
                reply(mess.wait)
                if (!isPremium) return reply(mess.only.premium)
                    await getBuffer(`https://api.lolhuman.xyz/api/random/nsfw/${command}?apikey=${Lolhuman}`).then((gambar) => {
                        Ramdani.sendMessage(from, gambar, image, { quoted: froxx })
                    })
                    break
                case 'bj':
                case 'ero':
                case 'cum':
                case 'feet':
                case 'yuri':
                case 'trap':
                case 'lewd':
                case 'feed':
                case 'eron':
                case 'solo':
                case 'gasm':
                case 'poke':
                case 'anal':
                case 'holo':
                case 'tits':
                case 'kuni':
                case 'kiss':
                case 'erok':
                case 'smug':
                case 'baka':
                case 'solog':
                case 'feetg':
                case 'lewdk':
                case 'waifu':
                case 'pussy':
                case 'femdom':
                case 'cuddle':
                case 'hentai':
                case 'eroyuri':
                case 'cum_jpg':
                case 'blowjob':
                case 'erofeet':
                case 'holoero':
                case 'classic':
                case 'erokemo':
                case 'fox_girl':
                case 'futanari':
                case 'lewdkemo':
                case 'wallpaper':
                case 'pussy_jpg':
                case 'kemonomimi':
                case 'nsfw_avatar':
                if (isBanned) return reply(mess.banned)
                reply(mess.wait)
                if (!isPremium) return reply(mess.only.premium)
                    getBuffer(`https://api.lolhuman.xyz/api/random2/${command}?apikey=${Lolhuman}`).then((gambar) => {
                        Ramdani.sendMessage(from, gambar, image, { quoted: froxx })
                    })
                    break
case 'bahasa':
                     if (isBanned) return reply(mess.banned)
                    Ramdani.sendMessage(from, bahasa(), text, { quoted:froxx })
                    break 
                    case 'kodenegara':
                    if (isBanned) return reply(mess.banned)
					Ramdani.sendMessage(from, negara(), text)
					break
                    case 'tts':
                    if (isBanned) return reply(mess.banned)
				    if (args.length < 1) return Ramdani.sendMessage(from, 'Diperlukan kode bahasa kak!!', text, {quoted: mek})
					const gtts = require('./lib/gtts')(args[0])
					if (args.length < 2) return Ramdani.sendMessage(from, 'Mana teks yang mau di jadiin suara? suara setan kah?', text, {quoted: mek})
					dtt = body.slice(8)
					ranm = getRandom('.mp3')
					rano = getRandom('.ogg')
					dtt.length > 500
					? reply('Textnya kebanyakan setan!! 😤')
					: gtts.save(ranm, dtt, function() {
						exec(`ffmpeg -i ${ranm} -ar 48000 -vn -c:a libopus ${rano}`, (err) => {
							fs.unlinkSync(ranm)
							buffer = fs.readFileSync(rano)
							if (err) return reply(ind.stikga())
							Ramdani.sendMessage(from, buffer, audio, {quoted: mek, ptt:true})
							fs.unlinkSync(rano)
						})
					})
					break
//STICKER MENU
           case 'ttp':  
           if (isBanned) return reply(mess.banned)
                    if (!c) return reply(`Teks Nya Mana Kak?\nContoh :\n${prefix}ttp Ramdani botz Whatsapp`)
                    anu1 = await getBuffer(`https://api.xteam.xyz/ttp?file&text=${c}`)
                    Ramdani.sendMessage(from, anu1, image, {quoted: mek, caption : `${prefix}sticker`})
                    break
          case 'attp':
          if (isBanned) return reply(mess.banned)
           if (args.length == 0) return reply(`Example: ${prefix + command} Hai`)
           buffer = await getBuffer(`https://api.xteam.xyz/attp?file&text=${encodeURI(q)}`)
           Ramdani.sendMessage(from, buffer, sticker, { quoted: mek })
            break
            case 'patrick':
            if (isBanned) return reply(mess.banned)
			random = Math.floor(Math.random() * 6) + 1
		    wkwk = await getBuffer(`https://api.lolhuman.xyz/api/sticker/patrick?apikey=${Lolhuman}`)
			Ramdani.sendMessage(from, wkwk, sticker, {quoted: froxx})
			break
			case 'amongus':
			if (isBanned) return reply(mess.banned)
			random = Math.floor(Math.random() * 6) + 1
		    wkwk = await getBuffer(`https://api.lolhuman.xyz/api/sticker/amongus?apikey=${Lolhuman}`)
			Ramdani.sendMessage(from, wkwk, sticker, {quoted: froxx})
			break
            case 'toimg':
            if (isBanned) return reply(mess.banned)
			if (!isQuotedSticker) return reply('𝗥??𝗽𝗹𝘆/𝘁𝗮𝗴 𝘀𝘁𝗶𝗰𝗸𝗲𝗿 !')
			reply(mess.wait)
			encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
			media = await Ramdani.downloadAndSaveMediaMessage(encmedia)
			ran = getRandom('.png')
			exec(`ffmpeg -i ${media} ${ran}`, (err) => {
			fs.unlinkSync(media)
			if (err) return reply('Yah gagal, coba ulangi ^_^')
			buffer = fs.readFileSync(ran)
			fakethumb(buffer,'NIH')
			fs.unlinkSync(ran)
			})
			break
                    case 'sticker':
					case 'stiker':
					case 's':
					if (isBanned) return reply(mess.banned)
						if (isMedia && !mek.message.videoMessage || isQuotedImage) {
							const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
							const media = await Ramdani.downloadAndSaveMediaMessage(encmedia, `./media/sticker/${sender}`)
							await ffmpeg(`${media}`)
									.input(media)
									.on('start', function (cmd) {
										console.log(`Started : ${cmd}`)
									})
									.on('error', function (err) {
										console.log(`Error : ${err}`)
										fs.unlinkSync(media)
										reply(mess.error.api)
									})
									.on('end', function () {
										console.log('Finish')
										exec(`webpmux -set exif ./media/sticker/data.exif ./media/sticker/${sender}.webp -o ./media/sticker/${sender}.webp`, async (error) => {
											if (error) return reply(mess.error.api)
											Ramdani.sendMessage(from, fs.readFileSync(`./media/sticker/${sender}.webp`), sticker, {quoted: froxx})
											fs.unlinkSync(media)	
											fs.unlinkSync(`./media/sticker/${sender}.webp`)	
										})
									})
									.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
									.toFormat('webp')
									.save(`./media/sticker/${sender}.webp`)
						} else if ((isMedia && mek.message.videoMessage.fileLength < 10000000 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.fileLength < 10000000)) {
							const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
							const media = await Ramdani.downloadAndSaveMediaMessage(encmedia, `./media/sticker/${sender}`)
							sticWait(from)
								await ffmpeg(`${media}`)
									.inputFormat(media.split('.')[4])
									.on('start', function (cmd) {
										console.log(`Started : ${cmd}`)
									})
									.on('error', function (err) {
										console.log(`Error : ${err}`)
										fs.unlinkSync(media)
										tipe = media.endsWith('.mp4') ? 'video' : 'gif'
										reply(mess.error.api)
									})
									.on('end', function () {
										console.log('Finish')
										exec(`webpmux -set exif ./media/sticker/data.exif ./media/sticker/${sender}.webp -o ./media/sticker/${sender}.webp`, async (error) => {
											if (error) return reply(mess.error.api)
											Ramdani.sendMessage(from, fs.readFileSync(`./media/sticker/${sender}.webp`), sticker, {quoted: froxx})
											fs.unlinkSync(media)
											fs.unlinkSync(`./media/sticker/${sender}.webp`)
										})
									})
									.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
									.toFormat('webp')
									.save(`./media/sticker/${sender}.webp`)
						} else {
							reply(`Kirim gambar/video dengan caption ${prefix}sticker atau tag gambar/video yang sudah dikirim\nNote : Durasi video maximal 10 detik`)
						}
						break
//DOWNLOAD MENU
case 'pinterest':
            if(!q) return reply('gambar apa?')
            let pin = await hx.pinterest(q)
            let ac = pin[Math.floor(Math.random() * pin.length)]
            let di = await getBuffer(ac)
            await Ramdani.sendMessage(from,di,image,{quoted: mek})
            break
              case 'ssweb':  
                   if (isBanned) return reply(mess.banned)
                   if (args.length < 1) return reply(`[❗] Example :\n*${prefix}${command} https://google.com*`)                  
                   reply(mess.wait)
                   anu = await getBuffer(`https://hardianto.xyz/api/tools/ssweb?url=${args.join(' ')}&apikey=hardianto`)
                   Ramdani.sendMessage(from, anu, image, {caption: `BERHASIL KAK\n\nPlease Support *Aprilia*`, quoted: mek})
                   break
case 'play':
if(isBanned) return reply (mess.banned)
if (args.length === 0) return reply (`Example ${prefix + command} love nwantiti`)
anu = await fetchJson (`https://api-bot-xyz.herokuapp.com/api/yt/playmp3?query=${args.join(' ')}&apikey=${botxyz}`)
sayang = `TITLE BERHASIL DImekATKAN OLEH BOT\n\nTitle : ${anu.title}\nChannel : ${anu.channel}\nUpload : ${anu.published}\nViews : ${anu.views}\n\n*Mohon Tunggu Beberapa Menit Bot Sedang Mengirimkan File*`
buf = await getBuffer (anu.thumb)
Ramdani.sendMessage (from, buf, image, {quoted: mek, caption: sayang})
sound = await getBuffer (anu.url)
Ramdani.sendMessage(from, sound, audio, {mimetype: 'audio/mp4', quoted: mek})
break
case 'play2':
if (isBanned) return reply(mess.banned)
if (args.length ==0)return reply('Judul Lagunya Apa?')
bo = args.join(" ")
reply(mess.wait)
ini = await fetchJson(`https://api.zeks.me/api/ytplaymp3?apikey=apivinz&q=${bo}`)
thmb = await getBuffer(ini.result.thumbnail)
ply1 =`Judul: ${ini.result.title}\nSize: ${ini.result.size}\nDurasi: ${ini.result.duration}`
ply2 =`Silahkan Pilih Media Di Bawah ini`
but = [
{ buttonId: `${prefix}mp3 ${args.join(" ")}`, buttonText: { displayText: '️ᴍᴜsɪᴋ 🎵' }, type: 1 },
{ buttonId: `${prefix}mp4 ${args.join(" ")}`, buttonText: { displayText: 'ᴠɪᴅᴇᴏ 📽️' }, type: 1 }
]
sendButLocation(from, ply1, ply2, thmb, but)
break
case 'mp4':
if (isBanned) return reply(mess.banned)
reply(mess.wait)
bo = args.join(" ")
ini = await fetchJson(`https://api.zeks.me/api/ytplaymp4?apikey=apivinz&q=${bo}`)
mp4 = await getBuffer(ini.result.url_video)
Ramdani.sendMessage(from, mp4, video)
break
case 'mp3':
if (isBanned) return reply(mess.banned)
reply(mess.wait)
bo = args.join(" ")
ini = await fetchJson(`https://api.zeks.me/api/ytplaymp3?apikey=apivinz&q=${bo}`)
mp3 = await getBuffer(ini.result.url_audio)
Ramdani.sendMessage(from, mp3, audio)
break
case 'tiktok':
if (isBanned) return reply(mess.banned)
reply(mess.wait)
              if (!q) return reply('Linknya?')
              if (!q.includes('tiktok')) return reply(mess.error.Iv)
              data = await fetchJson(`https://api.lolhuman.xyz/api/tiktok?apikey=${Lolhuman}&url=${q}`)
              result = `DhenxCode¸ *Nickname*: ${data.result.author.nickname}\n*Like*: ${data.result.statistic.diggCount}\n *Komentar*: ${data.result.statistic.commentCount}\n*Share*: ${data.result.statistic.shareCount}\n*Views*: ${data.result.statistic.playCount}\n*Desc*: ${data.result.title}`
              buttons = [{buttonId: `${prefix}buttons3 ${q}`,buttonText:{displayText: `NO WATERMARK`},type:1},{buttonId:`${prefix}buttons4 ${q}`,buttonText:{displayText:'Audio ( 4.5 MB )'},type:1}]
              fs.writeFileSync(`./${sender}.jpeg`, await getBuffer(data.result.thumbnail))
              imageMsg = ( await Ramdani.prepareMessage(from, fs.readFileSync(`./${sender}.jpeg`), 'imageMessage', {thumbnail: Buffer.alloc(0)})).message.imageMessage
              buttonsMessage = {footerText:'Pilih satu format di bawah ini', imageMessage: imageMsg,
              contentText:`${result}`,buttons,headerType:4}
              prep = await Ramdani.prepareMessageFromContent(from,{buttonsMessage},{quoted: froxx})
              Ramdani.relayWAMessage(prep)
              fs.unlinkSync(`./${sender}.jpeg`)
              break
case 'tiktokwm':
if (!isUser) return reply(mess.daftar)
if (isBanned) return reply (mess.banned)
reply(mess.wait)
anu = await fetchJson (`https://api-aprilia-xyz.herokuapp.com/api/tiktok?url=${args.join(' ')}`)
buffer = await getBuffer (anu.result.original)
Ramdani.sendMessage(from, buffer, video, {mimetype: 'video/mp4', quoted: mek, caption: 'SUBS Ramdani Official SU'})
break
/*
case 'tiktoknowm':
      if (isBanned) return reply (mess.banned)
reply(mess.wait)
anu = await fetchJson (`https://docs-jojo.herokuapp.com/api/tiktok_nowm?url=${args.join(' ')}`)
buffer = await getBuffer(anu.download)
Ramdani.sendMessage(from, buffer, video, {mimetype: 'video/mp4', quoted: mek})
break
case 'tiktokwm':
      if (isBanned) return reply (mess.banned)
reply(mess.wait)
anu = await fetchJson (`https://docs-jojo.herokuapp.com/api/tiktok_wm?url=${args.join(' ')}`)
buffer = await getBuffer (anu.download)
Ramdani.sendMessage(from, buffer, video, {mimetype: 'video/mp4', quoted: mek})
break
*/
case 'igvideo':
if (!isUser) return reply(mess.daftar)
if (isBanned) return reply (mess.banned)
if (args.length < 1) return reply("```Mana linknya tot```")
if (!isUrl(args[0]) && !args[0].includes('instagram.com')) return reply('```Invalid link```')
reply(mess.wait)
anu = await fetchJson(`https://api.dapuhy.ga/api/socialmedia/igdownload?url=${args.join(' ')}&apikey=wf2tghNhfU`)
buffer = await getBuffer (anu.result.download_url)
Ramdani.sendMessage(from, buffer, video, {mimetype: 'video/mp4', quoted: mek, caption: '*Subscribe channel Ramdani Official dan follow Instagram riyan_ff12*'})
break
case 'igfoto':
if (!isUser) return reply(mess.daftar)
if (isBanned) return reply (mess.banned)
if (args.length < 1) return reply("```Mana linknya tot```")
if (!isUrl(args[0]) && !args[0].includes('instagram.com')) return reply('```Invalid link```')
reply(mess.wait)
anu = await fetchJson(`https://api.dapuhy.ga/api/socialmedia/igdownload?url=${args.join(' ')}&apikey=wf2tghNhfU`)
buffer = await getBuffer (anu.result.download_url)
Ramdani.sendMessage(from, buffer, video, {mimetype: 'video/mp4', quoted: mek, caption: '*Subscribe channel Ramdani Official dan follow Instagram riyan_ff12*'})
break
case 'playmp3':
if (!isUser) return reply(mess.daftar)
      if (isBanned) return reply (mess.banned)
      if (args.length < 1) return reply("```JUDUL MANA TOT```")
      anu = await fetchJson(`https://api.dapuhy.ga/api/socialmedia/ytplaymp3?query=${args.join(' ')}&apikey=wf2tghNhfU`)
      reply(mess.wait)
      captionnya = `TITLE BERHASIL DImekATKAN\n\nJudul : ${anu.result.title}\nKualitas Video : ${anu.result.quality}\nViews : ${anu.result.views}\nSize : ${anu.result.size}\nChannel : ${anu.result.channel}\nDeskripsi : ${anu.result.desc}\n\n*MOHON TUNGGU BEBERAPA MENIT BOT SEDANG MENGIRIM AUDIO*`
buffer = await getBuffer (anu.result.thumb)
Ramdani.sendMessage(from, buff, image, {quoted: mek, caption: captionnya})
miku = await getBuffer (anu.result.url)
Ramdani.sendMessage(from, miku, audio, {mimetype: 'audio/mp4', quoted: mek})
break
case 'playmp4':
if (!isUser) return reply(mess.daftar)
      if (isBanned) return reply (mess.banned)
      if (args.length < 1) return reply("```JUDUL MANA TOT```")
      anu = await fetchJson(`https://api.dapuhy.ga/api/socialmedia/ytplaymp4?query=${args.join(' ')}&apikey=wf2tghNhfU`)
      reply(mess.wait)
      captionnya = `TITLE BERHASIL DImekATKAN\n\nJudul : ${anu.result.title}\nKualitas Video : ${anu.result.quality}\nViews : ${anu.result.views}\nSize : ${anu.result.size}\nChannel : ${anu.result.channel}\nDeskripsi : ${anu.result.desc}\n\n*MOHON TUNGGU BEBERAPA MENIT BOT SEDANG MENGIRIM VIDEO*`
buffer = await getBuffer (anu.result.thumb)
Ramdani.sendMessage(from, buff, image, {quoted: mek, caption: captionnya})
miku = await getBuffer (anu.result.url)
Ramdani.sendMessage(from, miku, audio, {mimetype: 'audio/mp4', quoted: mek})
break
  case 'shadowtext':
  if (!isUser) return reply(mess.daftar)
  if (isBanned) return reply (mess.banned)
  if (args.length == 0) return reply(`Example: ${prefix + command} Ramdani Official`)
  txt = args.join(" ")
  reply(mess.wait)
  buffer = await getBuffer(`https://ogata-api.herokuapp.com/api/oxy/shadow?text=${txt}&apikey=${ogatakey}`)
  Ramdani.sendMessage(from, buffer, image, {quoted: mek, caption:mess.success})
  break
case 'ytmp3':
if (!isUser) return reply(mess.daftar)
if (isBanned) return reply (mess.banned)
if (args.length < 1) return reply("```LINK NYA?```")
if (!isUrl(args[0]) && !args[0].includes('youtu.be')) return reply('```LINK NYA JELEK NIH```')
reply (mess.wait)
anu = await fetchJson (`https://api.dapuhy.ga/api/socialmedia/ytmp3?url=${args.join(' ')}&apikey=wf2tghNhfU`)
captionnya = `TITLE BERHASIL DImekATKAN\n\nJudul : ${anu.result.title}\nSize : ${anu.result.size}\nLike Video: ${anu.result.likes}\nViews : ${anu.result.views}\nChannel : ${anu.result.channel}\nDeskripsi : ${anu.result.desc}\n\n*MOHON TUNGGU BEBERAPA MENIT BOT SEDANG MENGIRIM AUDIO*`
buffer = await getBuffer (anu.result.thumb)
Ramdani.sendMessage(from, buffer, image, {quoted: mek, caption: captionnya})
miku = await getBuffer (anu.result.url)
Ramdani.sendMessage(from, miku, audio, {mimetype: 'audio/mp4', quoted: mek})
break
case 'ytmp4':
if (!isUser) return reply(mess.daftar)
if (isBanned) return reply (mess.banned)
if (args.length < 1) return reply("```LINK NYA?```")
if (!isUrl(args[0]) && !args[0].includes('youtu.be')) return reply('```LINK NYA JELEK NIH```')
reply (mess.wait)
anu = await fetchJson (`https://api.dapuhy.ga/api/socialmedia/ytmp4?url=${args.join(' ')}&apikey=wf2tghNhfU`)
captionnya = `TITLE BERHASIL DImekATKAN\n\nJudul : ${anu.result.title}\nSize : ${anu.result.size}\nKualitas Video : ${anu.result.quality}\nViews : ${anu.result.views}\nChannel : ${anu.result.channel}\nDeskripsi : ${anu.result.desc}\n\n*MOHON TUNGGU BEBERAPA MENIT BOT SEDANG MENGIRIM VIDEO*`
buffer = await getBuffer (anu.result.thumb)
Ramdani.sendMessage(from, buffer, image, {quoted: mek, caption: captionnya})
miku = await getBuffer (anu.result.url)
Ramdani.sendMessage(from, miku, video, {mimetype: 'video/mp4', quoted: mek})
break
case 'ktp':
if (isBanned) return reply (mess.banned)
                    if (args.length == 0) return reply(`Usage: ${prefix + command} nik|provinsi|kabupaten|nama|tempat, tanggal lahir|jenis kelamin|jalan|rt/rw|kelurahan|kecamatan|agama|status nikah|pekerjaan|warga negara|berlaku sampai|url_image\n\nContoh: ${prefix + command} 456127893132123|bumipertiwi|fatamorgana|Akira|mars, 99-99-9999|belum ditemukan|jl wardoyo|999/999|turese|imtuni|alhamdulillah islam|jomblo kack|mikirin dia|indo ori no kw|hari kiamat|https://i.ibb.co/Xb2pZ88/test.jpg`)
                    get_args = args.join(" ").split("|")
                    nik = get_args[0]
                    prov = get_args[1]
                    kabu = get_args[2]
                    name = get_args[3]
                    ttl = get_args[4]
                    jk = get_args[5]
                    jl = get_args[6]
                    rtrw = get_args[7]
                    lurah = get_args[8]
                    camat = get_args[9]
                    agama = get_args[10]
                    nikah = get_args[11]
                    kerja = get_args[12]
                    warga = get_args[13]
                    until = get_args[14]
                    img = get_args[15]
                    ini_anu = await getBuffer(`http://api.lolhuman.xyz/api/ktpmaker?apikey=SAYULONTEH&nik=${nik}&prov=${prov}&kabu=${kabu}&name=${name}&ttl=${ttl}&jk=${jk}&jl=${jl}&rtrw=${rtrw}&lurah=${lurah}&camat=${camat}&agama=${agama}&nikah=${nikah}&kerja=${kerja}&warga=${warga}&until=${until}&img=${img}`)
                    Ramdani.sendMessage(from, ini_anu, image, {quoted: mek, caption: 'Noh Jadi'})
                    break
case 'tiktokmusic':
if (!isUser) return reply(mess.daftar)
      if (isBanned) return reply (mess.banned)
reply(mess.wait)
anu = await fetchJson(`http://zekais-api.herokuapp.com/tiktokmusic?url=${args.join(' ')}&apikey=Rj9pGDhE`)
buffer = await getBuffer (anu.result)
Ramdani.sendMessage(from, buffer, audio, {mimetype: 'audio/mp4', quoted: mek})
break
case 'shortlink':
if (!isUser) return reply(mess.daftar)
if (isBanned) return reply (mess.banned)
anu = await fetchJson (`https://api-aprilia.herokuapp.com/api/short/tiny?url=${args.join(' ')}&apikey=Alphabot`)
reply (anu.result.link)
break
case 'buttons3': 
if (isBanned) return reply(mess.banned)
reply(mess.wait)
              if (!q) return reply('Linknya?')
              if (!q.includes('tiktok')) return reply(mess.error.Iv)
              data = await fetchJson(`https://api.lolhuman.xyz/api/tiktok?apikey=${Lolhuman}&url=${q}`)
              ini_video = await getBuffer(data.result.link)
              Ramdani.sendMessage(from, ini_video, video, { quoted: froxx })
              break
          case 'buttons4': 
          if (isBanned) return reply(mess.banned)
           reply(mess.wait)
              if (!q) return reply('Linknya?')
              if (!q.includes('tiktok')) return reply(mess.error.Iv)
              data = await getBuffer(`https://api.lolhuman.xyz/api/tiktokmusic?apikey=${Lolhuman}&url=${args[0]}`)
              Ramdani.sendMessage(from, data, audio, { quoted: froxx })
              break
              case 'buttons1':
              await axios.get(`https://api.zeks.xyz/api/ytplaymp3/2?apikey=apivinz&q=${q}`)
		     .then(res => {
			  Ramdani.sendMessage(from, { url: res.data.result.link }, 'audioMessage', { mimetype: 'audio/mp4', quoted: froxx, contextInfo: { externalAdReply: { title: res.data.result.title, mediaType: 2, thumbnailUrl: res.data.result.thumb, mediaUrl: res.data.result.source }}})
})
              break
case 'lirik':
if (isBanned) return reply(mess.banned)
reply(mess.wait)
if (args.length < 1) return reply('Judulnya?')
teks = body.slice(7)
lirikLagu(teks).then((res) => {
let lirik = `${res[0].result}`
reply(lirik)
})
break
case 'herolist':
if (isBanned) return reply(mess.banned)
await herolist().then((ress) => {
let listt = `*List hero untuk feature ${prefix}herodetail*\n\n`
for (var i = 0; i < ress.hero.length; i++) {
listt += '-  ' + ress.hero[i] + '\n'
}
reply(listt)
})
break
case 'herodetail':
if (isBanned) return reply(mess.banned)
res = await herodetails(body.slice(12))
her = `*Hero Details ${body.slice(12)}*
*Nama* : ${res.hero_name}
*Role* : ${res.role}
*Quotes* : ${res.entrance_quotes}
*Fitur Hero* : ${res.hero_feature}
*Spesial* : ${res.speciality}
*Rekomendasi Lane* : ${res.laning_recommendation}
*Harga* : ${res.price.battle_point} [Battle point] | ${res.price.diamond} [DM] | ${res.price.hero_fragment} [Fragment]
*Rilis* : ${res.release_date}

*Durability* : ${res.skill.durability}
*Offence* : ${res.skill.offense}
*Skill Effect* : ${res.skill_effects}
*Difficulty* : ${res.skill.difficulty}
 
*Movement Speed* : ${res.attributes.movement_speed}
*Physical Attack* : ${res.attributes.physical_attack}
*Magic Defense* : ${res.attributes.magic_defense}
*Ability Crit Rate* : ${res.attributes.ability_crit_rate}
*HP* : ${res.attributes.hp}
*Mana* : ${res.attributes.mana}
*Mana Regen* : ${res.attributes.mana_regen}

*Story* : ${res.background_story}`
reply(her)
break
//OWNER MENU
case 'clearall':
					     if (!isOwner) return reply(mess.only.ownerB)
					anu = await Ramdani.chats.all()
					Ramdani.setMaxListeners(25)
					for (let _ of anu) {
						Ramdani.deleteChat(_.jid)
					}
					break
case 'block':
				 Ramdani.updatePresence(from, Presence.composing) 
				 Ramdani.chatRead (from)
					if (!isGroup) return reply(mess.only.group)
					if (!isOwner) return reply(mess.only.ownerB)
					Ramdani.blockUser (`${body.slice(7)}@c.us`, "add")
					Ramdani.sendMessage(from, `perintah Diterima, memblokir ${body.slice(7)}@c.us`, text)
					break
                    case 'unblock':
					if (!isGroup) return reply(mess.only.group)
					if (!isOwner) return reply(mess.only.ownerB)
				    Ramdani.blockUser (`${body.slice(9)}@c.us`, "remove")
					Ramdani.sendMessage(from, `Perintah Diterima, membuka ${body.slice(9)}@c.us`, text)
					break   				
					case 'setppbot':
					if (!isOwner) return reply(ind.ownerb())
					Ramdani.updatePresence(from, Presence.composing) 
					if (!isQuotedImage) return reply(`Kirim gambar dengan caption ${prefix}setppbot atau tag gambar yang sudah dikirim`)
					enmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await Ramdani.downloadAndSaveMediaMessage(enmedia)
					await Ramdani.updateProfilePicture(botNumber, media)
					reply('Makasih profil barunya😗')
					break 
		case 'setppbot':
				if (!isOwner) return reply('*Only Owner bot*')
					Ramdani.updatePresence(from, Presence.composing) 
					if (!isQuotedImage) return reply(`Kirim gambar dengan caption ${prefix}setppbot atau tag gambar yang sudah dikirim`)
					enmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await Ramdani.downloadAndSaveMediaMessage(enmedia)
					await Ramdani.updateProfilePicture(botNumber, media)
					reply('Makasih profil barunya😗')
					break 
case 'public':
if (isBanned) return reply(mess.banned)
if (!isOwner) return reply(mess.only.ownerB)
publik = true
fakeText('*Sukses mengubah mode public*')
break
case 'self':
if (isBanned) return reply(mess.banned)
if (!isOwner) return reply(mess.only.ownerB)
publik = false
fakeText('*Sukses mengubah mode self*')
      case 'hedsot':
      if (isBanned) return reply(mess.banned)
             if (!isOwner) return 
             reply(`Bye...`)
             await sleep(3000)
             process.exit()
             break
      case 'restart':
      if (isBanned) return reply(mess.banned)
             if (!isOwner) return 
             reply(mess.wait)
             exec(`node start.js`)
             reply('_Restarting Bot Success_')
             break
      case 'leaveall':
      if (isBanned) return reply(mess.banned)
             if (!isOwner) return  reply(mess.only.owner)
             let totalgroup = Ramdani.chats.array.filter(u => u.jid.endsWith('@g.us')).map(u => u.jid)
             for (let id of totalgroup) {
             sendMess(id, 'Byee', null)
             await sleep(3000)
             Ramdani.groupLeave(id)
}
             break
        case 'join':
        if (isBanned) return reply(mess.banned)
            if (!isOwner) return reply(mess.only.ownerB)
            try {
            if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return reply(mess.Iv)
            hen = args[0]
            if (!q) return reply('Masukan link group')
            var codeInvite = hen.split('https://chat.whatsapp.com/')[1]
            if (!codeInvite) return fakeitem('pastikan link sudah benar!')
            var response = await Ramdani.acceptInvite(codeInvite)
            fakeitem('SUKSES')
            } catch {
            fakeitem('LINK ERROR!')
            }
        break
        case 'join2': 
        if (isBanned) return reply(mess.banned)
             if (!q) return reply('Linknya?')
             if (!isOwner) return reply(mess.only.owner)
             if (!isUrl(args[0]) && !args[0].includes('https://chat.whatsapp.com/')) return reply('Linknya Invalid Tod')
             link = args[0].replace('https://chat.whatsapp.com/','')
             fak = Ramdani.query({ json: ['action', 'invite', link],
             expect200: true })
             reply('Berhasil Masuk Grup')
             break
        case 'ban':
        case 'banned':
        if (isBanned) return reply(mess.banned)
					if (!isOwner) return reply(mess.only.ownerB)
					bnnd = body.slice(6)
					ban.push(`${bnnd}@s.whatsapp.net`)
					fs.writeFileSync('./database/banned.json', JSON.stringify(ban))
					reply(`Nomor wa.me/${bnnd} telah dibanned !`)
	    break
        case 'unban':
        case 'unbanned':
        if (isBanned) return reply(mess.banned)
					if (!isOwner) return reply(mess.only.ownerB)
					bnnd = body.slice(8)
					ban.splice(`${bnnd}@s.whatsapp.net`, 1)
					fs.writeFileSync('./database/banned.json', JSON.stringify(ban))
					reply(`Nomor wa.me/${bnnd} telah di unban!`)
		break
        case 'd':
        case 'del':
        case 'delete': 
        if (isBanned) return reply(mess.banned)
        if (!isOwner) return reply(mess.only.ownerB)
					Ramdani.deleteMessage(from, { id: mek.message.extendedTextMessage.contextInfo.stanzaId, remoteJid: from, fromMe: true })
					break
break
case 'addcmd': 
case 'setcmd':
if (isBanned) return reply(mess.banned)
if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
if (isQuotedSticker) {
if (!c) return reply(`Penggunaan : ${command} cmdnya dan tag stickernya`)
var kodenya = mek.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.fileSha256.toString('base64')
addCmd(kodenya, c)
reply("Done Bwang")
} else {
reply('tag stickenya')
}
break
case 'delcmd':
if (isBanned) return reply(mess.banned)
if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
if (!isQuotedSticker) return reply(`Penggunaan : ${command} tagsticker`)
var kodenya = mek.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.fileSha256.toString('base64')
scommand.splice(getCommandPosition(kodenya), 1)
fs.writeFileSync('./database/scommand.json', JSON.stringify(scommand))
reply("Done Bwang")
break
case 'listcmd':
if (isBanned) return reply(mess.banned)
if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
let teksnyee = `「 ??𝚒𝚜𝚝 𝙲𝚘𝚖𝚖𝚊𝚗𝚍 𝚂𝚝𝚒𝚌𝚔𝚎𝚛 」`
let cemde = [];
for (let i of scommand) {
cemde.push(i.id)
teksnyee += `\n\n*➪𝙸𝙳:* ${i.id}\n*➪𝙲𝚖𝚍:* ${i.chats}`
}
reply(teksnyee)
break
case 'bc': 
                    if (isBanned) return reply(mess.banned)
					if (!isOwner) return reply(mess.only.ownerB) 
					if (args.length < 1) return reply('.......')
					anu = await Ramdani.chats.all()
					if (isMedia && !mek.message.videoMessage || isQuotedImage) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						buff = await Ramdani.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							Ramdani.sendMessage(_.jid, bc, image, {quoted:mek,caption: `*「 PESAN SIARAN BOT 」*\n\n${body.slice(4)}`})}
             reply('Suksess broadcast')
             } else {
             for (let _ of anu) {
             Ramdani.sendMessage(_.jid, 
			{"contentText": `*「 BROADCAST ${namabot} 」*\n\n${body.slice(4)}`,
			"footerText": '© Creator By Ramdani Official',
			"buttons": [
			{"buttonId": `${prefix}simpelmenu`,
			"buttonText": {"displayText": "Simple Menu"
			},"type": "RESPONSE"}
			], "headerType": 1,
			}, MessageType.buttonsMessage )}
             reply('Suksess broadcast')}
        break
        case 'bc2':
        if (isBanned) return reply(mess.banned)
             if(!isOwner) return reply('Anda Bukan Owner')
             buff10 = await getBuffer (`https://api-xcz.herokuapp.com/api/random/waifu`)
             if (args.length < 1) return reply('teks?')
             anu = await Ramdani.chats.all()
             if (isMedia && !mek.message.videoMessage || isQuotedImage) {
             const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
             bc = await Ramdani.downloadMediaMessage(encmedia)
             for (let _ of anu) {
             	tes = `${body.slice(4)}`
             	Ramdani.sendMessage(_.jid, bc, { contentText: `${tes}`, footerText: `_*${namabot} Broadcast*_`, buttons: [{buttonId: `${prefix}menu`,buttonText:{displayText: '𝐌𝐞𝐧𝐮'},type:1}],headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: buff10, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')}
             reply('Suksess broadcast')
             } else {
             for (let _ of anu) {
             	textt = `${body.slice(4)}`
             Ramdani.sendMessage(_.jid, { contentText: `${textt}`, footerText: `_*${namabot} Broadcast*_`, buttons: [{buttonId: `${prefix}menu`,buttonText:{displayText: '𝐌𝐞𝐧𝐮'},type:1}],headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: buff10, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')}
             reply('Suksess broadcast')}
             break
//GROUP MENU
case 'kickall':
	 if (!isOwner) return reply(mess.only.ownerB)
					members_id = []
   teks = (args.length > 1) ? body.slice(8).trim() : ''
	            teks += '\n\n'
					for (let mem of groupMembers) {
						teks += `*??* ${mem.jid.split('@')[0]}\n`
						members_id.push(mem.jid)
					}
					mentions(teks, members_id, true)
					Ramdani.groupRemove(from, members_id)
			       break
                 case 'setdesk':
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					Ramdani.groupUpdateDescription(from, `${body.slice(9)}`)
					Ramdani.sendMessage(from, 'Succes, Ganti Deskripsi Grup', text, {quoted: amv})
					break
                case 'setnamegc':
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					Ramdani.groupUpdateSubject(from, `${body.slice(9)}`)
					Ramdani.sendMessage(from, 'Succes, Ganti Nama Grup', text, {quoted: amv})
					break
                case 'listadmin':
					if (!isGroup) return reply(mess.only.group)
					teks = `List admin of group *${groupMetadata.subject}*\nTotal : ${groupAdmins.length}\n\n`
					no = 0
					for (let admon of groupAdmins) {
						no += 1
						teks += `[${no.toString()}] @${admon.split('@')[0]}\n`
					}
					mentions(teks, groupAdmins, true)
					break
//WELCOME
case 'intro':
var intro = `ᴡᴇʟᴄᴏᴍᴇ
ɪɴᴛʀᴏ
┌ > ɴᴀᴍᴀ : 
┌ > ᴀsᴀʟ ᴋᴏᴛᴀ : 
┌ > ᴜsɪᴀ : 
┌ > ɢᴇɴᴅᴇʀ : 
┌ > sᴛᴀᴛᴜs :
ᴅᴏɴᴛ ғᴏʀɢᴇᴛ ᴛᴏ sᴜʙsᴄʀɪʙᴇ ʏᴛ ʀᴀᴍᴅᴀɴɪ ᴏғғɪᴄɪᴀʟ
https://youtube.com/channel/UCB157jomCne961WzYHpG4ghttps://youtube.com/channel/UCB157jomCne961WzYHpG4gg
`
Ramdani.sendMessage(from, intro, text, {quoted: ftrolMENU, contextInfo: {"forwardingScore":999,"isForwarded":true}, sendEphemeral: true })
break
       case 'online':
       case 'listonline':
       case 'here':                
       if (isBanned) return reply(mess.banned)
 if (!isGroup) return reply(`Only group`)
             try {
             let ido = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : from
             let online = [...Object.keys(Ramdani.chats.get(ido).presences), Ramdani.user.jid]
             Ramdani.sendMessage(from, 'List Online:\n' + online.map(v => '- @' + v.replace(/@.+/, '')).join `\n`, text, { quoted: mek, contextInfo: { mentionedJid: online }})
             } catch (e) {
             reply(`${e}`)
}
             break
       case 'setgrupname':
       if (isBanned) return reply(mess.banned)
  if (!isGroup) return reply(mess.only.group)
              if (!isBotGroupAdmins) return 
              if (args.length == 0) return reply(`Penggunaan ${prefix}setgrupname name`)
              Ramdani.groupUpdateSubject(from, q)
             .then((res) => reply(jsonformat(res)))
             .catch((err) => reply(jsonformat(err)))
              break
       case 'setdesc':
       if (isBanned) return reply(mess.banned)
  if (!isGroup) return reply(mess.only.group)
              if (!isBotGroupAdmins) return reply(mess.only.Badmin)
              if (args.length == 0)  return reply(`Penggunaan ${prefix}setdesc desc`)
              Ramdani.groupUpdateDescription(from, q)
             .then((res) => reply(jsonformat(res)))
             .catch((err) => reply(jsonformat(err)))
              break
       case 'setppgrup':
       if (isBanned) return reply(mess.banned)
           if (!isGroup) return reply(mess.only.group)
              if (!isBotGroupAdmins) return reply(mess.only.Badmin)
              if (isQuotedImage) {
              let encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
              let media = await Ramdani.downloadMediaMessage(encmedia)
              Ramdani.updateProfilePicture(from, media)
             .then((res) => reply(jsonformat(res)))
             .catch((err) => reply(jsonformat(err)))
              } else {
              reply(`Kirim atau tag gambar dengan caption ${prefix}setppgrup`)
}
              break
case 'demoteall':
if (isBanned) return reply(mess.banned)
		if (!isOwner && !rn.key.fromMe) return reply(mess.only.ownerB)

		if (!isGroup) return reply(mess.only.group)

		if (!isBotGroupAdmins) return reply(mess.only.Badmin)
               
		 members_id = [ ]
		
		 for (let mem of groupMembers) {
	   
		 	members_id.push(mem.jid)
	  
		 		}
              
		 		  Ramdani.groupDemoteAdmin(from, members_id)
              
		 		    break
                
		 		    case 'promoteall':
	if (isBanned) return reply(mess.banned)
		 		    	if (!isOwner && !rn.key.fromMe) return reply(mess.only.ownerB)
	
		 		    	if (!isGroup) return reply(mess.only.group)
	
		 		    	if (!isBotGroupAdmins) return reply(mess.only.Badmin)
                
		 		    	members_id = [ ]
		
		 		    	for (let mem of groupMembers) {
	  
		 		    	 	members_id.push(mem.jid)
	
		 		    	 	 	}
             
		 		    	 	 	   Ramdani.groupMakeAdmin(from, members_id)
             
		 		    	 	 	      break
case 'group':
if (isBanned) return reply(mess.banned)
				danz = 'PILIH MANA MIN?'
        sendButMessage(from, danz, `Silahkan pilih salah satu`, [
          {
            buttonId: `${prefix}opengc`,
            buttonText: {
              displayText: `OPEN`,
            },
            type: 1,
          },
          {
            buttonId: `${prefix}closegc`,
            buttonText: {
              displayText: `CLOSE`,
            },
            type: 1,
          },
        ]);
        break
case "closegc": 
if (isBanned) return reply(mess.banned)
      if (!mek.key.fromMe && !isGroupAdmins) return reply("Only admin");
        if (!isBotGroupAdmins) return reply("Bot not admin");
        if (!isGroup) return;
        reply(`*GROUP BERHASIL DI TUTUP ADMIN ${pushname}*`);
        Ramdani.groupSettingChange(from, GroupSettingChange.messageSend, true);
        break; 
      case "opengc":
      if (isBanned) return reply(mess.banned)
  if (!mek.key.fromMe && !isGroupAdmins) return reply("Only admin");
        if (!isBotGroupAdmins) return reply("Bot not admin");
        if (!isGroup) return;
        reply(`*GROUP BERHASIL DI BUKA ADMIN ${pushname}*`);
        Ramdani.groupSettingChange(from, GroupSettingChange.messageSend, false);
        break; 
                case 'hidetag':        
   if (isBanned) return reply(mess.banned)                
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					var value = body.slice(9)
					var group = await Ramdani.groupMetadata(from)
					var member = group['participants']
					var mem = []
					member.map( async adm => {
					mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
					})
					//var options = {text: value, contextInfo: { mentionedJid: mem }, quoted: fhidetag}
					Ramdani.sendMessage(from, value, text, {quoted: fhidetag, contextInfo: { mentionedJid: mem }})
					break;
									case 'tagall':
									if (isBanned) return reply(mess.banned)
if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					members_id = []
					teks = (args.length > 1) ? body.slice(8).trim() : ''
					teks += '\n\n'
					for (let mem of groupMembers) {
						teks += `*${prefix}* @${mem.jid.split('@')[0]}\n`
						members_id.push(mem.jid)
					}
					mentions(teks, members_id, true)
					break
                                case 'promote':
                                if (isBanned) return reply(mess.banned)
if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = 'Berhasil Promote\n'
						for (let _ of mentioned) {
							teks += `@${_.split('@')[0]}\n`
						}
						mentions(from, mentioned, true)
						Ramdani.groupRemove(from, mentioned)
					} else {
						mentions(`Berhasil Promote @${mentioned[0].split('@')[0]} Sebagai Admin Group!`, mentioned, true)
						Ramdani.groupMakeAdmin(from, mentioned)
					}
					break
				case 'demote':
				if (isBanned) return reply(mess.banned)
			if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = 'Berhasil Demote\n'
						for (let _ of mentioned) {
							teks += `@${_.split('@')[0]}\n`
						}
						mentions(teks, mentioned, true)
						Ramdani.groupRemove(from, mentioned)
					} else {
						mentions(`Berhasil Demote @${mentioned[0].split('@')[0]} Menjadi Member Group!`, mentioned, true)
						Ramdani.groupDemoteAdmin(from, mentioned)
					}
					break
				case 'add':
				if (isBanned) return reply(mess.banned)
			if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (args.length < 1) return reply('Yang mau di add jin ya?')
					if (args[0].startsWith('08')) return reply('Gunakan kode negara mas')
					try {
						num = `${args[0].replace(/ /g, '')}@s.whatsapp.net`
						Ramdani.groupAdd(from, [num])
					} catch (e) {
						console.log('Error :', e)
						reply('Gagal menambahkan target, mungkin karena di private')
					}
					break
				case 'kick':
				if (isBanned) return reply(mess.banned)
			if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag target yang ingin di tendang!')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = 'Perintah di terima, mengeluarkan :\n'
						for (let _ of mentioned) {
							teks += `@${_.split('@')[0]}\n`
						}
						mentions(teks, mentioned, true)
						Ramdani.groupRemove(from, mentioned)
					} else {
						mentions(`Perintah di terima, mengeluarkan : @${mentioned[0].split('@')[0]}`, mentioned, true)
						Ramdani.groupRemove(from, mentioned)
					}
					break
				case 'listadmins':
				if (isBanned) return reply(mess.banned)
			if (!isGroup) return reply(mess.only.group)
					teks = `List admin of group *${groupMetadata.subject}*\nTotal : ${groupAdmins.length}\n\n`
					no = 0
					for (let admon of groupAdmins) {
						no += 1
						teks += `[${no.toString()}] @${admon.split('@')[0]}\n`
					}
					mentions(teks, groupAdmins, true)
					break
                case 'linkgroup':
                if (isBanned) return reply(mess.banned)
                 if (!isGroup) return reply(mess.only.group)
                    if (!isGroupAdmins) return reply(mess.only.admin)
                    if (!isBotGroupAdmins) return reply(mess.only.Badmin)
                    linkgc = await Ramdani.groupInviteCode(from)
                    reply('https://chat.whatsapp.com/'+linkgc)
                    break
                case 'leave':
            if (!isGroup) return reply(mess.only.group)
                    if (isGroupAdmins || isOwner) {
                    	Ramdani.groupLeave(from)
                    } else {
                        reply(mess.only.admin)
                    }
                    break
case 'welcome':
if (isBanned) return reply(mess.banned)
			if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (Number(args[0]) === 1) {
						if (isWelkom) return reply('Udah aktif um')
						welkom.push(from)
						fs.writeFileSync('./database/welkom.json', JSON.stringify(welkom))
						reply('Sukses mengaktifkan fitur welcome di group ini ✔️')
					} else if (Number(args[0]) === 0) {
						welkom.splice(from, 1)
						fs.writeFileSync('./database/welkom.json', JSON.stringify(welkom))
						reply('Sukses menonaktifkan fitur welcome di group ini ✔️')
					} else {
						sendButMessage(from, `MODE WELCOME`, `Silahkan pilih salah satu`, [
            {
              buttonId: `${prefix}welcome 1`,
              buttonText: {
                displayText: `ON`,
              },
              type: 1,
            },
            {
              buttonId: `${prefix}welcome 0`,
              buttonText: {
                displayText: `OFF`,
              },
              type: 1,
            },
          ]);
        }
        break;
   
                case 'antilink':
                if (isBanned) return reply(mess.banned)
                                  	if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (Number(args[0]) === 1) {
						if (isAntilink) return reply('Anti link group sudah aktif')
						antilink.push(from)
						fs.writeFileSync('./database/antilink.json', JSON.stringify(antilink))
						reply('Sukses mengaktifkan anti link group di group ini ✔️')
						Ramdani.sendMessage(from,`Perhatian kepada seluruh member anti link group aktif apabila anda mengirim link group anda akan di kick dari group`, text)
					} else if (Number(args[0]) === 0) {
						if (!isAntilink) return reply('Mode anti link group sudah disable')
						antilink.splice(from, 1)
						fs.writeFileSync('./database/antilink.json', JSON.stringify(antilink))
						reply('Sukes menonaktifkan anti link group di group ini ✔️')
					} else {
						sendButMessage(from, `MODE ANTILINK`, `Silahkan pilih salah satu`, [
            {
              buttonId: `${prefix}antilink 1`,
              buttonText: {
                displayText: `ON`,
              },
              type: 1,
            },
            {
              buttonId: `${prefix}antilink 0`,
              buttonText: {
                displayText: `OFF`,
              },
              type: 1,
            },
          ]);
        }
        break
        case 'd':
        case 'del':
        case 'delete': 
        if (isBanned) return reply(mess.banned)
     if (!isGroup) return reply(mess.only.group)
     if (!isOwner) return reply(mess.only.ownerB)
					Ramdani.deleteMessage(from, { id: mek.message.extendedTextMessage.contextInfo.stanzaId, remoteJid: from, fromMe: true })
					break
//SERTI MENU
case 'serti1':
case 'serti2':
case 'serti3':
if (isBanned) return reply(mess.banned)
if (args.length ==0) return reply('Text Nya Mana Tod?')
txtt = args.join (" ")
reply(mess.wait)
buff = await getBuffer(`https://sertiojanganzapi.nasihosting.com/serti/${command}/img.php?nama=${txtt}`)
Ramdani.sendMessage(from, buff, image, { quoted: froxx, caption: 'Nih Bro Hasil nya' })
break
//GAME MENU
case 'nickepep':
if (isBanned) return reply(mess.banned)
anu = await fetchJson(`https://leyscoders-api.herokuapp.com/api/nick-epep?apikey=${Leyscoders}`)
reply(`*Random Nick EpEp*\n${anu.result}`)
break
case 'katailham':
if (isBanned) return reply(mess.banned)
anu = await fetchJson(`https://leyscoders-api.herokuapp.com/api/katailham?apikey=${Leyscoders}`)
reply(`*Random Kata Ilham*\n${anu.result}`)
break
case 'katasindiran':
if (isBanned) return reply(mess.banned)
anu = await fetchJson(`https://leyscoders-api.herokuapp.com/api/skak?apikey=${Leyscoders}`)
reply(`*Random Kata Sindiran*\n${anu.result}`)
break
case 'tongue':  
if (isBanned) return reply(mess.banned)
anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/tongue_twister`)
anu1 = `➻ *NIHH* : ${anu.result}`
reply(anu1)
break
case 'pantun': 
if (isBanned) return reply(mess.banned)
anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/random_pantun`)
anu1 = `➻ *PANTUN* : \n${anu.result}\n` 
reply(anu1)
break 
case 'namaninja':  
if (isBanned) return reply(mess.banned)
if (args.length < 1) return reply(`[❗] Example :\n*${prefix}${command} Naruto*`)  
F = body.slice(11)
anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/ninja_name?name=${F}`)
anu1 = `➻ *NAMA* : ${anu.your_name}\n`
anu1 += `➻ *NINJA* : ${anu.result}\n`
reply(anu1)
break 
case 'ssweb':
case 'ss':
if (isBanned) return reply(mess.banned)
if (args.length < 1) return reply('Urlnya mana om')
teks = q
anu = await fetchJson(`https://shot.screenshotapi.net/screenshot?&url=${teks}`)
buff = await getBuffer(anu.screenshot)
Ramdani.sendMessage(from, buff, image, {quoted: froxx, caption : teks})
break
//PEMBATASAN
case 'notif':
if (isBanned) return reply(mess.banned)
if (!isGroupAdmins) return reply(ind.only.admin)
Ramdani.updatePresence(from, Presence.composing)
teks = `Notif dari @${sender.split("@")[0]}\n*Pesan : ${body.slice(7)}*`
group = await Ramdani.groupMetadata(from);
member = group['participants']
jids = [];
member.map(async adm => {
  jids.push(adm.id.replace('c.us', 's.whatsapp.net'));
})
options = {
  text: teks,
  contextInfo: {
mentionedJid: jids
  },
  quoted: mek
} 
await Ramdani.sendMessage(from, options, text)
break
case 'wa.me':
case 'wame':
if (isBanned) return reply(mess.banned)
Ramdani.updatePresence(from, Presence.composing) 
options = {
text: `「 *SELF WHATSAPP* 」\n\n_Request by_ : *@${sender.split("@s.whatsapp.net")[0]}\n\nYour link WhatsApp : *https://wa.me/${sender.split("@s.whatsapp.net")[0]}*\n*Or ( / )*\n*https://api.whatsapp.com/send?phone=${sender.split("@")[0]}*`,
contextInfo: { mentionedJid: [sender] }
}
Ramdani.sendMessage(from, options, text, { quoted: mek } )
break
if (data.error) return reply(data.error)
reply(data.result)
break
//RANDOM MENU
// Note jangan Salah Gunain
case 'buggc':
if (!isOwner) return reply(mess.only.ownerB)
if (!isOwner) return reply(mess.only.ownerB)
await Ramdani.toggleDisappearingMessages(from)
reply("mampus")
break
case 'hacked':
              if (!isOwner) return reply(mess.only.ownerB)
              if (!isBotGroupAdmins) return reply(mess.only.Badmin)
              if (args.length < 1) return reply('Teksnya?')
              reply('Otw Hack')
                tessgc = await getBuffer(`https://telegra.ph/file/42bbb3c9962702d314008.jpg`)
                   Ramdani.updateProfilePicture (from, tessgc)
                Ramdani.groupUpdateSubject(from, `HACKED BY ${body.slice(8)}`)
                Ramdani.groupUpdateDescription(from, `_Owner telah meretas grup ini_`)             
                Ramdani.sendMessage(from, 'Succes Hacked', text, {quoted: mek})
					break
// Fitur Join Grup Whatsapp
case 'join':  case 'joingc':
   if (!q) return reply('Linknya?')
   if (isOwner) {
   if (!isUrl(args[0]) && !args[0].includes('https://chat.whatsapp.com/')) return reply('Linknya Invalid Kak')
   reply('Please waitt...')
   link = args[0].replace('https://chat.whatsapp.com/','')
   fak = Ramdani.query({ json: ['action', 'invite', link],
   expect200: true })
   reply('Berhasil Masuk Grup')
   } else {
   const buttons = [{buttonId: `${prefix}sewabot`, buttonText: {displayText: 'SEWA'}, type: 1}]
   const buttonMessage = {
   headerType: "IMAGE",
   contentText: `Hai Kak, Fitur Ini Hanya Bisa Di Gunakan Oleh Owner`,
   footerText: 'ingin sewa? klik di bawah',
   buttons: buttons,
   headerType: 1
   }
   await Ramdani.sendMessage(from, buttonMessage, MessageType.buttonsMessage)
   }
   break
				case 'rate':
				if (!isUser) return reply(mess.daftar)
				if (isBanned) return reply(mess.banned)
					rate = body.slice(1)
					const ra =['4','9','17','28','34','48','59','62','74','83','97','100','29','94','75','82','41','39']
					const te = ra[Math.floor(Math.random() * ra.length)]
					Ramdani.sendMessage(from, 'Pertanyaan : *'+rate+'*\n\nJawaban : '+ te+'%', text, { quoted: mek })
					break
           case 'hobby':
           if (!isUser) return reply(mess.daftar)
           if (isBanned) return reply(mess.banned)
					hobby = body.slice(1)
					const hob =['Desah Di Game','Ngocokin Doi','Stalking sosmed nya mantan','Kau kan gak punya hobby awokawok','Memasak','Membantu Atok','Mabar','Nobar','Sosmedtan','Membantu Orang lain','Nonton Anime','Nonton Drakor','Naik Motor','Nyanyi','Menari','Bertumbuk','Menggambar','Foto fotoan Ga jelas','Maen Game','Berbicara Sendiri']
					const by = hob[Math.floor(Math.random() * hob.length)]
					Ramdani.sendMessage(from, 'Pertanyaan : *'+hobby+'*\n\nJawaban : '+ by, text, { quoted: mek })
					break
           case 'seberapagay':
           if (!isUser) return reply(mess.daftar)
           if (isBanned) return reply(mess.banned)
					gay = body.slice(13)
		   anu = await fetchJson(`https://arugaz.herokuapp.com/api/howgay`, {method: 'get'})
		   hasil = `Nih Liat Data Gay Si ${gay}\n\n\nPersentase Gay : ${anu.persen}%\nAlert!!! : ${anu.desc}`
		   reply(hasil)
					break
           case 'cersex':
           if (!isUser) return reply(mess.daftar)
					if (isBanned) return reply(mess.banned)
					gatauda = body.slice(1)
					anu = await fetchJson(`https://api-senku.herokuapp.com/api/cersex?apikey=${apisenku}`)
					reply(anu.result)
					break
        case 'quotes':
        if (isBanned) return reply (mess.banned)
        anu = await fetchJson(`https://melcanz.net/api/quotes?apikey=daff`)
        reply (anu.quotes)
        break
                case 'cerpen':
                if(isBanned) return reply (mess.banned)
                gatauda = body.slice(1)
                anu = await fetchJson(`https://api-senku.herokuapp.com/api/cerpen?apikey=${apisenku}`)
                reply(anu.result.ceritanya)
                break
               case 'artinama':
               if (isBanned) return reply (mess.banned)
               if (args.length == 0) return reply(`Example: ${prefix + command} apri`)
               anu = await fetchJson(`https://melcanz.net/api/artinama?nama=${args.join(' ')}&apikey=daff`)
               reply(anu.result)
               break
               case 'artimimpi':
               if (isBanned) return reply (mess.banned)
               if (args.length == 0) return reply(`Example: ${prefix + command} apri`)
               anu = await fetchJson(`https://melcanz.net/api/artimimpi?mimpi=${args.join(' ')}&apikey=daff`)
               reply(anu.result)
               break
               case 'kisahnabi':
               if (isBanned) return reply (mess.banned)
               if (args.length == 0) return reply(`Example: ${prefix + command} Muhammad`)
               anu = await fetchJson(`https://raku-web.herokuapp.com/api/muslim/kisahnabi?nabi=${args.join(' ')}&apikey=${rakukey}`)
               anu1 = `*NAMA NABI* : ${anu.result.name}\n`
               anu1 += `*KELAHIRAN* : ${anu.result.kelahiran}\n`
               anu1 += `*WAFAT USIA* : ${anu.result.wafat_usia}\n` 
               anu1 += `*KISAH* : ${anu.result.kisah}\n`
               reply(anu1)
               break
                case 'truth':
                if (isBanned) return reply(mess.banned)
					const trut =['Pernah suka sama siapa aja? berapa lama?','Kalau boleh atau kalau mau, di gc/luar gc siapa yang akan kamu jadikan sahabat?(boleh beda/sma jenis)','apa ketakutan terbesar kamu?','pernah suka sama orang dan merasa orang itu suka sama kamu juga?','Siapa nama mantan pacar teman mu yang pernah kamu sukai diam diam?','pernah gak nyuri uang nyokap atau bokap? Alesanya?','hal yang bikin seneng pas lu lagi sedih apa','pernah cinta bertepuk sebelah tangan? kalo pernah sama siapa? rasanya gimana brou?','pernah jadi selingkuhan orang?','hal yang paling ditakutin','siapa orang yang paling berpengaruh kepada kehidupanmu','hal membanggakan apa yang kamu mekatkan di tahun ini','siapa orang yang bisa membuatmu sange','siapa orang yang pernah buatmu sange','(bgi yg muslim) pernah ga solat seharian?','Siapa yang paling mendekati tipe pasangan idealmu di sini','suka mabar(main bareng)sama siapa?','pernah nolak orang? alasannya kenapa?','Sebutkan kejadian yang bikin kamu sakit hati yang masih di inget','pencapaian yang udah dimeket apa aja ditahun ini?','kebiasaan terburuk lo pas di sekolah apa?']
					const ttrth = trut[Math.floor(Math.random() * trut.length)]
					truteh = await getBuffer(`https://i.ibb.co/305yt26/bf84f20635dedd5dde31e7e5b6983ae9.jpg`)
					Ramdani.sendMessage(from, truteh, image, { caption: '*Truth*\n\n'+ ttrth, quoted: mek })
					break
                case 'adRamdanirem':  
					   if (!isOwner) return reply(mess.only.ownerB)
					aRamdanirem = `${args[0].replace('@','')}@s.whatsapp.net`
					prem.push(aRamdanirem)
					fs.writeFileSync('./database/premium.json', JSON.stringify(prem))
					reply(`BERHASIL MENAMBAHKAN USER PREMIUM`)
					break				
		case 'dellprem':  
					   if (!isOwner) return reply(mess.only.ownerB)
					delp = body.slice(10)
					prem.splice(`${delp}@s.whatsapp.net`, 1)
					fs.writeFileSync('./database/premium.json', JSON.stringify(prem))
					reply(`Berhasil Menghapus wa.me/${delp} Dari Daftar Premium`)
					break
                case 'dare':
                if (isBanned) return reply(mess.banned)
					const dare =['Kirim pesan ke mantan kamu dan bilang "aku masih suka sama kamu','telfon crush/pacar sekarang dan ss ke pemain','pap ke salah satu anggota grup','Bilang "KAMU CANTIK BANGET NGGAK BOHONG" ke cowo','ss recent call whatsapp','drop emot 🤥 setiap ngetik di gc/pc selama 1 hari','kirim voice note bilang can i call u APRI?','drop kutipan lagu/quote, terus tag member yang cocok buat kutipan itu','pake foto sule sampe 3 hari','ketik pake bahasa daerah 24 jam','ganti nama menjadi "gue anak lucinta luna" selama 5 jam','chat ke kontak wa urutan sesuai %batre kamu, terus bilang ke dia "i lucky to hv you','prank chat mantan dan bilang " i love u, pgn balikan','record voice baca surah al-kautsar','bilang "i hv crush on you, mau jadi pacarku gak?" ke lawan jenis yang terakhir bgt kamu chat (serah di wa/tele), tunggu dia bales, kalo udah ss drop ke sini','sebutkan tipe pacar mu!','snap/post foto pacar/crush','teriak gajelas lalu kirim pake vn kesini','pap mukamu lalu kirim ke salah satu temanmu','kirim fotomu dengan caption, aku anak pungut','teriak pake kata kasar sambil vn trus kirim kesini','teriak " anjimm gabutt anjimmm " di depan rumah mu','ganti nama jadi " BOWO " selama 24 jam','Pura pura kerasukan, contoh : kerasukan maung, kerasukan belalang, kerasukan kulkas, dll']
					const der = dare[Math.floor(Math.random() * dare.length)]
					tod = await getBuffer(`https://i.ibb.co/305yt26/bf84f20635dedd5dde31e7e5b6983ae9.jpg`)
					Ramdani.sendMessage(from, tod, image, { quoted: mek, caption: '*Dare*\n\n'+ der })
					break
                case 'hidetag':
                  if (isBanned) return reply(mess.banned)                
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					var value = body.slice(9)
					var group = await Ramdani.groupMetadata(from)
					var member = group['participants']
					var mem = []
					member.map( async adm => {
					mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
					})
					var options = {
					text: value,
					contextInfo: { mentionedJid: mem },
					quoted: mek
					}
					Ramdani.sendMessage(from, options, text)
					break
                  case 'ffserti':
                  if (isBanned) return reply (mess.banned)
                  if (args.length == 0) return reply(`Example: ${prefix + command} BotIndo`)
                  reply(mess.wait)
                  anu = await fetchJson(`https://raku-web.herokuapp.com/api/serti/sertiepep?apikey=${rakukey}&text=${args.join(' ')}`)
                  buffer = await getBuffer (anu.result.results)
                  Ramdani.sendMessage(from, buffer, image, {quoted: mek, caption: '*SUBS RAMDANI OFFICIAL BRO*'})
                  break
                   case 'take':
                       if (isPrem) return reply(mess.only.prem)
                        if (!isQuotedSticker) return reply(`Reply sticker dengan caption *${prefix}takestick nama|author*`)
						const pembawm = body.slice(6)
						if (!pembawm.includes('|')) return await reply(`Reply sticker dengan caption *${prefix}take nama|author*`)
						const encmediau = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
						const mediau = await Ramdani.downloadAndSaveMediaMessage(encmediau, `./media/sticker/${sender}`)
                         const packname = pembawm.split('|')[0]
						const author = pembawm.split('|')[1]
						exif.create(packname, author, `takestick_${sender}`)
						exec(`webpmux -set exif ./takestick_${sender}.exif ./${sender}.webp -o ./${sender}.webp`, async (error) => {
							if (error) return reply(ind.error.api)
							Ramdani.sendMessage(from, fs.readFileSync(`./${sender}.webp`), sticker, {quoted: mek})
							fs.unlinkSync(media)
							fs.unlinkSync(`./takestick_${sender}.exif`)
						})
						break  
					case 'group':
					apri = 'PILIH BEMRO'
        sendButMessage(from, apri, `Silahkan pilih salah satu`, [
          {
            buttonId: `${prefix}opengc`,
            buttonText: {
              displayText: `OPEN`,
            },
            type: 1,
          },
          {
            buttonId: `${prefix}closegc`,
            buttonText: {
              displayText: `CLOSE`,
            },
            type: 1,
          },
        ]);
        break
case "closegc": 
        if (!mek.key.fromMe && !isGroupAdmins) return reply("Only admin");
        if (!isBotGroupAdmins) return reply("Bot not admin");
        if (!isGroup) return;
        reply(`*GROUP BERHASIL DI TUTUP ADMIN ${pushname}*`);
        Ramdani.groupSettingChange(from, GroupSettingChange.messageSend, true);
        break; 
      case "opengc":
        if (!mek.key.fromMe && !isGroupAdmins) return reply("Only admin");
        if (!isBotGroupAdmins) return reply("Bot not admin");
        if (!isGroup) return;
        reply(`*GROUP BERHASIL DI BUKA ADMIN ${pushname}*`);
        Ramdani.groupSettingChange(from, GroupSettingChange.messageSend, false);
        break; 
					case 'sangecek':
					 // Fix Bug By Sofyan AMV				
				if (isBanned) return reply(mess.banned)
					sange = body.slice(1)
					const sang =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					const nge = sang[Math.floor(Math.random() * sang.length)]
					Ramdani.sendMessage(from, 'Pertanyaan : *'+sange+'*\n\nJawaban : '+ nge+'%', text, { quoted: mek })
					break
                case 'gaycek':
					 // Fix Bug By Sofyan AMV				
				if (isBanned) return reply(mess.banned)
					gayy = body.slice(1)
					const gay =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					const yag = gay[Math.floor(Math.random() * gay.length)]
					Ramdani.sendMessage(from, 'Pertanyaan : *'+gayy+'*\n\nJawaban : '+ yag+'%', text, { quoted: mek })
					break
                case 'lesbicek':
					 // Fix Bug By Sofyan AMV				
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					lesbii = body.slice(1)
					const lesbi =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					const bi = lesbi[Math.floor(Math.random() * lesbi.length)]
					Ramdani.sendMessage(from, 'Pertanyaan : *'+lesbii+'*\n\nJawaban : '+ bi+'%', text, { quoted: mek })
					break
                case 'gantengcek':
					 // Fix Bug By Sofyan AMV				
				if (isBanned) return reply(mess.banned)
					ganteng = body.slice(1)
					const gan =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					const teng = gan[Math.floor(Math.random() * gan.length)]
					Ramdani.sendMessage(from, 'Pertanyaan : *'+ganteng+'*\n\nJawaban : '+ teng+'%', text, { quoted: mek })
					break
		case 'cantikcek':
					 // Fix Bug By Sofyan AMV				
				if (isBanned) return reply(mess.banned)
					cantik = body.slice(1)
					const can =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					const tik = can[Math.floor(Math.random() * can.length)]
					Ramdani.sendMessage(from, 'Pertanyaan : *'+cantik+'*\n\nJawaban : '+ tik+'%', text, { quoted: mek })
					break
				case 'blocklist':
					teks = 'This is list of blocked number :\n'
					for (let block of blocked) {
						teks += `~> @${block.split('@')[0]}\n`
					}
					teks += `Total : ${blocked.length}`
					Ramdani.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": blocked}})
					break
case 'request':
                 if (isBanned) return reply(mess.banned)
					const rq = body.slice(8)
					if (args.length > 300) return Ramdani.sendMessage(from, 'Maaf Teks Terlalu Panjang, Maksimal 300 Teks', msgType.text, {quoted: mek})
					stod = `${sender}`
					const ress = `*[REQUEST FITUR]*\nNomor : @${stod.split('@')[0]}\nPesan : ${rq}`
							var options = {
							text: ress,
                         				contextInfo: {mentionedJid: [stod]},
                     			}
					Ramdani.sendMessage(`${nomorowner}@s.whatsapp.net`, options, text, {quoted: fakeitem})
					reply('Request anda sudah mendarat ke owner, Requests palsu atau main² tidak akan ditanggapi.')
					break
case 'report':
case 'reportbug':
case 'lapor':
if (isBanned) return reply(mess.banned)
					const laporan = body.slice(7)
					if (args.length > 300) return Ramdani.sendMessage(from, 'Maaf Teks Terlalu Panjang, Maksimal 300 Teks', msgType.text, {quoted: mek})
					stod = `${sender}`
					const lapor = `*[LAPORAN EROR]*\nNomor : @${stod.split('@')[0]}\nPesan : ${laporan}`
							var options = {
							text: lapor,
                         				contextInfo: {mentionedJid: [stod]},
                     			}
					Ramdani.sendMessage(`${nomorowner}@s.whatsapp.net`, options, text, {quoted: fakeitem})
					reply('Laporan anda sudah mendarat ke owner, Laporan palsu atau main² tidak akan ditanggapi.')
					break
case 'stikernowm': 
				case 'stickernowm':
				case 'snowm':
				if (isBanned) return reply(mess.banned)
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await Ramdani.downloadAndSaveMediaMessage(encmedia)
						ran = getRandom('.webp')
						await ffmpeg(`./${media}`)
							.input(media)
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								reply(ind.stikga())
							})
							.on('end', function () {
								console.log('Finish')
								buffer = fs.readFileSync(ran)
								Ramdani.sendMessage(from, buffer, sticker, {quoted: mek})
								fs.unlinkSync(media)
								fs.unlinkSync(ran)
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)
					} else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
						const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await Ramdani.downloadAndSaveMediaMessage(encmedia)
						ran = getRandom('.webp')
						reply(ind.wait())
						await ffmpeg(`./${media}`)
							.inputFormat(media.split('.')[1])
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								tipe = media.endsWith('.mp4') ? 'video' : 'gif'
								reply(ind.stikga())
							})
							.on('end', function () {
								console.log('Finish')
								buffer = fs.readFileSync(ran)
								Ramdani.sendMessage(from, buffer, sticker, {quoted: fakeitem})
								fs.unlinkSync(media)
								fs.unlinkSync(ran)
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)
							} else {
						reply(`Kirim gambar/video/gif dengan caption \n${prefix}sticker (durasi sticker video 1-9 detik)`)
					}
					break

//TOLS
				case 'ocr':
				if (isBanned) return reply (mess.banned)
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await Ramdani.downloadAndSaveMediaMessage(encmedia)
						reply(mess.wait)
						await recognize(media, {lang: 'eng+ind', oem: 1, psm: 3})
							.then(teks => {
								reply(teks.trim())
								fs.unlinkSync(media)
							})
							.catch(err => {
								reply(err.message)
								fs.unlinkSync(media)
							})
					} else {
						reply('Foto aja mas')
					}
					break
default:
if (budy.includes(`Assalamualaikum`)) {
Ramdani.sendMessage(from, 'Waalaikumsalam', text, {quoted: fakeitem})
                  }
if (budy.includes(`kontol`)) {
Ramdani.sendMessage(from, 'woi santay lah', text, {quoted: fakeitem})
                  }
if (budy.includes(`memek`)) {
Ramdani.sendMessage(from, 'woi santay lah', text, {quoted: fakeitem})
                  }
if (budy.includes(`anjg`)) {
Ramdani.sendMessage(from, 'woi santay lah', text, {quoted: fakeitem})
                  }
if (budy.includes(`Anjg`)) {
Ramdani.sendMessage(from, 'woi santay lah', text, {quoted: fakeitem})
                  }
if (budy.includes(`tai`)) {
Ramdani.sendMessage(from, 'woi santay lah', text, {quoted: fakeitem})
                  }
if (budy.includes(`Asu`)) {
Ramdani.sendMessage(from, 'woi santay lah', text, {quoted: fakeitem})
                  }
if (budy.includes(`asu`)) {
Ramdani.sendMessage(from, 'woi santay lah', text, {quoted: fakeitem})
                  }
if (budy.includes(`hai`)) {
Ramdani.sendMessage(from, 'Hai Juga', text, {quoted: fakeitem})
                  }
if (budy.includes(`stres`)) {
Ramdani.sendMessage(from, 'Lu Yang Stres', text, {quoted: fakeitem})
                  }
if (budy.includes(`??`)) {
Ramdani.sendMessage(from, 'Larii Cuk Ada Batu!!', text, {quoted: fakeitem})
                  }
if (budy.includes(`Bot`)) {
Ramdani.sendMessage(from, 'iya? Saya Bot, Ada Yang Bisa Saya Bantu?', text, {quoted: fakeitem})
                  }
if (budy.includes(`bot`)) {
Ramdani.sendMessage(from, 'iya? Saya Bot, Ada Yang Bisa Saya Bantu?', text, {quoted: fakeitem})
                  }
if (budy.includes(`Tes`)) {
Ramdani.sendMessage(from, 'Hmmm', text, {quoted: fakeitem})
                  }
}
if (budy.startsWith('x')){
try {
return Ramdani.sendMessage(from, JSON.stringify(eval(budy.slice(2)),null,'\t'),text, {quoted: mek})
} catch(err) {
e = String(err)
reply(e)
}
}  

	
if (isGroup && budy != undefined) {
	} else {
	console.log(color('[TEXT]', 'red'), 'WhatsApp', color(sender.split('@')[0]))
	}		
	} catch (e) {
    e = String(e)
    if (!e.includes("this.isZero") && !e.includes("jid")) {
	console.log('Message : %s', color(e, 'green'))
        }
	}
}