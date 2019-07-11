'use strict';
const Controller = require('egg').Controller;

// Controller 基类有下列属性:
// ctx - 当前请求的 Context 实例。
// app - 应用的 Application 实例。
// config - 应用的配置。
// service - 应用所有的 service。
// logger - 为当前 controller 封装的 logger 对象。
class UserController extends Controller {
  async index() {
    const { ctx, service } = this;
    const id = await ctx.params.id;
    // await service.user.getUser()
    ctx.body = await service.user.getUser(id);
  }
}

module.exports = UserController;
