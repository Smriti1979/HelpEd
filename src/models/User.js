import mongoose from "mongoose";

const {Schema}=mongoose;

const userSchema=new Schema(
    {
        email:{
            type:String,
            unique:true,
            requried:true,
        },
        password:{
            type:String,
            requried:false,
        },
        firstName:{
            type:String,
            requried:false,
        },
        lastName:{
            type:String,
            requried:false,
        },
        phoneNumber:{
            type:String,
            requried:false,
        },
        city:{
            type:String,
            requried:false,
        },
        address:{
            type:String,
            requried:false,
        },
    },
    {timestamps:true}
)

export default mongoose.models.User || mongoose.model("User",userSchema);