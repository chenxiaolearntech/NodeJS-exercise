var url = require('url');
var obj = url.parse('http://127.0.0.1:3000/pinglun?name=%E9%99%88%E6%BD%87&message=%E6%9C%80%E5%A5%BD%E7%9A%84%E5%A5%B3%E7%94%9F', true);
console.log(obj);