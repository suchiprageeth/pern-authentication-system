const {check} = require('express-validator');
const db = require('../db');

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

module.exports = {
    registerValidation: [email, password, emailExists],
}