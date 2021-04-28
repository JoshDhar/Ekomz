const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
      trim: true,
      min: 4,
      max: 20,
    },
    lastName: {
      type: String,
      required: true,
      trim: true,
      max: 20,
    },
    userName: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      index: true,
      lowercase: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      unique: true,
      lowercase: true,
    },
    hashPassword: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: ["user", "admin"],
      default: "user",
    },
    contactNumber: {
      type: String,
    },
    profilePicture: { type: String },
  },
  { timestamps: true }
);

userSchema.virtual("password").set(function (password) {
  this.hashPassword = bcrypt.hashSync(password, 10);
});
userSchema.methods = {
  authenticate: function () {
    return bcrypt.compareSync(password, this.hashPassword);
  },
};

module.exports = mongoose.model("User", userSchema);
