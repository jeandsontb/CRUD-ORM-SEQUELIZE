const { Router } = require('express');

const PessoasController = require('../controller/PessoasController');

const router = Router();

const model = require('../models/index');


router.get('/', PessoasController.index.bind(null, model.models));
router.post('/create', PessoasController.createProcess.bind(null, model.models));
router.get('/create', PessoasController.createForm);

module.exports = router;