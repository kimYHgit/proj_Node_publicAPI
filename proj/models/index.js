const { sequelize } = require('./connection');
// const Department = require('./department');
const Station = require('./station');
const User = require('./user');

const db = {};

db.sequelize = sequelize;

// model 생성
// db.Department = Department;
db.User = User;
db.Station = Station;
// model init
// Department.init(sequelize);
User.init(sequelize);
Station.init(sequelize);

User.associate(db);
Station.associate(db);
module.exports = db;
