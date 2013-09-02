var fs = require('js');
var flattenJSON = require('flatten-json');

flattenJSON(JSON.parse(fs.readFileSync(__dirname + '/.env')), '', process.env);

global.expect = require('expect.js');

