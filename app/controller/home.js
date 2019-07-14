'use strict';
const Controller = require('egg').Controller;
class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = 'home--index';
  };
  async list(){
    const {ctx,service } = this;
    ctx.body = 'home---list';
    const result = await service.user.creatData();
    ctx.body = result;
  }
  async getData(){
    const {ctx,service} = this;
    const pageIndex = ctx.query.pageIndex || '';
    const pageSize = ctx.query.pageSize || 20;
    const dataList = await service.user.getData(pageIndex,pageSize);
    const insertDataBase = await service.user.saveDB(dataList);
    console.log(insertDataBase,'insertDataBase+++');
    ctx.body = {
      State: 0,
      Value: dataList,
      Msg: '查询成功！'
    };
  }
}

module.exports = HomeController;
