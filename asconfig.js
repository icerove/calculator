const compile = require("near-sdk-as/compiler").compile

compile("assembly/calculator.ts", // input file
        "out/calculator.wasm",    // output file
        [
        //   "-O1",          // Optional arguments
        "-Oz",
        "--measure",         // Shows compiler runtime
        ], {
          verbose: true     // Output the cli args passed to asc
        });

compile("assembly/caller.ts", // input file
        "out/caller.wasm",    // output file
        [
        //   "-O1",          // Optional arguments
        "-Oz",
        "--measure",         // Shows compiler runtime
        ], {
          verbose: true     // Output the cli args passed to asc
      });

