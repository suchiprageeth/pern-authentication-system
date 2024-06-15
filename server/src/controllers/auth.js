const db = require('../db');

exports.getUsers = async (req, res) => {
    try {
        const {rows} = await db.query("SELECT * FROM users");
        console.log(6, rows)
        // res.json(users.rows);
    } catch (err) {
        console.error(err.message);
    }
}