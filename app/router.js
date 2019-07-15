'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get('/news', controller.home.list);
  router.get('/news/data', controller.home.getData);
  // router.get('/user/:id', controller.user.index);
};
