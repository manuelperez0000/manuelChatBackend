import express from 'express'
import users from './api/users.js'
import chats from './api/chats.js'

const route = express.Router()

const router = (app) => {

    app.use('/api/v1', route)
    route.use('/users', users)
    route.use('/chats', chats)
    /* route.use('*', 404) */
}

export default router