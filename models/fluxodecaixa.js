/* jshint indent: 2 */
var Sequelize = require('sequelize')

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('fluxodecaixa', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },    
    //Entrada - 1 / saida - 2        
    entrada_saida: {
      type: DataTypes.INTEGER(11),
    },    
    //Valor     
    valor: {
      type: DataTypes.FLOAT(11),
      defaultValue: Sequelize.NOW
    },
    user_id: {
      type: DataTypes.INTEGER(11),
    },
    descricao: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    categoria : {
      type: DataTypes.INTEGER(11),
    },    
    podeRemover : {
      type: DataTypes.INTEGER(11),
      defaultValue: 1
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
      allowNull: false, 
      defaultValue: Sequelize.NOW
    },    
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false,
    }
  }, {
    tableName: 'fluxodecaixa'
  });
};
