import mongoose, { Document, Schema } from 'mongoose';

interface IProduct extends Document {
  name: string;
  description: string;
  category: string;
  price: number;
  color: string;
  type: string;
  brand: string;
  images: string[];
  isBestSeller: boolean;
  isTopSeller: boolean;
  stock: number;
}

const productSchema = new Schema<IProduct>({
  name: String,
  description: String,
  category: String,
  price: Number,
  color: String,
  type: String,
  brand: String,
  images: [String],
  isBestSeller: Boolean,
  isTopSeller: Boolean,
  stock: Number,
});

export default mongoose.model<IProduct>('Product', productSchema);