const asyncHandler = require("express-async-handler");
const Chat = require("../../modals/chatModal");
const Room = require("../../modals/roomModal");

const sendMSG = asyncHandler(async (req, res) => {
  const massage = req.body.massage;
  const room_id = req.body.room_id;
  const sender_id = req.user.id;

  const room = await Room.findById(room_id);
  const receiver_id = await room.receiver_id;

  if (!massage || massage == "" || massage == undefined) {
    res.status(400);
    throw new Error("massage need any text content");
  } else {
    if (sender_id !== receiver_id) {
      if ((room_id && sender_id) || receiver_id) {
        const chat = await Chat.create({
          sender_id,
          receiver_id,
          room_id,
          massage,
          status: "Pending",
        });
        res.status(201).json({
          massage: "chat start ",
          data: chat,
        });
      } else {
        res.status(401);
        throw new Error("need receiver_id and sender_id");
      }
    } else {
      res.status(400);
      throw new Error("receiver_id and sender_id can't same");
    }
  }
});

module.exports = { sendMSG };
