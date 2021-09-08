const { Router } = require('express');

const PessoasController = require('../controller/PessoasController');

const router = Router();

const model = require('../models/index');


router.get('/', PessoasController.index.bind(null, model.models));
router.post('/create', PessoasController.createProcess.bind(null, model.models));
router.post('/edit/:id', PessoasController.editProcess.bind(null, model.models));
router.get('/edit/:id', PessoasController.editForm.bind(null, model.models));
router.get('/create', PessoasController.createForm);
router.get('/delete/:id', PessoasController.deleteOne.bind(null, model.models));

module.exports = router;