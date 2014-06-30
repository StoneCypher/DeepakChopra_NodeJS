
// deepak_node.js

'use strict';





var fs     = require('fs');
var path   = require('path');
var libdir = path.join(path.dirname(fs.realpathSync(__filename)), '../lib');
var source = (process.argv.length > 2)? process.argv[2] : path.join(libdir, '/default_deepak_data.js');

if (fs.existsSync(source)) {
	console.log('Found it.');
} else {
	console.log('\nFatal error: requested source datafile does not exist.\n  "' + source + '"');
}
