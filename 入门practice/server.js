/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2016-10-17 12:21:36
 * @version $Id$
 */
// var http= require("http");   //请求node.js 自带的http模块
// http.createServer(function(request,response){
//     response.writeHead(200,{"Content-Type": "text/plain"});
//     response.write("hello world");
//     response.end();
// }).listen(8888);

// 调用http模块提供的函数： createServer 。这个函数会返回一个对象，
// 这个对象有一个叫做 listen 的方法，这个方法有一个数值参数，
// 指定这个HTTP服务器监听的端口号
// 在createServer 函数传递了一个匿名函数
// 在js中，一个函数可以作为另一个函数接收一个参数

// var http=require("http");
// var url=require("url");

// function start(route,handle){
//     function onRequest(request,response){
//         var pathname=url.parse(request.url).pathname;
//         console.log("Request for " + pathname+" received .");
        
//         route(handle,pathname, response);
//         // response.writeHead(200,{"Content-Type": "text/plain"});
//         // var content=route(handle, pathname);
//         // response.write(content);
//         // response.end();
//     }
//     http.createServer(onRequest).listen(8888);
//     console.log("server has started.");
// }
// exports.start=start;


var http=require("http");
var url=require("url");

function start(route,handle){
    function onRequest(request,response){
        var pathname=url.parse(request.url).pathname;
        console.log("Request for " + pathname+" received .");
        route(handle, pathname, response, request);
}
        
    http.createServer(onRequest).listen(8888);
    console.log("server has started.");
}
exports.start=start;