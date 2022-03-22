const {check} = require('express-validator');
//let validateRegister = [];

const validateRegister = [
			check('name').notEmpty().withMessage('Debes completar el nombre'),
			check('color').notEmpty().withMessage('Debes seleccionar un color'),
			//check('edad').notEmpty().withMessage('Debes ingresar un color').bail().isInt().withMessage('Debes ingresar con una edad valida'),
			check('email').notEmpty().withMessage('Debes completar el email').bail().isEmail().withMessage('Debes completar un email valido')
		]

module.exports= validateRegister;