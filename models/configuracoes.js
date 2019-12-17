/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('configs', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    var_name: {
      type: DataTypes.STRING(255),
    },    
    val: {
      type: DataTypes.STRING(255),
    },    
    page: {
      type: DataTypes.STRING(255),      
    },    
  }, {
    tableName: 'configs'
  });
};
