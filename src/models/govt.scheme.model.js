import mongoose from 'mongoose';

const govtSchemeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  deadline: {
    type: Date,
  },
  applicants: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Student',
  }],
  noOfApplicantsRequired: {
    type: Number,
  },
  eligibilityCriteria: {
    age: {
      type: Number,
    },
    income: {
      type: Number,
    },
    gender: {
      type: String,
    },
    qualification: {
      type: String,
    },
  },
}, { timestamps: true });


export const GovtScheme = mongoose.model("GovtScheme", govtSchemeSchema);
