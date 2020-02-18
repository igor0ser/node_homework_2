import * as express from 'express';
import * as bodyParser from 'body-parser';
import { userRouter } from './user/router';

const app = express();

app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('Node.js homework #2');
});

app.use('/users', userRouter);

app.listen(3000);

console.log('App is listening on port 3000');
