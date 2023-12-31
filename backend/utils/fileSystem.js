const fs = require('fs-extra');
const path = require('path');

const projectsDir = path.join(__dirname, '..', 'projects');

exports.listFiles = (project, category) => {
  const dirPath = path.join(projectsDir, project, category);
  return fs.readdir(dirPath)
    .then(files => files.filter(file => file.endsWith('.md')));
};

exports.readFile = (project, category, filename) => {
  const filePath = path.join(projectsDir, project, category, filename);
  return fs.readFile(filePath, 'utf8');
};

exports.writeFile = (project, category, filename, content) => {
  const filePath = path.join(projectsDir, project, category, filename);
  return fs.outputFile(filePath, content);
};

exports.createFile = (project, category, filename) => {
  const filePath = path.join(projectsDir, project, category, filename);
  return fs.ensureFile(filePath);
};

exports.listProjects = () => {
  return fs.readdir(projectsDir);
};

exports.createProject = (name) => {
  const projectPath = path.join(projectsDir, name);
  return fs.ensureDir(projectPath)
    .then(() => {
      return Promise.all([
        fs.ensureDir(path.join(projectPath, 'chapters')),
        fs.ensureDir(path.join(projectPath, 'world-building'))
      ]);
    });
};