import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  role: { type: String, required: true },
  username: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  cnic: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  mobile: { type: String },
  countryCode: { type: String },
  profilePic: { type: String },
}, { timestamps: true });

export default mongoose.model('User', userSchema);
