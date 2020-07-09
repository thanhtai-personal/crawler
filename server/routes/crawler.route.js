const express = require('express');
const CrawlerController = require('../controllers/crawler.controller');

var router = express.Router();
var crawlerController = new CrawlerController();
/* GET users listing. */
router.get('/', crawlerController.root);

module.exports = router;
