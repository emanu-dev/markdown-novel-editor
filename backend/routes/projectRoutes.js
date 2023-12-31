const express = require('express');
const router = express.Router();
const projectController = require('../controllers/projectController');

router.get('/list', projectController.listProjects);
router.post('/create', projectController.createProject);

module.exports = router;