const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;

const User = require("../models/User");

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id).then((user) => done(null, user));
});

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: "api/v1/google/callback",
    },
    async (accessToken, refreshToken, profile, done) => {
      let user;
      user = await User.findOne({ googleId: profile.id });
      if (user) {
        return done(null, user);
      }
      user = await new User({
        googleId: profile.id,
        name: profile._json.name,
        email: profile._json.email,
      }).save();
      done(null, user);
    }
  )
);
