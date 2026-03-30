import mongoose from 'mongoose';

const projectSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String },
  url: { type: String },
  github: { type: String },
  category: { type: String, default: 'All' },
  technologies: [String],
  date: { type: Date, default: Date.now }
}, { timestamps: true });

export default mongoose.model('Project', projectSchema);

