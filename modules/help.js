exports.run = (client, message, args) => {
     const { Client, RichEmbed } = require('discord.js');
    // We can create embeds using the MessageEmbed constructor
    // Read more about all that you can do with the constructor
    // over at https://discord.js.org/#/docs/main/stable/class/RichEmbed
  const embed = new RichEmbed()
      // Set the title of the field
      // Set the color of the embed
      .setColor('RANDOM')
      // Set the main content of the embed
      .setDescription('**Commands:**\n **!frog:** get a random frog pic from r/frogs \n**!frogloaf:** get a random frogloaf pic from r/FrogLoaf')// \n //
    // Send the embed to the same channel as the message
    message.channel.send(embed);
}