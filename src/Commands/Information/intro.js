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
    if (message.content.includes("@")) {
      const embed = new EmbedBuilder().addFields({
        name: "How To Use",
        value: [
          `Howdy, heres how to use this command`,
          `\u200b`,
          `To use this command, please use the syntax: \`//intro <id of staff member>\``,
          `If you see this message again, the user id you put means its not a user id, or the id provided is not a staff member`,
        ].join("\n"),
      });
      return message.channel.send({ embeds: [embed] });
    }

    const boilerplate = "We're waiting for this staff member to add an intro";

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
          `${boilerplate}`,
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
          `If you have any questions or would like to connect me, feel free to reach out via direct messages.`,
          `I'm always open to engaging in meaningful discussions and collaborations.`,
        ].join("\n"),
      });
      return message.channel.send({ embeds: [embed] });
    } else if (message.content.includes("416898858379902977")) {
      const embed = new EmbedBuilder().addFields({
        name: "Hello there, I'm Kitsune",
        value: [
          `Role: Partner Manager, Server Designer`,
          `Age: [REDACTED]`,
          `\u200b`,
          `${boilerplate}`,
        ].join("\n"),
      });
      return message.channel.send({ embeds: [embed] });
    } else if (message.content.includes("1059225948618240080")) {
      const embed = new EmbedBuilder().addFields({
        name: "Hello there, I'm origincookie",
        value: [
          `Role: Internal Developer`,
          `Age: [REDACTED]`,
          `\u200b`,
          `${boilerplate}`,
        ].join("\n"),
      });
      return message.channel.send({ embeds: [embed] });
    } else if (message.content.includes("1115079130719977612")) {
      const embed = new EmbedBuilder().addFields({
        name: "Hello there, I'm Wyatt",
        value: [
          `Role: CDO`,
          `Age: [REDACTED]`,
          `\u200b`,
          `${boilerplate}`,
        ].join("\n"),
      });
      return message.channel.send({ embeds: [embed] });
    } else if (message.content.includes("1115079130719977612")) {
      const embed = new EmbedBuilder().addFields({
        name: "Hello there, I'm Katenace",
        value: [
          `Role: HOS`,
          `Age: [REDACTED]`,
          `\u200b`,
          `${boilerplate}`,
        ].join("\n"),
      });
      return message.channel.send({ embeds: [embed] });
    } else if (message.content.includes("831640328775532544")) {
      const embed = new EmbedBuilder().addFields({
        name: "Hello there, I'm Aspect",
        value: [
          `Role: Moderator`,
          `Age: [REDACTED]`,
          `\u200b`,
          `${boilerplate}`,
        ].join("\n"),
      });
      return message.channel.send({ embeds: [embed] });
    } else if (message.content.includes("831640328775532544")) {
      const embed = new EmbedBuilder().addFields({
        name: "Hello there, I'm Frex",
        value: [
          `Role: Trial Developer`,
          `Age: [REDACTED]`,
          `\u200b`,
          `${boilerplate}`,
        ].join("\n"),
      });
      return message.channel.send({ embeds: [embed] });
    }

    const embed = new EmbedBuilder().addFields({
      name: "How To Use",
      value: [
        `Howdy, heres how to use this command`,
        `\u200b`,
        `To use this command, please use the syntax: \`//intro <id of staff member>\``,
        `If you see this message again, the user id you put means its not a user id, or the id provided is not a staff member`,
      ].join("\n"),
    });

    message.channel.send({ embeds: [embed] });
  }
};
