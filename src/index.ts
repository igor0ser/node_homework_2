import * as express from 'express';
import Sequelize from 'sequelize';
import * as bodyParser from 'body-parser';
import { userRouter } from './user/router';

// const Sequelize = require('sequelize');

// Option 1: Passing parameters separately
// const sequelize = new Sequelize('nodejs_homework_db', 'root', null, {
//     host: 'localhost',
//     dialect: 'postgres'
// });

// sequelize
//     .authenticate()
//     .then(() => {
//         console.log('Connection has been established successfully.');
//     });

const app = express();

app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('Node.js homework #3');
});

app.use('/users', userRouter);

app.listen(3000);

console.log('App is listening on port 3000');
