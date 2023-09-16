require('dotenv').config();
const dateUtil = require('date-and-time');

// Discord.js versions ^13.0 require us to explicitly define client intents
const { Client, GatewayIntentBits, PermissionsBitField, EmbedBuilder } = require('discord.js');
const client = new Client({
    presence: {
        status: 'online',
        activities: [{
            name: 'with Burgers',
            type: 'PLAYING',
            url: 'https://discord.com'
        }],
    }, intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent, GatewayIntentBits.GuildPresences]
});
client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
    client.user.setActivity('with Burgers');
});

// Log In our bot
client.login(process.env.CLIENT_TOKEN);

client.on("messageCreate", async (message) => {
    //do stuff on message sent
    var contents = message.content.split(" ");
    switch (contents[0]) {

        case "!help":
            const helpEmbed = new EmbedBuilder()
                .setColor(0xEE3D2B)
                .setTitle('RDS Bot Help')
                .setURL('https://www.youtube.com/watch?v=dQw4w9WgXcQ')
                .setAuthor({ name: 'javamaster44 and rukasuba', iconURL: 'https://avatars.githubusercontent.com/u/6344174?v=4', url: 'https://github.com/AryakTheBoss' })
                .setDescription('Here is the command list kekw')
                .setThumbnail('https://i.imgur.com/xD4SvXz.jpeg')
                .addFields(
                    { name: '!checkin', value: "+1 delivery man" },
                    { name: '!checkout', value: "-1 delivery man" },
                );
            message.channel.send({ embeds: [helpEmbed] });
            break;
    }
});