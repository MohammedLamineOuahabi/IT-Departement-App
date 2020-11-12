const mongoose = require("mongoose");
const requestSchema = mongoose.Schema(
  {
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    type: { type: String, enum: ["Hardware", "Software"], required: [true, "Type required"] },
    msg: { type: String, required: true },
    state: {
      type: String,
      enum: ["waiting", "doing", "done", "undone", "canceled"],
      required: true
    },
    requestAt: { type: Date, required: true },
    doneAt: { type: Date, required: false }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Request", requestSchema);
