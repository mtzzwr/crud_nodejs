// sequelize controla as ações entre o banco de dados e a aplicação
const Sequelize = require('sequelize');

// informando que irá usar em modo de desenvolvimento
const environment = process.env.NODE_ENV || 'development';

// path do arquivo com as configs de conexão
const config = require('../config/config.js')[environment];

// passando os parâmetros necessários para o sequelize 
const sequelize = new Sequelize(
    config.database.name, 
    config.database.user,
    config.database.password,
    {
        host: config.database.host,
        dialect: config.database.dialect
    }
);

// exportando a constante sequelize
module.exports = sequelize;