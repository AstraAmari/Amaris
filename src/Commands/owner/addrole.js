const Command = require("../../Structures/Command");

module.exports = class extends Command {
  constructor(...args) {
    super(...args, {
      name: "addrole",
      aliases: ["ar"],
      category: "Owner",
      ownerOnly: true,
    });
  }

  async run(message) {
    const role = message.guild.roles.cache.get("1097254599670386830");

    let count = 0;

    for (const member of message.guild.members.cache) {
      if (!member[1].roles.cache.has(role.id) && !member[1].user.bot) {
        await member[1].roles.add(role);
        count++;
      }
    }

    message.channel.send(`Added the role to ${count} members.`);
  }
};
