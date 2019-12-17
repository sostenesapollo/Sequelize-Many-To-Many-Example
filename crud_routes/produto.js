var express = require('express');
var router = express.Router();
const Db = require("../db/DbCruds")

router.get('/',async (req,res)=>{		
	Db.Produto.findAll({
		include: {
			model: Db.Modelo,
			through: {}
		}
	}).then(p=>{
		console.log(Db.Produto)
		res.send({p})
	})
})

module.exports = router;
