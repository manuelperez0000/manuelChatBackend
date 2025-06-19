import express from 'express';
import router from './router.js'
import dbConnect from './bd/conection.js'
import cors from 'cors'

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use(cors())

app.get('/', (req, res) => { res.send('Welcome') })

dbConnect()

router(app)

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`)
})


/* app.get('/users/:id/chats', (req, res) => {
  const userId = parseInt(req.params.id);
  const user = users.find(u => u.id === userId);

  if (!user) {
    return res.status(404).json({ message: 'Usuario no encontrado' });
  }

  res.json(user.chats);
}); */