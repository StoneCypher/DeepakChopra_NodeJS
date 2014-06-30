
// deepak_node.js

'use strict';

var fs   = require('fs');
var path = require('path');





function DeepakGenerator() {



    var libdir = path.join(path.dirname(fs.realpathSync(__filename)), '../lib');
    var source = (process.argv.length > 2)? process.argv[2] : path.join(libdir, '/default_deepak_data.json');



    function randFrom(X) {
        return X[ Math.floor(Math.random() * X.length) ];
    }

    function makeDC(Data) {
        var out = '';
        for (var i in Data.pattern) { out += randFrom(Data[Data.pattern[i]]); }
        return out;
    }



    if (fs.existsSync(source)) {
        var Data = require(source);
        console.log(makeDC(Data));
    } else {
        console.log('\nFatal error: requested source datafile does not exist.\n  "' + source + '"');
    }



}





exports.choprify = DeepakGenerator;
