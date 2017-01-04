/*
* @Author: amber
* @Date:   2016-11-29 11:42:37
* @Last Modified by:   amber
* @Last Modified time: 2017-01-04 15:12:21
*/

'use strict';
module.exports = {
  port: 3000,
  session: {
    secret: 'wwg',
    key: 'wwg',
    maxAge: 2592000000
  },
  mongodb: 'mongodb://localhost:27017/wwg'
};
//port: 程序启动要监听的端口号
//session: express-session 的配置信息，后面介绍
//mongodb: mongodb 的地址，myblog 为 db 名