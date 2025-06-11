import dotenv from 'dotenv';
dotenv.config();
import mongoose from 'mongoose';
import app from './app.ts';
import { db } from './src/config/db.js'

const start = async () => {
  try {
    await mongoose.connect(process.env?.MONGO_URI);
    console.log('Connected to MongoDB');


    db().then(() => {
      app.listen(process.env?.PORT || 5000, () => {
        console.log(`Server is running on port ${process.env?.PORT || 5000}`);
      });
    });


  } catch (err) {
    console.error(err);
   throw err;
  }
};

start();