const { think } = require('thinkjs');
const Base = require('./base.js');

for (let i = 1; i < 10000; i++) {
  think
    .model('agent_company')
    .add({ agent_id: i, title: i, manager_uid: i, spcode: i, parent_id: i - 1 });
}

module.exports = class extends Base {
  async indexAction() {
    // const a = 666;
    return this.success(await this.model('user').select());
  }
};
