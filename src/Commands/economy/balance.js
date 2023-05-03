const { EmbedBuilder } = require("discord.js"),
  Command = require("../../Structures/Command"),
  Db = require("../../Structures/Db");

module.exports = class extends Command {
  constructor(...args) {
    super(...args, {
      aliases: ["money", "cash", "wallet", "bal", "$", "€", "£"],
      category: "Economy",
      description: "Shows user balance",
    });
  }

  async run(message) {
    let user = message.author.id;
    let userEconomy = await Db("economy").then((c) => c.findOne({ user }));
    let amountBank = userEconomy?.amountBank ?? 0;
    let amountPocket = userEconomy?.amountPocket ?? 0;

    const e = new EmbedBuilder().setColor("Random").addFields({
      name: `${this.client.users.cache.get(user).tag}\'s balance`,
      value: [
        `Pocket: ${amountPocket ? amountPocket : "0"}`,
        `Bank: ${
          amountBank.toLocaleString() ? amountBank.toLocaleString() : "0"
        }`,
        `Total: ${amountPocket + amountBank ? amountPocket + amountBank : "0"}`,
      ].join("\n"),
    });
    return message.channel.send({ embeds: [e] });
  }
};
