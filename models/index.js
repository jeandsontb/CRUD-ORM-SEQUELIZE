const Sequelize = require('sequelize');
const sequelize = new Sequelize('type_orm_sequelize', 'root', '', {
  dialect: 'mysql',
  host: 'localhost'
});

// sequelize.authenticate().then(() => console.log('auth')); //para testar a connexão

sequelize.import('./pessoa.js');

sequelize.sync().then(() => console.log('synced'));