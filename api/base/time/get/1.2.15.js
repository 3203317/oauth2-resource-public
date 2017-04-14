/*!
 * oauth2-resource-public
 * Copyright(c) 2017 huangxin <3203317@qq.com>
 * ISC Licensed
 */
'use strict';

const URL = require('url');

module.exports = function(app, opts){
  return new Method(app, opts);
}

var Method = function(app, opts){
  var self = this;
  opts = opts || {};
  self.is_free = true;
  self.interval_time = opts.interval_time || 30;
  self.def_num = opts.def_num || 5;
};

var pro = Method.prototype;

pro.params = function(req, res, next){
  next();
};

pro.exec = function(req, res, next){
  var result = {
    data: {
      today: !0,
      sys_time: new Date().getTime()
    }
  };
  res.send(result);
};