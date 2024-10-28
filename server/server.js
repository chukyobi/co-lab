import express, { json } from 'express';
import { createServer } from 'http';
import { connect } from 'mongoose';
import { config } from 'dotenv';
import socketIO from 'socket.io';
import cors from 'cors';

config();
const app = express();
const server = createServer(app);
const io = socketIO(server, {
  cors: { origin: 'http://localhost:3000', methods: ['GET', 'POST'] },
});

// Middleware
app.use(json());
app.use(cors());

// MongoDB connection
connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log('MongoDB connected'))
  .catch((err) => console.log('MongoDB connection error:', err));

// Socket.IO real-time communication
io.on('connection', (socket) => {
  console.log('New client connected:', socket.id);

  socket.on('disconnect', () => {
    console.log('Client disconnected:', socket.id);
  });

  // Real-time task updates
  socket.on('updateTask', (taskData) => {
    io.emit('taskUpdated', taskData);
  });
});

// Start server
server.listen(process.env.PORT || 5000, () => {
  console.log(`Server running on port ${process.env.PORT || 5000}`);
});
