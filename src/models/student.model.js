import mongoose , {Schema} from "mongoose"
import bcrypt from "bcrypt"

const studentSchema = new Schema({
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
    instituteRollNo:{
        type:Number,
        required:true,
        unique:true,
        index:true
    },
    phoneNumber:{
        type:Number,
        required:true,
        unique:true
    },
    class:{
        type:String,
        required:true,

    },avatar:{
        type:String, // Cloudinary URL
        required:true
    },
    password:{
        type:String,
        required:[true,"Password is required"]     
    },
    dob:{
        type:Date,
        required: true
    },
    Marks:{
        type:Number,
        required:true
    },
    incomeLevel:{
        type: Number,
        required: true
    },
    instituteId:{
        type: Schema.Types.ObjectId,
        ref: "Institute"
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

export const Student = mongoose.model("Student",studentSchema)