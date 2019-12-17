/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('estprod', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },    
    produto_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'produtos',
        key: 'id'
      }
    },            
    user_id: {
      type: DataTypes.INTEGER(11)      
    },    
    /* tipo -> 1- entrada/ 2- saida */
    tipomodificacao: {
      type: DataTypes.INTEGER(11)      
    },    
    /* categoria -> 1-venda, 2- empréstimo(entrada, saida) , 3-Compra(carregamento), 4-Outros, 5-comodato (saida/entrada)perda */
    categoria: {      
      type: DataTypes.INTEGER(11),      
    },
    /* 1 - liquido / 2 - vasilhame / 3 - completo */
    vasilhame: {
      type: DataTypes.INTEGER(11),      
    },
    quantidade: {
      type: DataTypes.INTEGER(11),      
    },   
    descricao: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    /*
    descricao: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    */
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    tableName: 'estprod'
  });
};
