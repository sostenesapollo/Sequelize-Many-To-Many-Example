var express = require('express');
var router = express.Router();
const Db = require("../db/DbCruds")

router.get('/create',(req,res)=>{									
	Db.Modelo.create({nome_modelo_produto:req.query.nome}).then(rst=>{
		res.send(rst)
	})	
	.catch(err=>{
		res.send({error:"Erro ao criar."+err})
	})							
})

router.get('/modelos_compativeis_fk',(req,res)=>{		
	if(req.query && req.query.id) {							
		Db.mtmProdutosModelos.findAll({where:{produto_fk:req.query.id},include: [Db.Modelo]}).then(r=>{			
			x = []
			r.forEach(s=>{
				x.push(s.dataValues)
			})
			res.send(x)
		})				
	}else{
		res.send({error:"Faltando Parâmetros"})								
	}	
})

router.get('/marcas_compativeis_fk',(req,res)=>{		
	if(req.query && req.query.id) {							
		Db.mtmProdutosMarcas.findAll({where:{produto_fk:req.query.id},include: [Db.Marca]}).then(r=>{			
			x = []
			r.forEach(s=>{
				x.push(s.dataValues)
			})
			res.send(x)
		})				
	}else{
		res.send({error:"Faltando Parâmetros"})								
	}	
})


router.get('/',(req,res)=>{		
	if(req.query && req.query._id) {							
		Db.Modelo.findAll({where:{id:req.query._id}}).then(r=>{
			x = []
			r.forEach(s=>{
				x.push(s.dataValues)
			})
			res.send(x)
		})				
	}else{
		Db.Modelo.findAll().then(r=>{
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

router.get('/delete',(req,res)=>{	
	Db.mtmProdutosModelos.count({where:{modelo_fk: req.query._id}}).then(qnt=>{				
		console.log(qnt)
		if(qnt > 0) {

			res.send({error:"Este modelo está sendo ultilizada por algum produto."})

		}else{

			if(req.query && req.query._id){
				Db.Modelo.destroy({where:{id: req.query._id}})
				.then(rst=>{
					res.send({status:rst})
				})	
				.catch(err=>{
					res.send({error:"Erro ao remover."+err})
				})									
			}else{
				res.send({error:"Faltando parametros."})
			}

		}
	}).catch(err=>{
		console.log("Error to perfom count")
	})
	
})

router.get('/update',(req,res)=>{
	console.log(req.query)
	if(req.query && req.query._id) {			
		Db.Modelo.update({nome_modelo_produto: req.query.nome_modelo_produto},{where:{id:req.query._id}}).then(rst=>{
			res.send(rst)
		})	
		.catch(err=>{
			res.send({error:"Erro ao atualizar."+err})
		})							
	}else{
		res.send({error:'Faltando Parâmetros.'})
	}	
})

module.exports = router;