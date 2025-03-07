const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "true" ;  
global.video= "true" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="samsamsun789@gmail.com"
global.location="Lahore,Pakistan."
global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "120363023983262391@g.us"
global.DATABASE_URI = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/Itxxwasi/WASI-TECH-BOT-V1";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VaDK8ZUDjiOhwFS1cP2j";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VaDK8ZUDjiOhwFS1cP2j" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/733b2d3b5f1d1e1aeec0f.jpg" ; // SET LOGO FOR IMAGE 



global.devs = "94719845166" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "94719845166";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5',  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "true"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOMEWELCOM || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3,
global.disablepm = process.env.DISABLE_PM || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES|| "text",
global.waPresence= process.env.WAPRESENCE ||  "set according to your need" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "923192173398,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923192173398";

global.api_smd = "https://api-smd-1.vercel.app"
global.scan = "https://suhail-md-vtsf.onrender.com/";

module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "V.1.2.8",
  caption : process.env.CAPTION || "ＧＥＮＥＲＴＥＤ ＢＹ ＷＡＳＩ 🇵🇰",
 
  author : process.env.PACK_AUTHER|| "ＩＴＸ",
  packname: process.env.PACK_NAME || "ＷＡＳＩ♥️",
  botname : process.env.BOT_NAME  || "𝗛𝗘𝗦𝗛𝗔𝗡-𝗠𝗗",
  ownername:process.env.OWNER_NAME|| "𝗛𝗘𝗦𝗛𝗔𝗡",

  sessionName:process.env.SESSION_ID || "SUHAIL_21_21_03_06_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUyLFxuICAgICAgICAxMSxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxMTksXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTAxLFxuICAgICAgICAxMjEsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjQ1LFxuICAgICAgICA4LFxuICAgICAgICAxMzQsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTkyLFxuICAgICAgICA3NyxcbiAgICAgICAgMTgxLFxuICAgICAgICA1NixcbiAgICAgICAgNTksXG4gICAgICAgIDIyMixcbiAgICAgICAgMTQzLFxuICAgICAgICA4MyxcbiAgICAgICAgMTUzLFxuICAgICAgICAyNyxcbiAgICAgICAgMTUsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTAsXG4gICAgICAgIDE1MixcbiAgICAgICAgNDEsXG4gICAgICAgIDc0LFxuICAgICAgICAxNzYsXG4gICAgICAgIDk5LFxuICAgICAgICA4OCxcbiAgICAgICAgMTEzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExNixcbiAgICAgICAgMjAsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjAsXG4gICAgICAgIDQ1LFxuICAgICAgICAxNzcsXG4gICAgICAgIDMyLFxuICAgICAgICAxMTUsXG4gICAgICAgIDcwLFxuICAgICAgICAxMzMsXG4gICAgICAgIDk5LFxuICAgICAgICA1NixcbiAgICAgICAgMTAzLFxuICAgICAgICAyMTIsXG4gICAgICAgIDEzMSxcbiAgICAgICAgNTQsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTg0LFxuICAgICAgICAxMDksXG4gICAgICAgIDY2LFxuICAgICAgICAyMjQsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTE4LFxuICAgICAgICAxNDUsXG4gICAgICAgIDExNixcbiAgICAgICAgMjMyLFxuICAgICAgICAxNzgsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTQwLFxuICAgICAgICAyMixcbiAgICAgICAgMjUwLFxuICAgICAgICA3NVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYwLFxuICAgICAgICAxMDYsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTE5LFxuICAgICAgICAxMjcsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjI3LFxuICAgICAgICAyMyxcbiAgICAgICAgNjMsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTYwLFxuICAgICAgICAyMSxcbiAgICAgICAgMTE2LFxuICAgICAgICA3MCxcbiAgICAgICAgNTcsXG4gICAgICAgIDMyLFxuICAgICAgICAyMTksXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjYsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTk0LFxuICAgICAgICAxODEsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTI2LFxuICAgICAgICAxNzAsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMzMsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjI5LFxuICAgICAgICAxNDcsXG4gICAgICAgIDIwNCxcbiAgICAgICAgNjdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMyxcbiAgICAgICAgMjAxLFxuICAgICAgICA3NyxcbiAgICAgICAgMTksXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTIsXG4gICAgICAgIDE2MyxcbiAgICAgICAgOTYsXG4gICAgICAgIDE4NCxcbiAgICAgICAgODIsXG4gICAgICAgIDk1LFxuICAgICAgICAxOTgsXG4gICAgICAgIDI0LFxuICAgICAgICA0NCxcbiAgICAgICAgMjE4LFxuICAgICAgICAxMSxcbiAgICAgICAgNDQsXG4gICAgICAgIDIxNyxcbiAgICAgICAgNzcsXG4gICAgICAgIDc5LFxuICAgICAgICAyNixcbiAgICAgICAgMjAyLFxuICAgICAgICAyMzEsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTgwLFxuICAgICAgICAyMTgsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTI1LFxuICAgICAgICAxMTksXG4gICAgICAgIDE2MixcbiAgICAgICAgMSxcbiAgICAgICAgODNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxNixcbiAgICAgICAgNzgsXG4gICAgICAgIDM3LFxuICAgICAgICAyNDcsXG4gICAgICAgIDI1MSxcbiAgICAgICAgNTIsXG4gICAgICAgIDgyLFxuICAgICAgICAxMjAsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTI5LFxuICAgICAgICAxNTAsXG4gICAgICAgIDIzLFxuICAgICAgICAzOSxcbiAgICAgICAgMjE1LFxuICAgICAgICAzMSxcbiAgICAgICAgNCxcbiAgICAgICAgMTQ1LFxuICAgICAgICA3NCxcbiAgICAgICAgMTQ1LFxuICAgICAgICA0NyxcbiAgICAgICAgMTMyLFxuICAgICAgICAxNzgsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTk1LFxuICAgICAgICA0NCxcbiAgICAgICAgMjQ2LFxuICAgICAgICAyNTIsXG4gICAgICAgIDMsXG4gICAgICAgIDUzLFxuICAgICAgICA3NixcbiAgICAgICAgOTYsXG4gICAgICAgIDgyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjMyLFxuICAgICAgICA2MixcbiAgICAgICAgMTA2LFxuICAgICAgICAzMixcbiAgICAgICAgMTA1LFxuICAgICAgICAyNDMsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjA0LFxuICAgICAgICA1MyxcbiAgICAgICAgMTU4LFxuICAgICAgICAyMixcbiAgICAgICAgMTE5LFxuICAgICAgICAyNTUsXG4gICAgICAgIDk0LFxuICAgICAgICAxOTYsXG4gICAgICAgIDExLFxuICAgICAgICAyMjMsXG4gICAgICAgIDYxLFxuICAgICAgICA2LFxuICAgICAgICAxNDYsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxNjksXG4gICAgICAgIDYyLFxuICAgICAgICAyNTMsXG4gICAgICAgIDIyNixcbiAgICAgICAgMzEsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTgyLFxuICAgICAgICAyNDEsXG4gICAgICAgIDY0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAxMDJcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICA5MSxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDk4XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQyLFxuICAgICAgICAyNCxcbiAgICAgICAgOTYsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTU1LFxuICAgICAgICAxMjgsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTA2LFxuICAgICAgICAxMjksXG4gICAgICAgIDE4LFxuICAgICAgICAxNTIsXG4gICAgICAgIDIyLFxuICAgICAgICA2OCxcbiAgICAgICAgMjEsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjQxLFxuICAgICAgICAxNzgsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTg2LFxuICAgICAgICAxMTEsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjE1LFxuICAgICAgICAyMDksXG4gICAgICAgIDIyLFxuICAgICAgICAyNCxcbiAgICAgICAgOTksXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjU0LFxuICAgICAgICA2MyxcbiAgICAgICAgMjQwLFxuICAgICAgICA5LFxuICAgICAgICAxNzEsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjA2LFxuICAgICAgICAxNzksXG4gICAgICAgIDEyNixcbiAgICAgICAgNjUsXG4gICAgICAgIDIzLFxuICAgICAgICAyMCxcbiAgICAgICAgMTgwLFxuICAgICAgICAxODksXG4gICAgICAgIDg0LFxuICAgICAgICAxNDAsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTUzLFxuICAgICAgICAxNzksXG4gICAgICAgIDMxLFxuICAgICAgICAyNDIsXG4gICAgICAgIDM0LFxuICAgICAgICAyMTUsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTQ0LFxuICAgICAgICAyLFxuICAgICAgICAxNjUsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTUyLFxuICAgICAgICA3NyxcbiAgICAgICAgMTk4LFxuICAgICAgICAxOTMsXG4gICAgICAgIDExNyxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxNTAsXG4gICAgICAgIDE2LFxuICAgICAgICAxMzhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDI0MCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJEbEpKZWQwTFNWL1NuYkJ2ejRiSWtnazFmRXoxNlFZZVMwTmU5UHNYOG5zPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJ1VXE0N3lxRVFKLXVTTmhPMVVybVNRXCIsXG4gIFwicGhvbmVJZFwiOiBcIjJhMjE0ODkxLWVkMTUtNDZjMS1hMDZlLTAwMjgwZjBiMWM3MFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA0NCxcbiAgICAgIDIxNyxcbiAgICAgIDIzLFxuICAgICAgNjYsXG4gICAgICAxMzIsXG4gICAgICAzOSxcbiAgICAgIDQ4LFxuICAgICAgMTE1LFxuICAgICAgMTQ2LFxuICAgICAgMTM0LFxuICAgICAgMjExLFxuICAgICAgMTYyLFxuICAgICAgNTEsXG4gICAgICAxODUsXG4gICAgICAyNTMsXG4gICAgICAxOCxcbiAgICAgIDE5NyxcbiAgICAgIDE1NSxcbiAgICAgIDEwLFxuICAgICAgMTM0XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIwMSxcbiAgICAgIDIzMixcbiAgICAgIDAsXG4gICAgICAyMjgsXG4gICAgICAxNzksXG4gICAgICAxOTgsXG4gICAgICAxMjQsXG4gICAgICA4OCxcbiAgICAgIDExMCxcbiAgICAgIDkwLFxuICAgICAgMjI1LFxuICAgICAgMTQ0LFxuICAgICAgMTQzLFxuICAgICAgMjA4LFxuICAgICAgODMsXG4gICAgICAyMzIsXG4gICAgICAyMDIsXG4gICAgICAyMTMsXG4gICAgICAxNzQsXG4gICAgICAxNTlcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiSFpKOVZCMVZcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjk0NzE5ODQ1MTY2OjM1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwi5LqX8J2XmyAg8J2XmCDwnZemIPCdl5sg8J2XlCDwnZeh8JKGnOC8u++jv1wiLFxuICAgIFwibGlkXCI6IFwiMTU5NDc3MzM2ODAxNjk6MzVAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDS3UxOHEwREVOeWpxTDRHR0FRZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJsWEJIMzdGOFFuL0VRWU9hMlF0SkI1UmFCQ1Y3Q2N5R0NSekgzWjJvZUYwPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIk9LV09EcjVoRzdxVzdENUVkMXJFeVB4ZG9qa2NCbVFzQnFSOUlEaXM0eEMwWU5zSWp0MGVBaVJzYmMzZ3EzdWpYVURGL09oM1F2Z3dDeTN6S21maEJ3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIks5NkdtWlRoZXEyL29qZkpHTDZnS0lTcGRQVnQyWHlsZWUyZERlOGxjbFpjbWpGMXl4b2taaHVtRjE4TGdKUXNvTGpGUXdGM2taNW1sTTVVbk11cmhnPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjk0NzE5ODQ1MTY2OjM1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDExMixcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICA2NixcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDksXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgOTNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTc0MTI5NjA5NSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQU9PTFwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBT09MLmpzb24iOiAie1wia2V5RGF0YVwiOlwiekM0QTVHVWhXUHVNdndCNVVCb2c1Tzl1Y2VCa3BrWnJEWlMxNHZPRDZlOD1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo5MDE1NTI4MTAsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIKfQ==",  // PUT SESSION ID HERE 
  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "RybcWhfzZJ7Wd46dgGE21kLt",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "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",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,

  aitts_Voice_Id : process.env.AITTS_ID || "25",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "5c804a3fc8fb6ca21eeaecacf9935870",
  WORKTYPE: process.env.WORKTYPE||process.env.MODE || "public",
  LANG: process.env.THEME ? process.env.THEME.toUpperCase() : "SUHAIL",



};




























global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
 
