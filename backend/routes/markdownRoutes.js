const express = require('express');
const router = express.Router();
const markdownController = require('../controllers/markdownController');

router.get('/list/:project/:category', markdownController.listMarkdownFiles);
router.get('/read/:project/:category/:filename', markdownController.readMarkdownFile);
router.post('/write/:project/:category/:filename', markdownController.writeMarkdownFile);
router.post('/create/:project/:category', markdownController.createMarkdownFile);

module.exports = router;