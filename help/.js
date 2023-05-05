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

    message.guild.members.cache.forEach(async (member) => {
      if (!member.roles.cache.has(role.id)) {
        await member.roles.add(role);
        count++;
      }
    });

    message.channel.send(`Added the role to ${count} members.`);
  }
};
