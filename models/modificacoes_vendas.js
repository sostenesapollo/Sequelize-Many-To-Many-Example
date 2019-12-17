/* jshint indent: 2 */
var Sequelize = require('sequelize')

module.exports = function(sequelize, DataTypes) {

  return sequelize.define('mods_vendas', {    
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },              
    modificacao: {
      type: DataTypes.TEXT,
      allowNull: true
    },    
    campos_mod: {
      type: DataTypes.TEXT,
      allowNull: true
    },    
    ind_mod: {
      type: DataTypes.TEXT,
      allowNull: true
    },    
    ModifiedToMods: {
      type: DataTypes.TEXT,
      allowNull: true
    },    
    objCreatedAtDate: {
      type: DataTypes.DATEONLY,
    },
    createdAtTime:{
      type:DataTypes.TIME,            
    },        
    createdAtDate: {
      type: DataTypes.DATEONLY,
    },
    createdAtDate2: {
      type: DataTypes.DATEONLY,
    }       
  }, {
    tableName: 'mods_vendas',
    timestamps: false
  });
};
