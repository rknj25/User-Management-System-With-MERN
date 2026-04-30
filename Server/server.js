import express from 'express';
import dotenv from 'dotenv';
import dbconnect from './config/db.js'
import router from './routes/userRoute.js';
import cors from 'cors';


const app=express();
dotenv.config();
dbconnect();
app.use(cors());
app.use(express.json());
app.use('/api',router)
app.use(cors());

// app.use(cors({
//   origin: 'http://localhost:3000'
// }));
app.listen(process.env.PORT,()=>{
    console.log("server started..");
    
})