'use strict';
const Subscription = require('egg').Subscription;
class updateCache extends Subscription {
  static get schedule() {
    return {
      interval: '10s', // 1 分钟间隔
      type: 'all', //  指定所有的worker 都需要执行
      immediate: false, // 配置了该参数为 true 时，这个定时任务会在应用启动并 ready 后立刻执行一次这个定时任务。
      disable: false, // 配置该参数为 true 时，这个定时任务不会被启动。
    };
  }

  async subscribe() {
    const { service } = this;
    console.log('++++');
    await service.user.getData();
  }
}
module.exports = updateCache;
