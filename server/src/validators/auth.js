const { check } = require('express-validator');
const db = require('../db');
const { compare } = require('bcryptjs');

// Password
const password = check('password')
    .isLength({min: 6})
    .withMessage('Password must be at least 6 characters long!');

// Email
const email = check('email').isEmail().withMessage('Email must be valid!');

// Check If email already exists
const emailExists = check('email').custom(async email => {
    const {rows} = await db.query('SELECT * FROM users WHERE email = $1', [email]);
    if (rows.length) {
        throw new Error('Email already exists!');
    }
});

// Login Validation
const loginFieldCheck = check('email').custom(async (value,{req})=>{
    const { rows } = await db.query('SELECT * FROM users WHERE email = $1', [value]);
    const validPassword = await compare(req.body.password, rows[0].password);

    if (!rows.length) {
        throw new Error('Email does not exist!');
    }

    if (!validPassword) {
        throw new Error('Password is incorrect!');
    }

    req.user = rows[0];
    return true;

});
module.exports = {
    registerValidation: [email, password, emailExists],
    loginValidation:  [loginFieldCheck]
}