const Sequelize = require('sequelize')
const mysql = require('mysql2/promise');

const dbname = 'sale4'
const dbuser = 'root'
const dbpass = ''
const dbhost = 'localhost'

const sequelize = new Sequelize(dbname,dbuser,dbpass,{
	host:dbhost,
	dialect:'mysql',
	// operatorsAliases: false,
	// logging: console.log
	logging: false
})

sequelize
  .authenticate()  
  .catch(err => {
    toastr.warning('Erro ao sincronizar banco de dados.')
	toastr.info('Tentando conectar novamente...')	
	const remote = require('electron').remote;
	remote.app.relaunch();
	remote.app.exit(0);		
  });

// Create Schema in case not Exists is neccessary restart program.
mysql.createConnection({user: dbuser,password : dbpass})
.then((connection) => {
	// console.log("db connected")
	connection.query('CREATE DATABASE IF NOT EXISTS nodejs_sale2')
})

/* Tables */
var Config = sequelize.import('../models/configuracoes')
var users = sequelize.import('../models/users')
var Cliente = sequelize.import('../models/clientes')

var Modelo = sequelize.import('../models/modelos')
var Aplicacao = sequelize.import('../models/aplicacoes')
// var Categoria = sequelize.import('../models/categorias')
var Produto = sequelize.import('../models/produtos')
var Marca = sequelize.import('../models/marcas')

var ProdutosModelos = sequelize.import("../models/many_to_many_produtos_modelos")
// var mtmProdutosMarcas = sequelize.import("../models/many_to_many_produtos_marcas")

var FluxoCaixa = sequelize.import('../models/fluxodecaixa')
var Modificacoes = sequelize.import('../models/modificacoes_vendas')
var Venda = sequelize.import('../models/vendas')
var EstProd = sequelize.import('../models/estprod')

/* Relationships */
// Produto.belongsTo(Categoria, {foreignKey: 'categoria_id'})
Produto.belongsTo(Aplicacao, {foreignKey: 'aplicacao_id'})
EstProd.belongsTo(Produto, {foreignKey:'produto_id'})

Venda.belongsTo(Produto,{foreignKey:'produto_id'})
Venda.belongsTo(Cliente,{foreignKey:'cliente_id'})
	

Modelo.belongsToMany(Produto, {through: 'ProdutosModelos'});
Produto.belongsToMany(Modelo, {through: 'ProdutosModelos'});
// mtmProdutosModelos.belongsTo(Produto,{foreignKey:'produto_fk', onDelete: 'cascade'})
// mtmProdutosModelos.belongsTo(Modelo, {foreignKey:'modelo_fk'})

// mtmProdutosMarcas.belongsTo(Produto, {foreignKey:'produto_fk', onDelete: 'cascade'})
// mtmProdutosMarcas.belongsTo(Marca, {foreignKey:'marca_fk'})

// Categoria.sync().then(()=>{
	Marca.sync().then(()=>{
			Modelo.sync().then(()=>{
			Aplicacao.sync().then(()=>{							
				Produto.sync().then(()=>{					
					ProdutosModelos.sync().then(()=>{
					// mtmProdutosMarcas.sync().then(()=>{
						console.log("Tudo Sincronizado.")
					})
				})
			})				
		})
	})
// })	
/* Syncronization */
module.exports = {
	sequelize:sequelize,
	Sequelize:Sequelize,	
	Cliente:Cliente,
	Produto:Produto,
	Modelo: Modelo,
	// Categoria:Categoria,
	FluxoCaixa:FluxoCaixa,
	Venda:Venda,
	EstProd:EstProd,
	Config:Config,
	Modificacoes:Modificacoes,
	users:users,
	Marca:Marca,
	ProdutosModelos:ProdutosModelos,
	// mtmProdutosMarcas:mtmProdutosMarcas,
	// mtmProdutosModelos:mtmProdutosModelos,
	Aplicacao:Aplicacao
}