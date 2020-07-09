const BaseController = require('./base.controller');
const AuthService = require('./../services/auth.service');
const AccountRepository = require('./../repositories/account.repository');
const UserRepository = require('./../repositories/user.repository');


class AuthController extends BaseController {
  constructor() {
    super();
    this.authService = new AuthService(
      new AccountRepository(),
      new UserRepository(),
      console,
      null
    );
  }

  root(req, res, next) {
    res.send('respond with a resource');
  }
  
  
  async login(req, res, next) {
    let resultData = await this.authService.login(req.body);
    return res.json(resultData);
  }
  
  async register(req, res) {
    console.log('this', this, req, res)
    let resultData = await this.authService.register(req.body);
    return res.json(resultData);
  }
  
  async getAuthData (req, res) {
    try {
      let decodedTokenData = jwt.verify(req.headers['x-access-token'], secret);
      let user = await this.authService.getAccountData(decodedTokenData)
      if (_.isNil(user)) {
        return res.send({error: createError(404), data: { message: 'no user found'}});
      }
      return res.json(user);
    } catch (error) {
      return res.send({error: createError(401), data: error});
    }
  }
}

module.exports = AuthController