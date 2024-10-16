const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const mongoose = require('mongoose');
const User = mongoose.model('users');

passport.use(
    new LocalStrategy(
        {
            usernameField: 'email',
        },
        async (username, password, done) => {
            const q = await User.findOne({ email: username }).exec();

            if (!q) { // If the database returned no records, the user doesn't exist.
                return done(null, false, { message: 'Incorrect Username' });
            }
            if (!q.validPassword(password)) { // Validate password
                return done(null, false, { message: 'Incorrect Password' });
            }
            return done(null, q); // Everything is good, return user object.
        }
    )
);