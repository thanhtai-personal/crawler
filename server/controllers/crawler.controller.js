const BaseController = require('./base.controller');


class CrawlerController extends BaseController {
  constructor() {
    super();
  }

  root(req, res, next) {
    res.send('respond with a resource');
  }
}

module.exports = CrawlerController