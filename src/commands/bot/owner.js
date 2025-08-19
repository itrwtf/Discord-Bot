const Discord = require('discord.js');

module.exports = async (client, interaction, args) => {
    client.embed({
        title: `📘・Owner information`,
        desc: `____________________________`,
        thumbnail: client.user.avatarURL({ dynamic: true, size: 1024 }),
        fields: [{
            name: "👑┆Owner name",
            value: `Tristan`,
            inline: true,
        },
        {
            name: "🏷┆Discord tag",
            value: `</not.itr`,
            inline: true,
        },
        {
            name: "🏢┆Organization",
            value: `itrwtf`,
            inline: true,
        },
        {
            name: "🌐┆Website",
            value: `https://itr.wtf`,
            inline: true,
        }],
        type: 'editreply'
    }, interaction)
}

 
