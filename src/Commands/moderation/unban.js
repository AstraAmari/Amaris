"use strict";

const Command = require("../../Structures/Command");

module.exports = class extends Command {
  constructor(...args) {
    super(...args, {
      name: "unban",
      aliases: ["unbean"],
      category: "Moderation",
      botPerms: [`BanMembers`],
      userPerms: [`BanMembers`],
      args: true,
    });
  }

  async run(message, args) {
    const client = this.client;
    const user = await client.users.fetch(args[0], { force: true });
    if (!user) return message.reply("ID did not match any user");

    message.guild.members.unban(user.id).catch((err) => {
      message.channel.send(`\`\`\`js\n${err.stack}\`\`\``);
    });

    await this.client.modLog(
      message.guild.id,
      `${message.author} unbanned ${user}`
    );
    await message.channel.send(`You have unbanned ${user.tag} | ${user.id}`);
  }
};
