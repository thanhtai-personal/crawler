const BaseService = require('./base.service');
const { secret } = require('./../constants');
const jwt = require('jsonwebtoken');

class AuthService extends BaseService {
  constructor(accountRepository, usersRepository, logger, mailer) {
    super(logger);
    this.accountRepository = accountRepository;
    this.usersRepository = usersRepository;
    this.mailer = mailer;
  }

  async login(data) {
    let account = await accountRepository.findByEmail(data.email);
    if (account) {
      let decodePassword = jwt.verify(account.password, secret)
      if (data.password === decodePassword) {
        let token = jwt.sign({
          email: account.email,
          id: account.id
        }, secret, { expiresIn: 60 * 60 * 24 });
        this.logger?.log('login success!');
        return {
          message: 'Login success!',
          token: token
        }
      } else {
        this.logger?.log('wrong username or password!');
        return {
          message: 'wrong username or password!'
        }
      }
    } else {
        this.logger?.log('wrong username or password!');
        return {
        message: 'wrong username or password!'
      }
    }
  }

  async register(data) {
    let account = await this.accountRepository.findByEmail(data.email);
    if (!account) {
      data.password = jwt.sign(data.password, secret);
      let account = await this.accountRepository.createOrUpdateaccount(data);
      await this.usersRepository.createOrUpdateUser(data);
      this.logger?.log('created account and user');
      return {
        message: 'created account and user',
        data: account
      };
    } else {
      this.logger?.log('account is existed');
      return {
        message: 'account is existed'
      };
    }
  }

  async getAuthData(tokenData) {
    try {
      // let user = await this.usersRepository.getUser(tokenData.userId || tokenData.email);
      let account = await this.accountRepository.getAccount(tokenData.email);
      return account;
    } catch (error) {
      this.logger?.log(error?.message);
      return error;
    }
  }
}

module.exports = AuthService;