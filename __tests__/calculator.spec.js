let { Runtime } = require("near-sdk-as/runtime");

let runtime, calculator, caller;

describe("cross contract calls", () => {
  beforeEach(() => {
    runtime = new Runtime();
    calculator = runtime.newAccount(
      "mayday.testnet",
      __dirname + "/../out/calculator.wasm"
    );
    caller = runtime.newAccount(
      "caller.testnet",
      __dirname + "/../out/caller.wasm"
    );
  });

  test("single promise", () => {
    const calc = caller.call("calculate", { a: "1", b: "9" }, 100000);
    expect(calc.return_data).toBe("10");
  });

  test("promise without params", () => {
    const text = caller.call("print", {}, 100000);
    expect(text.return_data).toBe("Hello World");
  });
});
