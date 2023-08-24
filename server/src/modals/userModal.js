const mongoose = require("mongoose");
const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    email: [
      {
        type: String,
      },
    ],
    mobileNumber: [
      {
        type: Number,
      },
    ],
    user_id: {
      type: Number,
      unique: true,
    },
    userName: {
      type: String,
      required: false,
    },
    ProfileIcon: {
      type: String,
      default: "",
    },
    job_title: {
      type: String,
      default: "",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", userSchema);
