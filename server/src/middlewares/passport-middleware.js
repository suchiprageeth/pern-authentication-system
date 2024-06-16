const passport = require('passport');
const {Strategy, ExtractJwt} = require('passport-jwt');
const {SECRET} = require('../constants');
const db = require('../db');

const cookieExtractor = (req) => {
    let token = null;
    if (req && req.cookies) {
        token = req.cookies['token'];
    }
    return token;
}

const options = {
    jwtFromRequest: cookieExtractor,
    secretOrKey: SECRET
}

passport.use(new Strategy(options, async ({ id }, done) => {
    try {
        const {rows} = await db.query("SELECT id,email FROM users WHERE id = $1", [id]);

        if (rows.length === 0) {
            throw new Error('401 bot authorized!');
        }

        const user = {id:rows[0].id, email:rows[0].email};
        return await done(null, user);
    } catch (err) {
        console.error(err.message);
        done(err, false);
    }
}));