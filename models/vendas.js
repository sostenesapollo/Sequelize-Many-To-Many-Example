/* jshint indent: 2 */
var Sequelize = require('sequelize')

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('vendas', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },  
    produto_quantidade: {
      type: DataTypes.INTEGER(11),      
    },    
    vasilhame: {// 1-liquido 2-vas ou 3-comp
      type: DataTypes.INTEGER(11),      
    },    
    valor_unitario:{
      type: DataTypes.FLOAT()
    },
    valor_compra:{
      type: DataTypes.FLOAT()
    },
    forma_entrega:{
      type: DataTypes.INTEGER(11),      
    },
    forma_pagamento:{
      type: DataTypes.INTEGER(11),      
    },
    atendente_id: {
      type: DataTypes.INTEGER(11),
    },
    pago:{// 0 - nao / 1 - sim
      type: DataTypes.INTEGER(11),      
      defaultValue: 0
    },
    estado:{// 0 - não entregue, 1 - a caminho, 2- entregue
      type: DataTypes.INTEGER(11),      
      defaultValue: 0
    },
    entregador_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true,      
      references: {
        model: 'entregadores',
        key: 'id'
      }
    },
    empresa_vale_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      references: {
        model: 'empresasvale',
        key: 'id'
      }
    },
    cartao_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      references: {
        model: 'cartoes',
        key: 'id'
      }
    },
    cliente_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      references: {
        model: 'clientes',
        key: 'id'
      }
    },
    produto_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      references: {
        model: 'produtos',
        key: 'id'
      }
    },       
    tipo_cartao: {
      type: DataTypes.INTEGER(11),    
    },
    numero_vale: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    nota_data_emissao:{
      type: DataTypes.DATE,
      allowNull: true
    },
    nota_data_vencimento:{
      type: DataTypes.DATE,
      allowNull: true
    },
    info_adc: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    createdAtDateOnly:{
      type:DataTypes.DATEONLY,      
      allowNull: false,
      defaultValue: Sequelize.NOW
    },
    createdAtTimeOnly:{
      type:DataTypes.TIME,      
      allowNull: false,
      defaultValue: Sequelize.NOW
    },    
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false
    },    
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    tableName: 'vendas'
  });
};
