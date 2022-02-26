const { nanoid } = require("nanoid");
const mongoose = require('mongoose');
const crypto = require('crypto');

const userSchema = new mongoose.Schema(
    {
      username: {
        type: String,
        required: true,
        maxlength: 30,
        trim: true,
      },
      emailId: {
          type: String,
          trim: true,
          required: true,
          unique:true
      },
      encrypted_password:{
          type: String,
          required:true
      },
      salt:String,
      role:{
          type:Number,
          default: 0
      }
    }
)

userSchema
  .virtual("password")
  .set(function(password) {
    this._password = password;
    this.salt = nanoid();
    this.encrypted_password = this.securePassword(password);
  })
  .get(function() {
    return this._password;
  });

userSchema.methods = {
  autheticate: function(plainpassword) {
    return this.securePassword(plainpassword) === this.encrypted_password;
  },

  securePassword: function(plainpassword) {
    if (!plainpassword) return "";
    try {
      return crypto
        .createHmac("sha256", this.salt)
        .update(plainpassword)
        .digest("hex");
    } catch (err) {
      return "";
    }
  }
};

module.exports = mongoose.model("User", userSchema)