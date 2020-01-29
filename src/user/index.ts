import { Router } from 'express'
import { userDB } from './usersDB'

export const userRouter = Router()

userRouter.get('/:id', (req, res) => {
  const user = userDB.get(req.params.id)

  if (user) {
    res.json(user)
  } else {
    res.sendStatus(400, 'Cannot find user with this id')
  }
})

userRouter.get('/', (req, res) => {
  const { login, limit } = req.query

  console.log({ login, limit });

  if (!login) {
    res.sendStatus(400, 'Please specify login query param')
  } else {
    res.json(userDB.getByLogin(login, limit))
  }
})

userRouter.delete('/:id', (req, res) => {
  const success = userDB.remove(req.params.id)

  if (success) {
    res.sendStatus(200)
  } else {
    res.sendStatus(400, 'Failed to remove user')
  }
})

userRouter.post('/', (req, res) => {
  const success = userDB.create(req.body)

  if (success) {
    res.sendStatus(200)
  } else {
    res.sendStatus(400, 'Failed to create user')
  }
})

userRouter.put('/', (req, res) => {
  const success = userDB.update(req.body)

  if (success) {
    res.sendStatus(200)
  } else {
    res.sendStatus(400, 'Failed to update user')
  }
})
