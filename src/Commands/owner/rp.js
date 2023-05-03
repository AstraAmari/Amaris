const Command = require("../../Structures/Command");

module.exports = class extends Command {
  constructor(...args) {
    super(...args, {
      name: "rp",
      category: "Owner",
      ownerOnly: true,
    });
  }

  async run(message, args) {
    const member = message.guild.members.cache.get(args[0]);

    if (!member) return message.channel.send(`Please add a user id`);

    member.roles.remove("1097565497467351253").then(async (role) => {
      await message.channel.send(
        `role \"Partner\" removed from ${member.user.tag}`
      );
    });
  }
};
