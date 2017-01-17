/*
* @Author: amber
* @Date:   2017-01-16 14:58:46
* @Last Modified by:   amber
* @Last Modified time: 2017-01-16 17:28:43
*/

'use strict';
var mongoose = require('mongoose');  
var blobSchema = new mongoose.Schema({  
  name: String,
  badge: Number,
  dob: { type: Date, default: Date.now },
  isloved: Boolean
});
mongoose.model('Blob', blobSchema);