const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please Your Name"],
    minlength: [3, "Vui lòng nhập tên ít nhất 3 ký tự"],
    maxlength: [15, "Tên không được lớn hơn 15 ký tự"],
  },
  email: {
    type: String,
    required: [true, "Vui lòng nhập email của bạn"],
    validate: [validator.isEmail, "Vui lòng nhập một email hợp lệ"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Vui lòng nhập mật khẩu của bạn!"],
    minlength: [8, "Mật khẩu phải lớn hơn 8 ký tự"],
    select: false,
  },
  avatar: {
    public_id: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
  },
  role: {
    type: String,
    default: "user",
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  resetPasswordToken: String,
  resetPasswordTime: Date,
});

// Hash password
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }
  this.password = await bcrypt.hash(this.password, 10);
});

// jwt token
userSchema.methods.getJwtToken = function () {
  return jwt.sign({ id: this._id }, process.env.JWT_SECRET_KEY, {
    expiresIn: process.env.JWT_EXPIRES,
  });
};

// compare password
userSchema.methods.comparePassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

// Forgot password
userSchema.methods.getResetToken = function () {
  // Generating token
  const resetToken = crypto.randomBytes(20).toString("hex");

  //    hashing and adding resetPasswordToken to userSchema
  this.resetPasswordToken = crypto
    .createHash("sha256")
    .update(resetToken)
    .digest("hex");

  this.resetPasswordTime = Date.now() + 15 * 60 * 1000;

  return resetToken;
};

module.exports = mongoose.model("User", userSchema);
