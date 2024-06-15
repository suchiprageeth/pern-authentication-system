const {config} = require('dotenv')
config()

module.exports = {
    PORT: process.env.PORT || 8000,
    SERVER_URL: process.env.SERVER_URL,
    CLIENT_URL: process.env.CLIENT_URL,
    SECRET: process.env.SECRET,
}