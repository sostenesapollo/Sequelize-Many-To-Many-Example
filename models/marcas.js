/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('marcas', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    nome_marca_produto: {
      type: DataTypes.STRING(70),
      allowNull: false
    }
  }, {    
    tableName: 'marcas'
  });
};
