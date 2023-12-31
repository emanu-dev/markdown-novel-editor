const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const markdownRoutes = require('./routes/markdownRoutes');
const projectRoutes = require('./routes/projectRoutes');

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(bodyParser.json());

app.use('/api/markdown', markdownRoutes);
app.use('/api/projects', projectRoutes);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

module.exports = app;