const Sequelize = require('sequelize');

module.exports = class Station extends Sequelize.Model {
  static init(sequelize){
    return super.init({
      stId: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      stNm: {
        type: Sequelize.STRING(200),
        allowNull: false,
      },
      arsId: {
        type: Sequelize.INTEGER,
        allowNull:false
      },
    }, {
      sequelize,

      underscored: true,
      timestamps: true,
      paranoid: true,
    });

    
  }
}