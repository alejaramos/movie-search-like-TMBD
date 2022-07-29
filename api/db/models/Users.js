// aqui vamos a crear el modelo de la tabla para los usuarios. Debe tener email, password y salt(metodo que permite que las claves no sean de facil acceso, sino que estan siendo ocultadas por un hook?)
const {Model, DataTypes} = require("sequelize")
const bcrypt = require("bcrypt");

// aqui conectamos con la base de datos ||

const db = require('../database');

class User extends Model {
    hash(plainPassword, salt) {
        return bcrypt.hash(plainPassword, salt);
      };
}

User.init({
    email:{
        type: DataTypes.STRING,
    },
    password:{
        type: DataTypes.STRING,
    },
    salt:{
        type: DataTypes.STRING,
    },
    googleId:{
      type: DataTypes.INTEGER
    }

},
{
    sequelize:db, 
    modelName: 'user' 
});

User.beforeCreate((user) => {
    return bcrypt
      .genSalt(16)
      .then((salt) => {
        user.salt = salt;
        return user.hash(user.password, user.salt);
      })
      .then((hash) => {
        user.password = hash;
      });
  });
  
  
  
  const saltRounds = 16;
  bcrypt.genSalt(saltRounds).then((salt) => {
    User.salt = salt;
  });

module.exports = User
