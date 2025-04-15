import express from 'express';
import Project from '../MongooseSchemaAndModel/projectModel.js';
const router = express.Router();

// GET all projects
router.get('/', async (req, res) => {
  try {
    const projects = await Project.find();
    res.json(projects);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// You can add other routes like POST, PUT, DELETE here later

export default router;