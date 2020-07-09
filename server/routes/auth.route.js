const express = require('express');
const AuthController = require('./../controllers/auth.controller');

var router = express.Router();
var authController = new AuthController();
/* GET users listing. */
router.get('/', authController.root);
router.post('/login', authController.login);
router.post('/register', authController.register);
router.get('/get-auth-data', authController.getAuthData)

module.exports = router;
