const mongoose = require('mongoose')
const userSchema = new mongoose.Schema({
    sender_id: {
        type: mongoose.Schema.Types.ObjectId,
    },
    receiver_id: {
        type: mongoose.Schema.Types.ObjectId,
    },
},
{
  timestamps: true,
}
)

module.exports = mongoose.model('Room', userSchema)