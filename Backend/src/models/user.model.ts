import mongoose, { Document, Schema } from 'mongoose';

interface IUser extends Document {
  name: string;
  email: string;
  password: string;
  role: 'user' | 'admin';
  wishlist: mongoose.Schema.Types.ObjectId[];
}

const userSchema = new Schema<IUser>(
  {
    name: String,
    email: { type: String, unique: true },
    password: String,
    role: { type: String, default: 'user' },
    wishlist: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Product' }],
  },
  { timestamps: true }
);

export default mongoose.model<IUser>('User', userSchema);