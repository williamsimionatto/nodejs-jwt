import express from 'express';
const app = express();
import mongoose from 'mongoose';

mongoose.connect(`mongodb://localhost:27017/auth`,
  () => console.log('connected to db'));

const authRoute = require('./routes/auth');

app.use('/api/user', authRoute);

app.listen(3000, () => console.log('Server up and running'));