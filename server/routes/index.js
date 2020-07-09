const authRoutes = require('./auth.route');
const crawlerRoutes = require('./crawler.route');
const publicRoutes = [
  '/api/auth/login',
  '/api/auth/register',
];

module.exports = {
  publicRoutes,
  authRoutes,
  crawlerRoutes,
}