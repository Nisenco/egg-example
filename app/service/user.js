'use strict';
const Service = require('egg').Service;

class UserService extends Service {
  async getUser(id) {
    return await `用户${id}`;
  }
  async creatData() {
    const { app } = this;
    const result = await app.mysql.insert('test', { id: 8, name: 'nihaos' });
    return result;
  }

  async getData(pageIndex, pageSize) {
    const { ctx, app } = this;
    const { serverUrl } = app.config.readhub;
    try {
      const topicUrl = `${serverUrl}/topic?lastCursor=${pageIndex}&pageSize=${pageSize}`;
      const result = await ctx.curl(topicUrl, {
        dataType: 'json',
        followRedirect: true, // followRedirect {Boolean} - 将HTTP 3xx响应作为重定向。默认为false。
      });
      if (result.status === 200) {
        return result.data;
      } else {
        return result;
      }
    } catch (error) {
      console.log(error);
    }
  }

  async saveDB(dataList) {
    try {
      const { app } = this;
      dataList.data.forEach(item => {
        app.mysql.insert('news', {
          id: item.id,
          order: item.order,
          title: item.title,
          jsonstr: JSON.stringify(item),
          createdAt: new Date(item.createdAt).getTime(),
          updatedAt: new Date(item.updatedAt).getTime(),
        })
          .then(() => {
            console.log('++++++++');
          });
      });
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = UserService;
