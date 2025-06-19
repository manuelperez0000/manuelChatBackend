import express from 'express';
import router from './router.js'
import dbConnect from './bd/conection.js'
import cors from 'cors'
import { createServer } from 'http';
import { Server } from 'socket.io';

const app = express();

const httpServer = createServer(app);

const io = new Server(httpServer, {
  cors: {
    origin: '*', // o especifica tu frontend
    methods: ['GET', 'POST']
  }
});

io.on('connection', (socket) => {
  console.log('Nuevo usuario conectado:', socket.id);

  socket.on('sendMessage', (message) => {
    // Reenvía el mensaje a todos los demás clientes
    io.emit('receiveMessage', message);
  });

  socket.on('disconnect', () => {
    console.log('Usuario desconectado:', socket.id);
  });
});



app.use(express.json());

app.use(cors())

app.get('/', (req, res) => { res.send('Welcome') })

dbConnect()

router(app)

const PORT = process.env.PORT || 3000;
httpServer.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`)
})