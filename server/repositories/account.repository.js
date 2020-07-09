const BaseRepository = require('./base.repository');

class AccountRepository extends BaseRepository {
    constructor() {
        super();
    }

    async findByEmail(email) {
        return {};
    }

    async createOrUpdateaccount(data) {
        return {};
    }

    async getAccount(email) {
        return {};
    }
}

module.exports = AccountRepository;