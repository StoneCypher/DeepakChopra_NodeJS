
// deepak_node.js

'use strict';

var fs   = require('fs');
var path = require('path');

var app  = require('commander');

app.version('1.0.1')
   .option('-c, --count [pos integer]', 'Count of Choprifications to deliver')
   .option('--source [filename]',       'Provide your own source datafiles')
   .parse(process.argv);





function DeepakGenerator() {



    var libdir = path.join(path.dirname(fs.realpathSync(__filename)), '../lib');
    var source = app.source || path.join(libdir, '/default_deepak_data.json');
    var count  = parseInt(app.c || app.count || '1', 10);



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

        for (var i=0; i<count; ++i) {
            console.log(makeDC(Data));
        }

    } else {
        console.log('\nFatal error: requested source datafile does not exist.\n  "' + source + '"');
    }



}





exports.choprify = DeepakGenerator;
