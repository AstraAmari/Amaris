const fs = require("fs");

const channelsToTrack = ["channel1", "channel2"]; // Specify the channels you want to track here
const logFilePath = "./message-log.json";

let messageLog = {};

client.on("message", (message) => {
  if (channelsToTrack.includes(message.channel.name)) {
    if (!messageLog[message.author.id]) {
      messageLog[message.author.id] = [];
    }

    messageLog[message.author.id].push({
      channel: message.channel.name,
      content: message.content,
      timestamp: message.createdTimestamp,
    });

    fs.writeFileSync(logFilePath, JSON.stringify(messageLog, null, 2), "utf8");
  }
});

client.on("guildMemberRemove", (member) => {
  if (messageLog[member.id]) {
    for (let i = messageLog[member.id].length - 1; i >= 0; i--) {
      if (channelsToTrack.includes(messageLog[member.id][i].channel)) {
        messageLog[member.id].splice(i, 1);
      }
    }

    fs.writeFileSync(logFilePath, JSON.stringify(messageLog, null, 2), "utf8");
  }
});
