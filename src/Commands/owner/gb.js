"use strict";

const Command = require("../../Structures/Command");

module.exports = class extends Command {
  constructor(...args) {
    super(...args, {
      name: "gb",
      category: "owner",
      ownerOnly: true,
    });
  }

  async run(message, args) {
    const guilds = [];

    let networkGulds = client.guilds.cache.get(guilds);

    const member = client.users.cache.get(args[0]);

    if (!member) return message.channel.send(`Add a user id`);

    if (member.id === message.author.id)
      return message.channel.send(`You cannot ban yourself`);

    if (member.id === client.user.id)
      return message.channel.send(`You cannot ban me`);

    const reason = args[1];

    if (!reason) return message.channel.send(`Please add a reason`);

    networkGulds.forEach(async () => {
      if (member.bannable) return await member.ban({ reason: reason });
    });

    await member
      .send(
        `You\'ve been banned from amaris servers for ${reason} by ${message.author.tag}`
      )
      .catch(() => null);

    return message.channel.send(
      `You have banned ${member.tag} throughout amaris servers for ${reason}`
    );
  }
};
