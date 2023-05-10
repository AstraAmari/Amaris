"use strict";

const Command = require("../../Structures/Command");

module.exports = class extends Command {
  constructor(...args) {
    super(...args, {
      name: "globalban",
      category: "moderation",
      userPerms: ["BanMembers"],
    });
  }

  async run(message) {
    const user = message.mentions.users.first();

    if (!user) return message.reply("Please mention a user to ban.");

    // Get list of guilds bot is in
    const guilds = message.client.guilds.cache.array();

    // Ban user from all guilds
    for (const guild of guilds) {
      const member = await guild.members.fetch(user);
      if (member) {
        try {
          await member.ban({ reason: "Global ban" });
          message.channel.send(`Banned ${user.tag} from ${guild.name}`);
        } catch (error) {
          message.channel.send(
            `Failed to ban ${user.tag} from ${guild.name}: ${error}`
          );
        }
      }
    }

    // Send confirmation message
    message.channel.send(`${user.tag} has been banned from all servers.`);
  }
};
