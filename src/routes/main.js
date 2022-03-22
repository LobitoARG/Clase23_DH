// ************ Require's ************
const express = require('express');
const router = express.Router();
const validator = require('../middlewares/validatorForm');

// ************ Controller Require ************
const mainController = require('../controllers/mainController');

router.get('/', mainController.index); 
router.get('/search', mainController.search); 
router.get('/home', mainController.home);
router.post('/home', validator,mainController.datos);

module.exports = router;
