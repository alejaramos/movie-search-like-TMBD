var express = require("express");
var router = express.Router();
var passport = require("passport");
require("./google_auth")



router.get('/auth/google',
  passport.authenticate('google', { scope: [ 'email', 'profile' ] }
), (req, res) => {
  res.send(req);
});

router.get( '/auth/google/callback',
  passport.authenticate( 'google', {
    successRedirect: '/',
    failureRedirect: '/auth/google/failure'
  })
);

router.get('/auth/google/failure', (req, res) => {
  res.send('Failed to authenticate..');
});

router.post(
  "/login",
  passport.authenticate("local", {
    failureRedirect: "/login",
    failureMessage: true,
  }),
  (req, res) => {
    res.send(req.user);
  }
);

router.post("/logout",(req, res, next)=>{
  req.logout(function(err) {
    if (err) { return next(err); }
    res.redirect('/');
  });
})


module.exports = router;
