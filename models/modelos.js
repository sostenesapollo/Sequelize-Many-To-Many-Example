/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('modelos', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    nome_modelo_produto: {
      type: DataTypes.STRING(70),
      allowNull: false
    }
  }, {    
    tableName: 'modelos'
  });
};
