const fileSystem = require('../utils/fileSystem');

exports.listProjects = (req, res) => {
  fileSystem.listProjects()
    .then(projects => res.json(projects))
    .catch(err => res.status(500).json({ error: err.message }));
};

exports.createProject = (req, res) => {
  const { name } = req.body;
  fileSystem.createProject(name)
    .then(() => res.status(201).json({ message: 'Project created successfully' }))
    .catch(err => res.status(500).json({ error: err.message }));
};