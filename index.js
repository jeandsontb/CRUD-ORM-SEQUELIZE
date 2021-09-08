const express = require('express');
const path = require('path');
const app = express();
const port = process.env.port || 3333;

const routerPessoa = require('./routes/pessoas');
const model = require('./models/index');

app.use(express.static('public'));

app.get('/', (req, res) => res.render('index'));
app.use('/pessoas', routerPessoa);

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


model.sequelize.sync().then(() => {
  app.listen(port, () => console.log('Server listening ', port));
});