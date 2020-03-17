import { Sequelize } from 'sequelize'

export const sequelize = new Sequelize('nodejs_homework_db', 'root', null, {
  host: 'localhost',
  dialect: 'postgres'
});

sequelize.authenticate()