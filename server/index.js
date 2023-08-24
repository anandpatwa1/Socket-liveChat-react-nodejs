const express = require('express')
const { connectDB } = require('./src/config/db')
const { errorHandler } = require("./src/middlewere/errorMiddlewere")
const app = express()
require('dotenv').config()
require('colours')

const http = require('http');
const io = require('socket.io')(http);

const PORT = process.env.PORT || 5000

connectDB()

// Soket

//Whenever someone connects this gets executed
io.on('connection', (socket)=>{
    console.log('A user connected');
    
    //Whenever someone disconnects this piece of code executed
    socket.on('disconnect', ()=>{
       console.log('A user disconnected');
    });
 });
// http.listen(3000, ()=>{
//     console.log('listening on *:3000');
//  });

// Body Parser 
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//Routes
app.use('/api/user', require('./src/modules/user/userRoutes'))
app.use('/api/otp', require('./src/modules/tempUser/tempRoutes'))

app.get('/', (req, res) => {
    res.send('C:/Users/Keshav/Desktop/Anand/Creations/test soket/index.html')
})

app.use(errorHandler)

app.listen(PORT, () => {
    console.log('Your PORT is runnung at ' + PORT);
})