'use strict';
const {encode} = require('../helpers/bcrypt')

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    role: DataTypes.STRING
  }, {
    hooks : {
      beforeCreate : (user, options)=>{
        user.password = encode(user.password)
      }
    },

  });
  User.associate = function(models) {
    // associations can be defined here
  };
  return User;
};