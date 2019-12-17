var express = require('express');
var router = express.Router();
const Db = require("../db/DbCruds")

router.get('/create',(req,res)=>{									
	Db.Aplicacao.create({nome_aplicacao_produto:req.query.nome}).then(rst=>{
		res.send(rst)
	})	
	.catch(err=>{
		res.send({error:"Erro ao criar."+err})
	})							
})

router.get('/',(req,res)=>{		
	if(req.query && req.query._id) {							
		Db.Aplicacao.findAll({where:{id:req.query._id}}).then(r=>{
			x = []
			r.forEach(s=>{
				x.push(s.dataValues)
			})
			res.send(x)
		})				
	}else{
		Db.Aplicacao.findAll().then(r=>{
			x = []
			r.forEach(s=>{
				x.push(s.dataValues)
			})
			res.send(x)
		}).catch(err=>
			res.send({error:"Erro ao listar."})
		)										
	}	
})  

// Db.Aplicacao.destroy({where:{id: 7}}).then(rst=>{
// 	res.send(rst)
// })	
// .catch(err=>{
// 	res.send({error:"Erro ao remover."+err})
// })

router.get('/delete',(req,res)=>{	
	Db.Produto.count({where:{aplicacao_id: req.query._id}}).then(qnt=>{		

		console.log(qnt)

		if(qnt > 0) {
			res.send({error:"Esta aplicação está sendo ultilizada por algum produto."})
		}else{

			if(req.query && req.query._id){
				console.log("Here.", req.query._id)
				Db.Aplicacao.destroy({where:{id: req.query._id}}).then(rst=>{
					res.send({status:rst})
				})	
				.catch(err=>{
					res.send({error:"Erro ao remover."+err})
				})									
			}else{
				res.send({error:"Faltando parametros."})
			}

		}
	})
	
})

router.get('/update',(req,res)=>{
	console.log(req.query)
	if(req.query && req.query._id) {			
		Db.Aplicacao.update({nome_aplicacao_produto: req.query.nome_aplicacao_produto}, {where:{id:req.query._id}}).then(rst=>{
			res.send({status:rst})
		})	
		.catch(err=>{
			res.send({error:"Erro ao atualizar."+err})
		})							
	}else{
		res.send({error:'Faltando Parâmetros.'})
	}	
})

module.exports = router;