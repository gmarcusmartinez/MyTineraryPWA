const { Router } = require("express");
const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;

const User = require("../models/User");

const router = Router();

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: "api/v1/google/callback",
    },
    async (accessToken, refreshToken, profile, done) => {
      //   let user;
      //   user = await User.findOne({ googleId: profile.id });

      //   if (user) {
      //     return done(null, user);
      //   }
      //   user = await new User({ googleId: profile.id }).save();
      //   done(null, user);
      console.log("accesss token:" + accessToken);
    }
  )
);

router.get(
  "/",
  passport.authenticate("google", {
    scope: ["profile", "email"],
  })
);

router.get(
  "/callback",
  passport.authenticate("google", {
    scope: ["profile", "email"],
  })
);

module.exports = router;
