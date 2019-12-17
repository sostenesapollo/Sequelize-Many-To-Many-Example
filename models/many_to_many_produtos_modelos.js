module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ProdutosModelos', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    }
  }, {
    tableName: 'ProdutosModelos',
    timestamps: false
  });
};
