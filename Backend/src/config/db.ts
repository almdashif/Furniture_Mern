import dotenv from 'dotenv';
dotenv.config();

import mongoose from 'mongoose';

export const db = async () => {
    try {
        if (!process.env?.MONGO_URI) {
            throw new Error('MONGO_URI is not defined in the environment variables');
        }

        mongoose.set('strictQuery', false);


        await mongoose.connect(process.env?.MONGO_URI);
        console.log('MongoDB connected');
    } catch (e) {
        console.error(e.message || e, 'error occurred');
        // Handle the error without exiting the process
        // For example, you can throw the error to be handled by the caller
        throw e;
    }
};
