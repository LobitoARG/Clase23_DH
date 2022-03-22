const fs = require('fs');
const path = require('path');
const {check} = require('express-validator');
let validateRegister = [];

const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const controller = {
	index: (req, res) => {
		res.render('index');
	},
	search: (req, res) => {
		res.render('results')
	},
	home: (req,res) => {
		res.render('home');
		//res.send('hola mundo');
	},
	
	datos: (req, res) =>{
		var datosObtenidos = req.body;
		const validateRegister = [
			check('name').notEmpty().withMessage('Debes completar el nombre'),
			check('color').notEmpty().withMessage('Debes seleccionar un color'),
			//check('edad').notEmpty().withMessage('Debes ingresar un color').bail().isInt().withMessage('Debes ingresar con una edad valida'),
			check('email').notEmpty().withMessage('Debes completar el email').bail().isEmail().withMessage('Debes completar un email valido')
		]
		res.render('home', {datosObtenidos});
	}

};

module.exports = controller;
