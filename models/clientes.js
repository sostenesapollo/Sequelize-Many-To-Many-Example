/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('clientes', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    nome_cliente: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    tipo_cliente: {
      type: DataTypes.INTEGER(4),
      allowNull: false
    },
    numero: {
      type: DataTypes.STRING(100),
      allowNull: true
    },    
    endereco_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      references: {
        model: 'enderecos',
        key: 'id'
      }
    },
    ponto_referencia: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    tel1: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    tel2: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    info_adc: {
      type: DataTypes.STRING(255),
      allowNull: true
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
    tableName: 'clientes'
  });
};
