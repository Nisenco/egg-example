'use strict';
module.exports = app => {
  app.cache = {
    lastCursor: '', // 抓取api page 页
    errorNum: 0,
    mysqlState: false,
  };
  // app.once('server', server => {
  //   console.log(server, 'server');
  // });
  // app.on('error', (err, ctx) => {
  //   console.log(err, 'err');
  //   console.log(ctx);
  // });

  // app.on('request', ctx => {
  //   console.log(ctx, 'request');
  // });
  //
  // app.on('response', ctx => {
  //   const used = Date.now() - ctx.starttime;
  //   console.log(used, 'response');
  // });

};
