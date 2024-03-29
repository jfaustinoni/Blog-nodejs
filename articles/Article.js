const Sequelize = require('sequelize');
const connection = require('../database/database');

const Category = connection.define('articles',{
    title:{
        type: Sequelize.STRING,
        allowNull: false
    },
    body: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    slug: {
        type: Sequelize.STRING,
        allowNull: false
    }
})

module.exports = Article;