"use strict";

const { ActivityType } = require("discord.js");
const Event = require("../Structures/Event");

module.exports = class extends Event {
  constructor(...args) {
    super(...args, {
      once: true,
    });
  }

  async run() {
    const client = this.client;

    const keywords = [
      "kys",
      "ky2",
      "killyourself",
      "k y 2",
      "k y s",
      "k.y.s",
      "KYS",
      "Kys",
      "KYs",
      "kYs",
      "kyS",
      "nigga",
      "Nigga",
      "nigger",
      "white trash",
      "White trash",
      "example",
    ];

    client.on("presenceUpdate", (_, newPresence) => {
      const member = newPresence.member;

      if (
        member?.presence?.activities.some((activity) => ActivityType.Custom)
      ) {
        const customStatus = member.presence.activities.find(
          (activity) => ActivityType.Custom
        );

        if (customStatus && customStatus.state) {
          const statusWords = customStatus.state.split(" ");
          const matchedKeywords = statusWords.filter((word) =>
            keywords.includes(word.toLowerCase())
          );

          if (matchedKeywords.length > 0) {
            // Ban the user
            if (member.bannable) {
              member
                .ban({ reason: "Custom status contains banned keywords." })
                .then(() => {
                  console.log(
                    `${member.user.tag} has been banned for their custom status.`
                  );
                })
                .catch(console.error);
            }
          }
        }
      }
    });

    client.logger.ready(
      `Connected to ${
        client.user.tag
      } with ${client.guilds.cache.size.toLocaleString()} servers and ${client.guilds.cache
        .reduce((p, g) => p + g.memberCount, 0)
        .toLocaleString()} members`,
      { shard: "Manager" }
    );
    process.on("unhandledRejection", (err) => client.logger.error(err.stack));
  }
};
