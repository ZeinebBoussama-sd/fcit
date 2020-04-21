const db = require('../connector');
const Sequelize = require('sequelize');

const User = db.define('user', {
  // attributes
  firstName: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  lastName: {
    type: Sequelize.STRING,
    // allowNull defaults to true
  },
});
module.exports = User;
