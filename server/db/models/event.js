const Sequelize = require("sequelize");
const db = require('../database');

const Event = db.define('events', {
    name:{
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
    },
    image:{
        type: Sequelize.STRING,
    },
    date:{
        type: Sequelize.DATEONLY,
        allowNull: false,
    },
    description:{
        type: Sequelize.STRING,
    },
    address:{
        type: Sequelize.STRING,
        allowNull: false,
    },
})

module.exports = Event;