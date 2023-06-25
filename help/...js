const { EmbedBuilder } = require("discord.js");
const Command = require("../../Structures/Command");

module.exports = class extends Command {
  constructor(...args) {
    super(...args, {
      name: "intro",
      category: "Information",
      description: "Staff introductions",
    });
  }

  async run(message, args) {
    if (message.content === "1096235445563691071") {
      const embed = new EmbedBuilder().addFields({
        name: "Howdy, I'm Hailey",
        value: [
          `Hello, my name is Kheyli(khey-l-a), also known as Hailey in English.`,
          `I am 21 years old and have been engaged to the beautiful <@1060069099662749696> for 8 and a half years.`,
          `Currently, I reside in the United Kingdom, although I was born in Moscow, Russia.`,
          `Interestingly, my mother tongue is German, which may seem confusing, but it makes sense if you don't dwell on it too much.`,
        ].join("\n"),
      });
      return message.channel.send({ embeds: [embed] });
    } else if (message.content === "1060069099662749696") {
      const embed = new EmbedBuilder().addFields({
        name: "Test",
        value: [`1`, `2`, `3`, `4`].join("\n"),
      });
      return message.channel.send({ embeds: [embed] });
    }

    const embed = new EmbedBuilder().addFields({
      name: "How To Use",
      value: [
        `Howdy, heres how to use this command`,
        `\u200b`,
        `The people available to choose from is the Founder & Co Founder`,
        `To do so, use this syntax: \`//intro <id of staff member>\``,
      ].join("\n"),
    });

    return message.channel.send({ embed: [embed] });
  }
};
