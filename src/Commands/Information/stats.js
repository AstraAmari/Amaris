"use strict";

const Command = require("../../Structures/Command");

module.exports = class extends Command {
  constructor(...args) {
    super(...args, {
      name: "stats",
      category: "Information",
    });
  }
  // eslint-disable-next-line no-unused-vars

  async run(message, args) {

    const msg = message
    
    const getServerStatistics = async () => {
      const guild = msg.guild;

      // Fetch all members
      await guild.members.fetch();

      // Get server creation date
      const creationDate = guild.createdAt;

      // Get total member count
      const memberCount = guild.memberCount;

      // Get banned members count
      const bans = await guild.bans.fetch();
      const bannedCount = bans.size;

      // Get active members count (members who have been active within the last 30 days)
      const thirtyDaysAgo = new Date();
      thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);
      const activeMembers = guild.members.cache.filter(
        (member) => member.joinedAt >= thirtyDaysAgo
      );
      const activeMembersCount = activeMembers.size;

      // Get online members count (members who are currently online)
      const onlineMembers = activeMembers.filter((member) => {
        const presence = member.presence;
        return presence && presence.status !== "offline";
      });
      const onlineMembersCount = onlineMembers.size;

      // Get most common roles
      const roles = guild.roles.cache.filter(
        (role) => role.name !== `@everyone`
      );
      const mostCommonRoles = roles
        .sort((a, b) => b.members.size - a.members.size)
        .first(5)
        .map((role) => ({ name: role.name, memberCount: role.members.size }));

      return {
        creationDate,
        memberCount,
        bannedCount,
        activeMembersCount,
        onlineMembersCount,
        mostCommonRoles,
      };
    };

    const formatNumber = (number) => {
      return number.toLocaleString();
    };

    getServerStatistics()
      .then(
        ({
          creationDate,
          memberCount,
          bannedCount,
          activeMembersCount,
          onlineMembersCount,
          mostCommonRoles,
        }) => {
          const formattedDate = creationDate.toLocaleDateString("en-UK", {
            timeZone: "BST",
          });

          let statisticsMessage = `**Server Statistics since Creation**\n\n`;
          statisticsMessage += `- **Creation Date:** ${formattedDate}\n`;
          statisticsMessage += `- **Total Members:** ${formatNumber(
            memberCount
          )}\n`;
          statisticsMessage += `- **Banned Members:** ${formatNumber(
            bannedCount
          )}\n`;
          statisticsMessage += `- **Active Members (last 30 days):** ${formatNumber(
            activeMembersCount
          )}\n`;
          statisticsMessage += `- **Online Members:** ${formatNumber(
            onlineMembersCount
          )}\n`;

          if (mostCommonRoles.length > 0) {
            statisticsMessage += `\n**Most Common Roles:**\n`;
            mostCommonRoles.forEach((role, index) => {
              statisticsMessage += `${index + 1}. ${role.name}: ${formatNumber(
                role.memberCount
              )} members\n`;
            });
          }

          msg.channel.send(statisticsMessage);
        }
      )
      .catch((error) => {
        console.error(error);
      });
  }
};
