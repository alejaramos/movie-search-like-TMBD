const {Model, DataTypes} = require("sequelize")
const db = require('../database');
const User = require("./Users")

class Favorite extends Model {}

Favorite.init({
    movieName:{
        type: DataTypes.STRING
    },
    idPeli:{  
        type: DataTypes.INTEGER
    }
},
{
    sequelize:db, 
    modelName: 'favorite' 
})

User.hasMany(Favorite)
module.exports = Favorite