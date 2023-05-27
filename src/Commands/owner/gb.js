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
    const client = this.client;

    // const guilds = [
    //   "1098623720647577652",
    //   "1108781059765698631",
    //   "1096613440694538364",
    // ];

    // const networkGulds = client.guilds.cache.get(guilds);

    const members = client.users.cache.get(args[0]);

    if (!members) return message.channel.send(`Add a user id`);

    if (members.id === message.author.id)
      return message.channel.send(`You cannot ban yourself`);

    if (members.id === client.user.id)
      return message.channel.send(`You cannot ban me`);

    const reason = args[1];

    if (!reason) return message.channel.send(`Please add a reason`);

    client.guilds.cache.forEach(async (guild) => {
      const member = guild.members.cache.get(args[0]);
      if (member && member.bannable) {
        await member.ban({ reason: reason });
        await member
          .send(
            `You've been banned from amaris servers for ${reason} by ${message.author.tag}`
          )
          .catch(() => null);
      }
    });

    return message.channel.send(
      `You have banned ${members.tag} throughout amaris servers for ${reason}`
    );
  }
};
