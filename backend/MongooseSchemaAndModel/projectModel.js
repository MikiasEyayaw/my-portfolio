import mongoose from 'mongoose';

const { Schema } = mongoose;

const projectSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  downloadLink: {
    type: String,
    required: true,
  },
  id: {
    type: Schema.Types.ObjectId,  // Use Schema.Types.ObjectId for ObjectId
    ref: 'Project',  // You can refer to the collection name (optional)
  },
});

const Project = mongoose.model('Project', projectSchema);

export default Project;
