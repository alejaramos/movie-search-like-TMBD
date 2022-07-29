// Configuración del server
const express = require("express");
const session = require("express-session");
const db = require("./db/database");
const User = require("./db/models/Users");
const userRoutes = require("./routes/routes_user");
const movieRoutes = require("./routes/routes_search_media");
const login = require("./routes/login");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const singleMovieRoute = require("./routes/route_single_media");
const favoritesRouter = require("./routes/route_favorites")
const findOthersRoutes = require("./routes/routes_find_others")



//
const app = express();



// 
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// -------------passport-----

app.use(cookieParser());
app.use(
  session({
    secret: "peliApp",
  })
);

app.use(passport.initialize());
app.use(passport.session());

// local strategy

passport.use(
  new LocalStrategy(
    {
      usernameField: "email",
      passwordField: "password",
    },
    function verify(email, password, done) {
      User.findOne({ where: { email } })
        .then((user) => {
          if (!user) {
            return done(null, false); // EL SEGUNDO PARAMETRO DICE SI ESTA AUTENTICADO O NO
          }
          user.hash(password, user.salt).then((hash) => {
            if (hash !== user.password) {
              alert("Contraseña incorrecta")
              return done(null, false); // invalid password
            }
            return done(null, user); // success :D
          });
        })
        .catch(done);
    }
  )
);





// How we save the user
passport.serializeUser(function(user, done) {
  done(null, user.id);
});


// How we look for the user
passport.deserializeUser(function(id, done) {
  User.findByPk(id)
    .then(user => done(null, user))
});



//path -- should be after the express.json
app.use("/api", userRoutes);
app.use("/api", movieRoutes);
app.use("/api", login);
app.use("/api", singleMovieRoute);
app.use("/api",favoritesRouter)
app.use("/api", findOthersRoutes)
//----------------------------------DB --------------------------


// server port and db connection
db.sync({ force: true }).then(() => {
  app.listen(8080, () => {
    console.log("corriendo en el puerto 8080");
  });
});

// para crear el servidor pude haber usado http, pero express tiene mas funcionalidades que http. Ademas, express es un framework potente, mientras http solo un modulo.
