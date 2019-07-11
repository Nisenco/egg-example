'use strict';
const Controller = require('egg').Controller;

class PostController extends Controller {
  async creat() {
    const { ctx } = this;
    console.log(ctx);
  }
}

module.exports = PostController;
