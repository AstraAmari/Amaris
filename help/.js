"use strict";

const Command = require("../../Structures/Command");

module.exports = class extends Command {
  constructor(...args) {
    super(...args, {
<<<<<<< HEAD
      name: "add",
      category: "owner",
=======
      name: "gb",
      category: "Owner",
>>>>>>> 214d3af5241bcdbed5abf41711d27cd5055f5445
      ownerOnly: true,
    });
  }
  // eslint-disable-next-line no-unused-vars

<<<<<<< HEAD
  async run(message) {
    const role = message.guild.roles.cache.get("1097610144285724782");

    let count = 0;

    for (const member of message.guild.members.cache) {
      if (!member[1].roles.cache.has(role.id) && !member[1].user.bot) {
        await member[1].roles.add(role);
        count++;
      }
    }

    message.channel.send(`Added the role to ${count} members.`);
=======
  async run(message, args) {
    const member = message.guild.members.cache.get(args[0]);

    if (!member) return message.channel.send(`please supply an @mention or ID`);

    const reason = args[1];

    if (!reason) return message.channel.send(`please add a reason`);

    if (member.id === message.author.id)
      return message.channel.send("You cannot ban yourself");

    const networkGuilds = [
      "1096613440694538364",
      "1098328864251457543",
      "1107671775363477617",
      "1108781059765698631",
      "1110222778503802890",
    ];

    if (!networkGuilds)
      return message.channel.send(
        `there is either no ids in the networkGuilds arrary or i am simply not in the guild that has been added to that array`
      );

    if (networkGuilds.cache.has(member.id)) {
      await message.channel.send(
        `Banned ${member.tag} from ${networkGuilds.size} network guilds`
      );

      await member
        .send(
          `You\'ve been banned globally throughout Amaris servers for ${reason}`
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
>>>>>>> 214d3af5241bcdbed5abf41711d27cd5055f5445
  }
};
