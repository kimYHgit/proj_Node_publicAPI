const { sequelize } = require('./connection');
// const Department = require('./department');
const User = require('./user');

const db = {};

db.sequelize = sequelize;

// model 생성
// db.Department = Department;
db.User = User;

// model init
// Department.init(sequelize);
User.init(sequelize);

module.exports = db;
