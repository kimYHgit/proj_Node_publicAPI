const Sequelize = require('sequelize');

module.exports = class Station extends Sequelize.Model {
  static init(sequelize) {
    return super.init({
      statnId: { // 지하철역 ID
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      statnNm: { // 지하철 역명
        type: Sequelize.STRING(50),
        allowNull: false,
      },
      subwayNm: { // 지하철 호선명
        type: Sequelize.STRING(50),
        allowNull: false,
      },
      subwayId: { // 지하철 호선ID
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      statnFid: { // 이전지하철역 ID
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      statnTid: { // 다음지하철역 ID
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      trnsitCo: { // 환승 노선수
        type: Sequelize.INTEGER,
        allowNull: false,
      },
    }, {
      sequelize,

      underscored: true,
      timestamps: true,
      paranoid: true,
    });
  }

  static associate(db) {
    db.Station.hasMany(db.User, { foreignKey: { name: 'userId', onDelete: 'SET NULL', as: 'User' } });
  }
};
