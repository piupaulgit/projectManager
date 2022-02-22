const mongoose = require('mongoose');

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

userSchema.method = {
    securePassword : function(plainPassword){
        if(!plainPassword) return ''
        try{
            return ''
        }
        catch(err){
            console.log(err)
        }

    }
}

module.exports = mongoose.model("User", userSchema)