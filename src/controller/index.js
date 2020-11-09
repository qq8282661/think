const Base = require('./base.js');

module.exports = class extends Base {
  async indexAction() {
    // const a = 666;
    return this.success(await this.model('user').select());
  }
};
