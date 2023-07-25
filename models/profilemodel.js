const mongoose=require('mongoose');

const profileSchema=new mongoose.Schema(
    {
        
        name:{
            type:String,

        
        },
          address:
        {
            type:String,
            

        },
               age:{
            type:String,

        },
        education:{
            type:String,
        },

        profileImage:
        {
            type:String,

        }

    }
);

const profile=mongoose.model("Profile",profileSchema);
module.exports=profile;