/*
* @Author: amber
* @Date:   2016-12-01 11:07:18
* @Last Modified by:   amber
* @Last Modified time: 2016-12-01 11:07:34
*/

'use strict';
var http = require("http");
var url = require("url");

function start(route) {
  function onRequest(request, response) {
    var pathname = url.parse(request.url).pathname;
    console.log("Request for " + pathname + " received.");

    route(pathname);

    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write("Hello World");
    response.end();
  }

  http.createServer(onRequest).listen(8888);
  console.log("Server has started.");
}

exports.start = start;