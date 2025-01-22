import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    name: { type: String, required: true, trim: true, },
    email: { type: String, required: true, unique: true, lowercase: true, trim: true, },
    password: { type: String, required: true, trim: true, },
    role: { type: String, enum: ['user', 'admin'], default: 'user', lowercase: true, trim: true, },
    currentToken: { type: String, default: null },
}, { timestamps: true });

export default mongoose.model('User', userSchema);

