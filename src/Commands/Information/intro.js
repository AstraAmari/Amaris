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
    if (message.content.includes("1096235445563691071")) {
      const embed = new EmbedBuilder().addFields({
        name: "Howdy, I'm Hailey",
        value: [
          `Role: Founder`,
          `Age: 21`,
          `\u200b`,
          `Hello, my name is Kheyli(khey-l-a), also known as Hailey in English.`,
          `I am 21 years old and have been engaged to the beautiful <@1060069099662749696> for 8 and a half years.`,
          `Currently, I reside in the United Kingdom, although I was born in Moscow, Russia.`,
          `Interestingly, my mother tongue is German, which may seem confusing, but it makes sense if you don't dwell on it too much.`,
        ].join("\n"),
      });
      return message.channel.send({ embeds: [embed] });
    } else if (message.content.includes("1060069099662749696")) {
      const embed = new EmbedBuilder().addFields({
        name: "Hello there, I'm Kennedy",
        value: [
          `Role: Co Founder, Founders Assistant`,
          `Age: 19`,
          `\u200b`,
          `[REDACTED AT THIS TIME]`,
        ].join("\n"),
      });
      return message.channel.send({ embeds: [embed] });
    } else if (message.content.includes("1098268550700994691")) {
      const embed = new EmbedBuilder().addFields({
        name: "Hello there, I'm Aster",
        value: [
          `Role: Partner Manager`,
          `Age: 15`,
          `\u200b`,
          `Hello! You can call me Aster, Verlaine, Azur or Solaria, but most people call me Aster.`,
          `Since I am currently 15, I'm probably the youngest staff member and also the most immature one. :P`,
          `I don't really feel comfortable with she/her pronouns so please only use they/them for me.`,
          `I joined Amaris Development at the end of may but went on a huge break because of my exams, so I didn't really interact much with other people except Hailey, so I hope to be able to meet more people soon! <3`,
        ].join("\n"),
      });
      return message.channel.send({ embeds: [embed] });
    } else if (message.content.includes("925615206351122432")) {
      const embed = new EmbedBuilder().addFields({
        name: "Hello there, I'm Jay",
        value: [
          `Role: CDO`,
          `Age: 19`,
          `\u200b`,
          `I'm an Indian student majoring in Electronics and Communication.`,
          `Over the past two years, I've been actively involved in development work.`,
          `I have a strong passion for this field and enjoy exploring its intricacies.`,
          `If you have any questions or would like to connect, feel free to reach out via direct messages.`,
          `I'm always open to engaging in meaningful discussions and collaborations.`,
        ].join("\n"),
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
        `If you see this message again, the user id you put means its not a user id, or the id provided is not a staff member`,
      ].join("\n"),
    });

    message.channel.send({ embeds: [embed] });
  }
};
