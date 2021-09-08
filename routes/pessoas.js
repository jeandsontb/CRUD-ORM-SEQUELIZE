const { Router } = require('express');

const PessoasController = require('../controller/PessoasController');

const router = Router();


router.get('/', PessoasController.index);

module.exports = router;