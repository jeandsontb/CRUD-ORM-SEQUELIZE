const { Router } = require('express');

const PessoasController = require('../controller/PessoasController');

const router = Router();

const model = require('../models/index');


router.get('/', PessoasController.index.bind(null, model.models));

module.exports = router;