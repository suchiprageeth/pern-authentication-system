const db = require('../db');
const { hash } = require('bcryptjs')

exports.getUsers = async (req, res) => {
    try {
        const {rows} = await db.query("SELECT * FROM users");
        console.log(6, rows)
        // res.json(users.rows);
    } catch (err) {
        console.error(err.message);
    }
}

exports.register = async (req, res) => {
    const {email, password} = req.body;
    try {
        const hashedPassword = await hash(password, 10);
        await db.query("INSERT INTO users (email, password) VALUES ($1, $2)", [email, hashedPassword]);
        return res.status(201).json({
            success: true,
            message: 'User created successfully!'
        });
    } catch (err) {
        console.error(err.message);
        return res.status(500).json({
            success: false,
            message: 'Server Error'
        });
        }
}