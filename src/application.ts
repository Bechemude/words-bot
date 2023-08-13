// import express from "express";

// const application = express();

// const port = 3000;

// application
//   .get("/", (req, res) => {
//     res.send({
//       message: "Hello, World!",
//     });
//   })
//   .get("/random", (req, res) => {
//     res.send({
//       number: Math.floor(Math.random() * 100),
//     });
//   });

// application.listen(port, () => {
//   console.log(`Application listening on port ${port}`);
// });

console.log('test');

const { Telegraf } = require('telegraf');
const { message } = require('telegraf/filters');

const bot = new Telegraf('6369856859:AAEoDc-liF4Wn7N78HDRyOcZDtoOem5ifRg');
const list = []

bot.start((ctx) => ctx.reply('Welcome'));
bot.on('message', (ctx) => {
  console.log('ctx', ctx);
  console.log('ctx.message', ctx.message);
  list.push(ctx.message)
  list.every(word => ctx.reply(word))
  // ctx.reply(list.toString())
})
bot.help((ctx) => ctx.reply('Send me a sticker'));
bot.on(message('sticker'), (ctx) => ctx.reply('👍'));
bot.hears('hi', (ctx) => ctx.reply('Hey there'));
bot.launch();

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));

