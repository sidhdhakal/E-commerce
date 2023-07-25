const mongoose=require('mongoose');

const userSchema=new mongoose.Schema(
    {
        
        username:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"User",
        
        },
          email:
        {
            type:String,
            

        },
               password:{
            type:String,
             required:true,
        }

    }
);

const User=mongoose.model("User",userSchema);
module.exports=User;