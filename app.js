/*!
 * oauth2-resource-public
 * Copyright(c) 2017 huangxin <3203317@qq.com>
 * ISC Licensed
 */
'use strict';

const http = require('http');
const OpenA = require('opena');

var app = OpenA();

app.use(OpenA.api.logger());
app.use(OpenA.api.method(app.apis));
app.use(OpenA.api.ver(app.apis));
app.use(OpenA.api.params(app.apis));

app.use(OpenA.api.exec(app.apis));
app.use(OpenA.api.error());

var port = process.env.PORT || 3006;
var server = http.createServer(app);

server.listen(port, () => {
  console.info('[INFO ] resource server listening on port %s.', port);
});