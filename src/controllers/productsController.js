const fs = require('fs');
const path = require('path');
const multer = require('multer');
const { log } = require('console');
const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const controller = {
	// Root - Show all products
	index: (req, res) => {
		res.render('products', {products});
	},

	// Detail - Detail from one product
	detail: (req, res) => {
		res.render('detail');
	},

	// Create - Form to create
	create: (req, res) => {

		res.render('product-create-form');
	},
	
	// Create -  Method to store
	store: (req, res) => {
		let productosActuales = fs.readFileSync(productsFilePath, 'utf-8')
		productosActuales = JSON.parse(productosActuales)
		let newProduct = req.body;
		newProduct.image = req.file.filename;
		let ultimoIndice = productosActuales.length+1;
		newProduct.id = ultimoIndice;
		console.log('%%%%%%%%%%%%%%%%%%%%%%%%%%%%')
		console.log(newProduct)
		productosActuales.push(newProduct)
		let newProductoJSON = JSON.stringify(productosActuales)
		//const nuevaVariableJSON = JSON.stringify(newProduct)
		fs.writeFileSync(productsFilePath, newProductoJSON)
		//products.push(newProductoJSON);
		res.redirect('products')
	},

	// Update - Form to edit
	edit: (req, res) => {
		res.render('product-edit-form');
	},
	// Update - Method to update
	update: (req, res) => {
		// Do the magic
	},

	// Delete - Delete one product from DB
	destroy : (req, res) => {
		// Do the magic
	}
};

module.exports = controller;