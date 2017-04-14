/*!
 * oauth2-resource-public
 * Copyright(c) 2017 huangxin <3203317@qq.com>
 * ISC Licensed
 */
'use strict';

module.exports = {
  oauth2: {
    mysql: {
      database: 'oauth2',
      host: '127.0.0.1',
      port: 22306,
      user: 'root',
      password: 'password',
      connectionLimit: 50
    },
    redis: {
      port: 22379,
      host: '127.0.0.1',
      password: '123456'
    }
  },
  foreworld: {
    mysql: {
      database: 'foreworld',
      host: '127.0.0.1',
      port: 22306,
      user: 'root',
      password: 'password',
      connectionLimit: 50
    }
  }
};