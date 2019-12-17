var express = require('express');
var router = express.Router();
const Db = require("../db/DbCruds")

router.post('/login', (req,res)=>{	
	console.log('login')
	Db.testConnection()
	.then(rst=>{					
		if(req.body.usuario && req.body.senha) {
			Db.User.find({username:req.body.usuario, password: req.body.senha})
			.then(usrs=>{
				if(usrs.length >0 ){
					res.send({success:true})
				} else {
					res.send({success:false})
				}
			})
			.catch(err=>{
				console.log("----------")
				console.log("Erro:"+err)
				console.log("----------")
			})
		}else{
			res.send({error:"Preencha todos os campos."})
		}

	})
	.catch(err=>{
		res.send({error:"Erro ao conectar no banco de dados."})
	})							
})

// localhost:8000/user/create?usuario=sostenesapollo12&senha=81020002abc

router.get('/create',(req,res)=>{		
	Db.testConnection()
	.then(rst=>{		
		console.log(req.query)
		if(req.query.usuario && req.query.senha) {
			Db.User.create({username:req.query.usuario, password: req.query.senha})
			.then(usrs=>{
				console.log(usrs)
				res.send(usrs)
			})
			.catch(err=>{
				console.log('Erro ao criar')
				res.send({error:err})
			})
		}else{
			res.send({error:"Preencha todos os campos."})
		}
	})
	.catch(err=>{
		res.send({error:"Erro ao conectar no banco de dados."+err})
	})							
})

module.exports = router;