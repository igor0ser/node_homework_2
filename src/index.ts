import * as express from 'express'
import { userRouter } from './user'

const app = express()

app.get('/', function (req, res) {
  res.send('Node.js homework #2')
})

app.use('/users', userRouter)

console.log(123);

app.listen(3000)