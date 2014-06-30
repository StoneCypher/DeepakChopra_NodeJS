
// deepak_node.js

'use strict';

var fs   = require('fs');
var path = require('path');





function DeepakGenerator() {

    function randFrom(X) {
        return X[ Math.floor(Math.random() * X.length) ];
    }

    function makeDC() {
        return randFrom(Data.starts) + randFrom(Data.middles) + randFrom(Data.qualifiers) + randFrom(Data.finishes);
    }

    var libdir = path.join(path.dirname(fs.realpathSync(__filename)), '../lib');
    var source = (process.argv.length > 2)? process.argv[2] : path.join(libdir, '/default_deepak_data.json');

    if (fs.existsSync(source)) {
        console.log('Found it.');
        var Data = require(source);
    } else {
        console.log('\nFatal error: requested source datafile does not exist.\n  "' + source + '"');
    }



}

exports.choprify = DeepakGenerator;
