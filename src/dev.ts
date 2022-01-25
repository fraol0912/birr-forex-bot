import makeBot from "./bot";

import { getBotToken } from "./helpers/envHelpers";
import { connectToDB } from "./helpers/connectToDB";

connectToDB();

const bot = makeBot(getBotToken());

console.log("Bot started...");
bot.start();
