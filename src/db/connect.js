import mongoose from 'mongoose';
import dotenv from "dotenv";

dotenv.config();

// const connectDb = () => {
//     mongoose.connect(process.env.MONGO_URI)
//             .then(() => console.log("MongoDB Connected"))
//             .catch(err => console.log(err));
// }

const connectDb = async ()=>{
    try{
        const connectionInstance = await mongoose.connect(process.env.MONGO_URI)
        console.log("MongoDB Connected");
    } catch(error){
        console.log("MongoDB Connection Error",error)
        process.exit(1)
    }
}
export default connectDb;

