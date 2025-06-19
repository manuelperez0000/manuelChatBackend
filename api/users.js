import { Router } from 'express';
import User from '../bd/models/User.js';
import cors from 'cors';

const router = Router();

router.use(cors());

router.get('/', async (req, res) => {
  const response = await User.find();
  res.json(response);
})

router.post('/', async (req, res) => {
  const { name, avatar } = req.body;

  if (!name || !avatar) {
    return res.status(400).json({ message: 'Todos los campos son obligatorios' });
  }

  // Verificar si el usuario ya existe
  const existingUser = await User.findOne({ name });
  if (existingUser) {
    res.status(201).json(existingUser);
    return
  } else {
    // Crear un nuevo usuario
    try {
      const newUser = new User({ name, avatar });
      await newUser.save();
      res.status(201).json(newUser);
    } catch (error) {
      res.status(500).json({ message: 'Error al crear el usuario', error });
    }
  }
})

export default router;