import { createRequire } from "module";
const require = createRequire(import.meta.url);

import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import ServerApiVersion from 'mongodb';
import StudentsRoutes from './routes/studentsroute.js';

const dotenv = require('dotenv');
dotenv.config({ path: './.env' });
const app=express();



app.use(cors({origin: "*",}));
app.use(express.json());
app.use(bodyParser.json({limit:"20mb",extended:true}) );
app.use(bodyParser.urlencoded({limit:"20mb", extended: true }));



app.use('/studentUrl',StudentsRoutes);


const PORT =process.env.PORT||5000;
const CONNECTION_URL=process.env.mongo_url;
mongoose.connect( CONNECTION_URL,{ useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 })
    .then(()=>app.listen(PORT,()=>{console.log(`listing to port ${PORT}`);}))
    .catch(()=>console.log("error"));
