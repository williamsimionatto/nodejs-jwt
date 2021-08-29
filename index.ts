import express from 'express';
const app = express();
import mongoose from 'mongoose';
import dotenv from 'dotenv';
const authRoute = require('./routes/auth');

dotenv.config();

mongoose.connect(process.env.DB_CONNECT+"",
  () => console.log('connected to db'));

app.use(express.json());

app.use('/api/user', authRoute);

app.listen(3000, () => console.log('Server up and running'));