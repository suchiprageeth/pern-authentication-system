const express = require('express');
const app = express();
const {PORT} = require('./constants')
const cookieParser = require('cookie-parser');
const passport = require('passport');

// Initialized Middleware
app.use(express.json());
app.use(cookieParser());
app.use(passport.initialize());

// Import Routes
const authRoutes = require('./routes/auth');

// Initialize Routes
app.use('/api', authRoutes);

const startApp = ()=>{
    try {
        app.listen(PORT, () => {
            console.log(`Server is running at http://localhost:${PORT}`);
        });
    } catch (e){
        console.log(`Error, ${e.message}`)
    }
}

startApp();