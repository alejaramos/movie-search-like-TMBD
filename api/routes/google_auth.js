const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const User = require("../db/models/Users")

const GOOGLE_CLIENT_ID = "198449435070-92lv3e4qlc3n2ig7c2malgatbvagg5bh.apps.googleusercontent.com";
const GOOGLE_CLIENT_SECRET = "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";


passport.use(
  new GoogleStrategy(
    {
      clientID: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
      callbackURL: "http://localhost:3000/logueado",
      passReqToCallback: true,
    },
    function (accessToken, refreshToken, profile, cb) {
      User.findOrCreate({ googleId: profile.id }, function (err, user) {
        return cb(err, user);
      });
    }
  )
);

passport.serializeUser(function(user, done) {
    done(null, user);
  });
  
  passport.deserializeUser(function(user, done) {
    done(null, user);
  });