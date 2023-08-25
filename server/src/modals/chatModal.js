const mongoose = require('mongoose')
const userSchema = new mongoose.Schema({
    sender_id: {
        type: mongoose.Schema.Types.ObjectId,
    },
    receiver_id: {
        type: mongoose.Schema.Types.ObjectId,
    },
    room_id: {
        type: mongoose.Schema.Types.ObjectId,
    },
    massage: {
        type: String,
    },
    time: {
        type: Date,
        default : new Date()
    },
    status: {
        type: String,
        enum: ['unsand','Pending', 'delivered', 'seen'], 
        default: "unsand" 
    },
},
{
  timestamps: true,
}
)

module.exports = mongoose.model('Chat', userSchema)             