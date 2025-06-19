import { Router } from "express"
import Chat from '../bd/models/Chat.js'

const router = Router()

router.get('/', async (req, res) => {
    const response = await Chat.find()
    res.json(response)
})

router.post('/', async (req, res) => {
    const { fromId, toId, message } = req.body

    if (!fromId || !toId || !message) {
        return res.status(400).json({ message: 'Todos los campos son obligatorios' })
    }

    try {
        const newChat = new Chat({ fromId, toId, message })
        await newChat.save()
        res.status(201).json(newChat)
    } catch (error) {
        res.status(500).json({ message: 'Error al crear el chat', error })
    }
})

export default router
