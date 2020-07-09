const BaseRepository = require('./base.repository');

class UserRepository extends BaseRepository {
    constructor () {
        super();
    }

    async createOrUpdateUser(user) {
        return {};
    }
}

module.exports = UserRepository;