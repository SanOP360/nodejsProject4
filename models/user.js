const Sequelize= require('sequelize');

const sequelize=require('../util/database');

const user= sequelize.define('user',{
    id:{
        type:Sequelize.INTEGER,
        autoIncreament:true,
        allowNull:false,
        primaryKey:true,

    },
    name:Sequelize.STRING,
    email:Sequelize.STRING
    .
})