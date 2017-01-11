/*
* @Author: amber
* @Date:   2017-01-03 11:20:26
* @Last Modified by:   amber
* @Last Modified time: 2017-01-03 15:01:08
*/

'use strict';
var server = require("./server");
var router = require("./router");
var requestHandlers=require("./requestHandlers");

var handle={};
handle["/"]=requestHandlers.start;
handle["/start"]=requestHandlers.start;
handle["/upload"]=requestHandlers.upload;
handle["/show"] = requestHandlers.show;
server.start(router.route,handle);