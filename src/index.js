import express from "express"
import * as dotenv from 'dotenv';
import connectDb from "./db/connect.js";
import cors from "cors"
import cookieParser from "cookie-parser"
import NodeCache from "node-cache";
import { rateLimit } from "express-rate-limit";
import routes from "./routes/index.js";


dotenv.config();
connectDb();

const app = express();


const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    limit: 100, // Limit each IP to 100 requests per window (15 minutes)
    standardHeaders: 'draft-7', // Use combined RateLimit header
    legacyHeaders: false, // Disable X-RateLimit-* headers
    // store: ... , // Redis, Memcached, etc. (optional)
  });

  app.use(cors({
    origin:process.env.CORS_ORIGIN,
    credentials:true
}))

app.use(express.json({limit:"16kb"})) 
app.use(express.urlencoded({extended: true, limit : "16kb"}))
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"))
app.use(cookieParser())

app.use(limiter);


app.use('/', routes);
// app.use(errorHandler);

// app.get("/",(req,res)=>{
//     res.send("The server is connected")
// })
// app.get("/login",(req,res)=>{
//     res.send("The server is connected")
// })

app.listen(process.env.PORT || 8000,()=>{
    console.log(`Server is running at port:${process.env.PORT}`)
})