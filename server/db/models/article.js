const Sequelize = require('sequelize');
const db = require('../database');

const Article = db.define('articles', {
    title:{
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
    },
    image:{
        type: Sequelize.STRING,
    },
    publishDate: {
        type: Sequelize.DATE,
        allowNull: false,
    },
    author:{
        type: Sequelize.STRING,
        allowNull: false,
    },
    summary: {
        type: Sequelize.STRING,
    },
    content:{
        type: Sequelize.STRING,
        defaultValue: "content goes here",
    }

})

module.exports = Article;

