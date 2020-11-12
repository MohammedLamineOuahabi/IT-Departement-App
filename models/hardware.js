const mongoose = require("mongoose");

const hardwareSchema = mongoose.Schema(
  {
    type: { type: String, required: true }, //pc , laptop , monitor , switcher ,....
    state: { type: String, required: true }, //inStock,inUse,broken,toReform,outOfStock
    provider: { type: String, required: true },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    acquiredAt: { type: Date, required: true },
    inUseAt: { type: Date, required: false },
    toReformAt: { type: Date, required: false },
    reformedAt: { type: Date, required: false }
  },

  //Mongoose schemas have a timestamps option that tells Mongoose
  //to automatically manage createdAt and updatedAt properties
  //on your documents

  { timestamps: true }
);

module.exports = mongoose.model("Hardware", userSchema);
