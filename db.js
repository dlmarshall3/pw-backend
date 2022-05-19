const Pool = require('pg').Pool;
require("dotenv").config();

const herokuUsername = process.env.herokuUsername || require('./config.js');
const herokuPassword = process.env.herokuPassword || require('./config.js');
const herokuHost = process.env.herokuHost || require('./config.js');
const herokuDatabase = process.env.herokuDatabase || require('./config.js');

const pool = new Pool({
    user: herokuUsername,
    password: herokuPassword,
    host: herokuHost,
    database: herokuDatabase, 
    port: 5432,
    ssl: {
        rejectUnauthorized: false
    }
})

module.exports = pool