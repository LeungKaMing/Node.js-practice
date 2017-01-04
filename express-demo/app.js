/*
* @Author: amber
* @Date:   2016-11-24 11:25:46
* @Last Modified by:   amber
* @Last Modified time: 2016-11-24 11:45:50
*/

'use strict';
var express = require('express');
var app = express();
 
var hbs = require('hbs');
var bodyParser = require('body-parser');

// 加载数据模块
var blogEngine = require('./blog');
 
app.set('view engine', 'html');
app.engine('html', hbs.__express);
app.use(bodyParser.urlencoded({ extended:  true}));
 
app.get('/', function(req, res) {
   res.render('index',{title:"最近文章", entries:blogEngine.getBlogEntries()});
});
 
app.get('/about', function(req, res) {
   res.render('about', {title:"自我介绍"});
});
 
app.get('/article/:id', function(req, res) {
   var entry = blogEngine.getBlogEntry(req.params.id);
   res.render('article',{title:entry.title, blog:entry});
});
 
app.listen(3000);