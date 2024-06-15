const { Pool } = require("pg");

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'pern_auth',
    password: 'Suchi@123',
    port: 5444,
    // idleTimeoutMillis: 300
});

module.exports = {
    query: (text, params) => pool.query(text, params),
};