"use strict";

const Command = require("../../Structures/Command");

module.exports = class extends Command {
  constructor(...args) {
    super(...args, {
      name: "gb",
      category: "Owner",
      ownerOnly: true,
    });
  }

  async run(message, args) {
    const member = message.guild.members.cache.get(args[0]);

    if (!member) return message.channel.send(`Please supply an @mention or ID`);

    const reason = args[1];

    if (!reason) return message.channel.send(`Please add a reason`);

    if (member.id === message.author.id)
      return message.channel.send("You cannot ban yourself");

    const networkGuilds = [
      "1096613440694538364",
      "1098328864251457543",
      "1107671775363477617",
      "1108781059765698631",
      "1110222778503802890",
    ];

    if (networkGuilds.includes(member.id)) {
      await message.channel.send(
        `Banned ${member.tag} from ${networkGuilds.length} network guilds`
      );

      await member
        .send(
          `You've been globally banned throughout Amaris servers for ${reason}`
        )
        .catch(() => null);

      await this.client.modLog(
        member.guild.id,
        `${message.author} globally banned ${member.user} for ${reason}`
      );

      return await member.ban();
    } else {
      return message.channel.send(`I cannot ban this user`);
    }
  }
};
