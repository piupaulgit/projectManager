const mongoose = require('mongoose');
const crypto = require('crypto');
import { v4 as uuidv4 } from 'uuid';

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
          trim:true,
          required:true
      },
      salt:String,
      role:{
          type:Number,
          default: 0
      }
    }
)

userSchema.virtual
    .set(function(password) {
        this._password = password;
        this.salt = uuidv4()
        this.securePassword(_password)
    })
    .get(function(){
            return this._password
    })

userSchema.method = {
    authenticate: function(plainPassword){
        return this.securePassword(plainPassword) === this.encrypted_password
    },
    securePassword : function(plainPassword){
        if(!plainPassword) return ''
        try{
            return crypto.createHmac('sha256', this.salt)
            .update(plainPassword)
            .digest('hex');
        }
        catch(err){
            console.log(err)
        }
    }
}

module.exports = mongoose.model("User", userSchema)