/*
* @Author: amber
* @Date:   2016-12-01 11:07:54
* @Last Modified by:   amber
* @Last Modified time: 2016-12-01 11:08:21
*/

'use strict';
var server = require("./server");
var router = require("./router");

server.start(router.route);