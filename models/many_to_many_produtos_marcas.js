module.exports = function(sequelize, DataTypes) {
  return sequelize.define('many_to_many_produtos_marcas', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    produto_fk: {
      type: DataTypes.INTEGER(12),
      allowNull: false,
      references: {
        model: 'produtos',
        key: 'id'
      }
    },
    marca_fk: {      
      type: DataTypes.INTEGER(12),
      allowNull: false,
      references: {
        model: 'marcas',
        key: 'id'
      }
  	}
  }, {
    tableName: 'many_to_many_produtos_marcas',
    timestamps: false
  });
};
