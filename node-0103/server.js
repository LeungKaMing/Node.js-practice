/*
* @Author: amber
* @Date:   2017-01-03 11:20:35
* @Last Modified by:   amber
* @Last Modified time: 2017-01-03 15:14:05
*/

'use strict';
var http = require("http");
var url = require("url");

function start(route, handle) {
  function onRequest(request, response) {
    var pathname = url.parse(request.url).pathname;
    console.log("Request for " + pathname + " received.");

        route(handle,pathname,response,request);
    }

  http.createServer(onRequest).listen(8888);
  console.log("Server has started.");
}

exports.start = start;