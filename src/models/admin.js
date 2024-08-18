import mongoose from 'mongoose';

const adminSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  schemes: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'GovtScheme',
  }],
}, { timestamps: true });

export const Admin = mongoose.model("Admin", adminSchema);
