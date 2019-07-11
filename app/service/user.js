'use strict';
const Service = require('egg').Service;

class UserService extends Service {
  async getUser(id) {
    // const { ctx } = this;
    // ctx.body = '用户';
    return await `用户${id}`;
  }
}
module.exports = UserService;
