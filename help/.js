const channelId = "1108371068802048000";
const reactionEmoji = "❤️";

if (message.channel.id === channelId && !message.author.bot) {
  message
    .react(reactionEmoji)
    .catch((error) => console.error("Failed to react to message:", error));
}
