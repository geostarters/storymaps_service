var fs = require('fs');
var os = require('os');

var fileProp = 'path.properties';
var _platform = os.type();
if (_platform.indexOf('Windows') != -1) {
    fileProp = 'path_windows.properties'
};
var _f = JSON.parse(fs.readFileSync(fileProp, 'utf8'));

module.exports = _f;