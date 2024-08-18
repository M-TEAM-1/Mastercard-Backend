import mongoose, {Schema} from "mongoose";
import { Student } from "./student.model";
import bcrypt from "bcrypt"

const instituteSchema= new Schema({
    name:{
        type:String,
        required:true,
        trim:true,
        index:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    phoneNumber:{
        type:Number,
        required:true,
        unique:true
    },
    verificationNumber:{
        type:String,
        required:true,
        index:true
    },
    Student:{
        type: Schema.Types.ObjectId,
        ref: "Student"
    }
})

userSchema.pre("save", async function(next){
    if(!this.isModified("password")) next() 
    this.password= await bcrypt.hash(this.password,10) 
    next()
})

userSchema.methods.isPasswordCorrect = async function(password){
    return await bcrypt.compare(password, this.password)
}

export const Institute = mongoose.model("Institute",instituteSchema)