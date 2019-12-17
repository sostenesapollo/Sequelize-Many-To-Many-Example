var express = require('express');
var router = express.Router();
const Db = require("../db/DbCruds")

router.get('/create',(req,res)=>{									
	Db.Marca.create({nome_marca_produto:req.query.nome}).then(rst=>{
		res.send(rst)
	})	
	.catch(err=>{
		res.send({error:"Erro ao criar."+err})
	})							
})

router.get('/',(req,res)=>{		
	if(req.query && req.query._id) {							
		Db.Marca.findAll({where:{id:req.query._id}}).then(r=>{
			x = []
			r.forEach(s=>{
				x.push(s.dataValues)
			})
			res.send(x)
		})				
	}else{
		Db.Marca.findAll().then(r=>{
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
	if(req.query && req.query._id){
		
	  Db.mtmProdutosMarcas.count({where:{marca_fk: req.query._id}}).then(qnt=>{						
		if(qnt > 0) {
			res.send({error:"Esta marca está sendo ultilizada por algum produto."})
		}else{
			Db.Marca.destroy({where:{id: req.query._id}
			}).then(rst=>{
				res.send({status:rst})
			}).catch(err=>{
				res.send({error:"Erro ao remover."+err})
			})	
		}								
	  })
	}else{
		res.send({error:"Faltando parametros."})
	}	
	
})

router.get('/update',(req,res)=>{
	console.log(req.query)
	if(req.query && req.query._id) {			
		Db.Marca.update({nome_marca_produto: req.query.nome_marca_produto},{where:{id:req.query._id}}).then(rst=>{
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