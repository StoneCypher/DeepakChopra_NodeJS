
/* jshint node: true */
/* eslint no-sync: 0 */
/* eslint-env node, browser */

// deepak_node.js

"use strict";

var fs   = require("fs"),
    path = require("path"),

    app  = require("commander");

var i;

app.version("1.2.0")
   .option("-c, --count [pos integer]", "Count of Choprifications to deliver")
   .option("--source [filename]",       "Provide your own source datafiles")
   .parse(process.argv);





function DeepakGenerator() {



    var libdir = path.join(path.dirname(fs.realpathSync(__filename)), ".");
    var source = app.source || path.join(libdir, "/default_deepak_data.json");
    var count  = parseInt(app.c || app.count || "1", 10);



    function randFrom(X) {
        return X[ Math.floor(Math.random() * X.length) ];
    }

    function makeDC(Data) {
        var out = "";
        Data.pattern.map(function(i) {
            out += randFrom(Data[i]);
        });
        return out;
    }



    if (fs.existsSync(source)) {

        /* eslint vars-on-top: 0 */
        var Data = require(source);

        for (i=0; i<count; ++i) {
            console.log(makeDC(Data));
        }

    } else {
        console.log("\nFatal error: requested source datafile does not exist.\n  \"" + source + "\"");
    }



}





exports.choprify = DeepakGenerator;
