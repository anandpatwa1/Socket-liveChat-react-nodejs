const express = require("express");
const { connectDB } = require("./src/config/db");
const { errorHandler } = require("./src/middlewere/errorMiddlewere");
const app = express();
require("dotenv").config();
require("colours");



const cors = require("cors")
const http = require("http");
const { Server } = require("socket.io");
const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "*",
  },
});

const PORT = process.env.PORT || 5000;

app.use(cors())

connectDB();

// Soket

//Whenever someone connects this gets executed
io.on("connection", (socket) => {
  console.log("A user connected");

  //Whenever someone disconnects this piece of code executed
  socket.on("disconnect", () => {
    console.log("A user disconnected");
  });
});


// Body Parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Routes
app.use("/api/otp", require("./src/modules/tempUser/tempRoutes"));
app.use("/api/user", require("./src/modules/user/userRoutes"));
app.use("/api/room", require("./src/modules/room/roomRoutes"));
app.use("/api/chat", require("./src/modules/chat/chatRouter"));

app.get("/", (req, res) => {
  res.send("C:/Users/Keshav/Desktop/Anand/Creations/test soket/index.html");
});

app.use(errorHandler);

server.listen(PORT, ()=>{
    console.log("Your Socket.io PORT is runnung at  " + PORT);
 });

// app.listen(PORT, () => {
//   console.log("Your PORT is runnung at " + PORT);
// });
