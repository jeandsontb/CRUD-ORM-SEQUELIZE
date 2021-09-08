const Sequelize = require('sequelize');
const sequelize = new Sequelize('type_orm_sequelize', 'root', '', {
  dialect: 'mysql',
  host: 'localhost'
});

// sequelize.authenticate().then(() => console.log('auth')); //para testar a connexão


const fs = require('fs');
const path = require('path');
const models = {};

  fs
  .readdirSync(__dirname)
  .filter((file) => file !== 'index.js')
  .forEach((file) => {
    const model = sequelize.import(path.join(__dirname, file));
    models[model.name] = model;
  });

module.exports = {
  sequelize,
  models
};