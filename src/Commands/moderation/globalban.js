"use strict";

const Command = require("../../Structures/Command");

module.exports = class extends Command {
  constructor(...args) {
    super(...args, {
      name: "globalban",
      aliases: ["gb"],
      category: "moderation",
      userPerms: ["BanMembers"],
    });
  }

  async run(message, args) {
    const client = this.client;

    const member = message.guild.members.cache.get(args[0]);

    if (!member) return message.reply("either this user is not in this guild, or the id is incorrect");

    // Get list of guilds bot is in
    client.guilds.cache.forEach(async (guild) => {
      if (member) {
        await member
          .ban({ reason: "Global ban" })
          .catch(() =>
            message.channel.send(
              `Failed to ban ${member.user.tag} from ${guild.name}: ${error}`
            )
          );
        message.channel.send(`Banned ${member.user.tag} from ${guild.name}`);
      }
    });
  }
};
