const mongoose=require('mongoose');

const employeeSchema=new mongoose.Schema(
    {
        
        name:{
            type:String,
            required:true
        
        },
          email:
        {
            type:String,
            

        },
            address:{
            type:String
        },

        age:
    {
        type:String,
    },
    image:
    {
        type:String,
    }
    }
);

const Employee=mongoose.model("Employee",employeeSchema);
module.exports=Employee;