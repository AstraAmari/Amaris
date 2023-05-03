"use strict";

const Event = require("../Structures/Event");

module.exports = class extends Event {
  constructor(...args) {
    super(...args, {
      once: true,
    });
  }

  async run() {
    const client = this.client;

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
