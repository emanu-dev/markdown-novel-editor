const fileSystem = require('../utils/fileSystem');

exports.listMarkdownFiles = (req, res) => {
  const { project, category } = req.params;
  fileSystem.listFiles(project, category)
    .then(files => res.json(files))
    .catch(err => res.status(500).json({ error: err.message }));
};

exports.readMarkdownFile = (req, res) => {
  const { project, category, filename } = req.params;
  fileSystem.readFile(project, category, filename)
    .then(content => res.json({ content }))
    .catch(err => res.status(500).json({ error: err.message }));
};

exports.writeMarkdownFile = (req, res) => {
  const { project, category, filename } = req.params;
  const { content } = req.body;
  fileSystem.writeFile(project, category, filename, content)
    .then(() => res.status(200).json({ message: 'File saved successfully' }))
    .catch(err => res.status(500).json({ error: err.message }));
};

exports.createMarkdownFile = (req, res) => {
  const { project, category } = req.params;
  const { filename } = req.body;
  fileSystem.createFile(project, category, filename)
    .then(() => res.status(201).json({ message: 'File created successfully' }))
    .catch(err => res.status(500).json({ error: err.message }));
};