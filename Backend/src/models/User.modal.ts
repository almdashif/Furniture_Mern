// src/models/User.model.ts
import mongoose, { Schema, Document } from "mongoose";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export interface IUser extends Document {
  name: string;
  email: string;
  password: string;
  role: "user" | "admin" | "vendor";
  phone?: string;
  address?: {
    doorNo?: string;
    street?: string;
    landmark?: string;
    city?: string;
    state?: string;
    zip?: string;
    country?: string;
  };
  avatarUrl?: string;

  // Auth + Verification
  resetPasswordToken?: string;
  resetPasswordExpires?: Date;
  phoneVerified?: boolean;
  phoneVerificationCode?: string;
  emailVerified?: boolean;
  emailVerificationCode?: string;

  // Methods
  comparePassword(candidatePassword: string): Promise<boolean>;
  generateAccessToken(): string;
  generateRefreshToken(): string;
}

const userSchema = new Schema<IUser>(
  {
    name: { type: String, required: true, trim: true },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
      index: true,
    },
    password: { type: String, required: true, minlength: 6 },
    role: {
      type: String,
      enum: ["user", "admin", "vendor"],
      default: "user",
    },
    phone: { type: String, trim: true },
    address: {
      doorNo: String,
      street: String,
      landmark: String,
      city: String,
      state: String,
      zip: String,
      country: String,
    },
    avatarUrl: { type: String },

    // Security + Verification
    resetPasswordToken: String,
    resetPasswordExpires: Date,
    phoneVerified: { type: Boolean, default: false },
    phoneVerificationCode: String,
    emailVerified: { type: Boolean, default: false },
    emailVerificationCode: String,
  },
  { timestamps: true }
);

// 🔒 Pre-save hook: Hash password before saving
// userSchema.pre<IUser>("save", async function (next) {
//   if (!this.isModified("password")) return next();

//   const salt = await bcrypt.genSalt(10);
//   this.password = await bcrypt.hash(this.password, salt);
//   next();
// });

// 🔑 Method: Compare password
userSchema.methods.comparePassword = async function (
  candidatePassword: string
): Promise<boolean> {
  return bcrypt.compare(candidatePassword, this.password);
};

export const User = mongoose.model<IUser>("User", userSchema);
