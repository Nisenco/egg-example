'use strict';
const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = 'home--index';
  }

  async list() {
    const { ctx, service } = this;
    ctx.body = 'home---list';
    const result = await service.user.creatData();
    ctx.body = result;
  }

  async getData() {
    const { ctx, service, app } = this;
    const pageIndex = ctx.query.pageIndex || '';
    const pageSize = ctx.query.pageSize || 20;
    const dataList = await service.user.getData(pageIndex, pageSize);
    // await service.user.saveDB(dataList);
    // const insertDataBase = await service.user.saveDB(dataList);
    const errStatus = dataList.data;
    console.log(dataList, '=+++');
    let _length = dataList.data.length;
    const temp = {
      state: errStatus ? '0' : '10',
      Value: dataList,
      Msg: errStatus ? '查询成功' : '查询失败',
    };
    if (temp.state === '0') {
      app.cache.lastCursor = dataList.data[_length - 1].order;
    }
    ctx.body = temp;
  }
}

module.exports = HomeController;
