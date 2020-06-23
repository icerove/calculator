let { Runtime }  = require("near-sdk-as/runtime");

let runtime, calculator, caller;

describe("cross contract calls", () => {
  beforeEach(() => {
    runtime = new Runtime();
    calculator = runtime.newAccount("mayday.testnet", __dirname + "/../out/calculator.wasm");
    caller = runtime.newAccount("caller.testnet", __dirname + "/../out/caller.wasm");
  });
  
  test("single promise", () => {
    console.log(caller.call("calculate", {a: "1", b: "2"}, 100000))
  });

});