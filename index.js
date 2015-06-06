var isString = require('x-is-string');

var regex = /^c[^\s-]{8,}$/;
module.exports = function(v){
  return isString(v) && regex.test(v);
};
