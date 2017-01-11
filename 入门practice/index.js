/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2016-10-18 09:32:21
 * @version $Id$
 */

// var server=require("./server");
// var router=require("./router");
// var requestHandlers=require("./requestHandlers");

// var handle={}
// handle["/"]=requestHandlers.start;
// handle["/start"]=requestHandlers.start;       
// // 将不同的URL映射到相同的请求处理程序  在对象中添加一个键为“／”的属性
// //配置/start和/的请求都交由start这一处理程序处理。
// handle["/upload"]=requestHandlers.upload;
// //handle 请求处理程序的集合

// server.start(router.route, handle);
// 
// 
var server = require("./server");
var router = require("./router");
var requestHandlers = require("./requestHandlers");

var handle ={}
handle["/"]= requestHandlers.start;
handle["/start"]= requestHandlers.start;
handle["/upload"]= requestHandlers.upload;
handle["/show"]= requestHandlers.show;

server.start(router.route, handle);
