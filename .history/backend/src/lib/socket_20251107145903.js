import express from "express";
import { Server } from "socket.io";
import http from "http";

// Crée une seule instance d’Express et du serveur HTTP
const app = express();
const server = http.createServer(app);

// Stocke les utilisateurs connectés
const userSocketMap = {};

// Initialise Socket.io
const io = new Server(server, {
  cors: {
    origin: [
      "http://localhost:5173",
      process.env.FRONTEND_URL, // utile si tu déploies le frontend sur Render aussi
    ],
    credentials: true,
  },
});

// 🔧 Fonction utilitaire
export function getReceiverSocketId(userId) {
  return userSocketMap[userId];
}

// 🔌 Gestion des connexions socket
io.on("connection", (socket) => {
  console.log(`✅ User connected: ${socket.id}`);

  const userId = socket.handshake.query.userId;
  if (userId) {
    userSocketMap[userId] = socket.id;
  }

  // Informe tous les clients connectés
  io.emit("getOnlineUsers", Object.keys(userSocketMap));

  // Lorsqu’un utilisateur se déconnecte
  socket.on("disconnect", () => {
    console.log(`❌ User disconnected: ${socket.id}`);
    if (userId) delete userSocketMap[userId];
    io.emit("getOnlineUsers", Object.keys(userSocketMap));
  });
});

export { io, server, app };
