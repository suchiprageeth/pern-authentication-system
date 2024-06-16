const db = require('../db');
const { hash } = require('bcryptjs')
const{sign} = require('jsonwebtoken');
const {SECRET} = require("../constants");

exports.getUsers = async (req, res) => {
    try {
        const {rows} = await db.query("SELECT id,email FROM users");
        res.status(200).json({
            success: true,
            users: rows
        });
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

exports.login = async (req, res) => {
    let user = req.user;
    let payload = {
        id: user.id,
        email: user.email
    }
    try {
        // Assign JWT Token
        const token = sign(payload, SECRET, {expiresIn: '1h'});
        return res.status(200).cookie('token',token, {httpOnly:true}).json({
            success:true,
            message: 'Logged in successfully!',
        });
    } catch (err) {
        console.error(err.message);
        return res.status(500).json({
            success: false,
            message: 'Server Erro!r'
        });
    }
}

exports.protectedRoute = async (req, res) => {
    try {
        res.status(200).json({
            info:"Protected Route",
        });
    } catch (err) {
        console.error(err.message);
    }
}