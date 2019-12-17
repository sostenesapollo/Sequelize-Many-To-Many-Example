const express = require('express')
var cors = require('cors');
const path = require('path')
var bodyParser = require('body-parser')
const PORT = process.env.PORT || 5000
// Defs 1
const app = express()
// Defs 2
app.use(express.static(path.join(__dirname, 'public')))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors());
app.use(bodyParser.json())
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')
// Import Routes
const UserRoute = require('./crud_routes/user')
const AplicacaoRoute = require('./crud_routes/aplicacoes.js')
const ProdutoRoute = require('./crud_routes/produto')
const ModelosCmpRoute = require('./crud_routes/modelos_compativeis')
const MarcasCmpRout = require('./crud_routes/marcas_compativeis')
//Routes
app.get('/', (req, res)=>res.render('pages/___index'))
// Database mongoose API
app.use('/user', UserRoute)
app.use('/aplicacao', AplicacaoRoute)
app.use('/produto', ProdutoRoute)
app.use('/modelo', ModelosCmpRoute)
app.use('/marca', MarcasCmpRout)
// Listen
app.listen(PORT, () => console.log(`Listening on ${ PORT }`))