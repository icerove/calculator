import { ContractPromise } from "near-sdk-as";
import { AddArgs } from "./model";

const OTHER_CONTRACT = "mayday.testnet";

class Unit {}

@nearBindgen
export class CalculatorApi {
  add(a: string, b: string): ContractPromise {
    let promise = ContractPromise.create<AddArgs>(
      OTHER_CONTRACT,
      "addLongNumbers",
      {a, b},
      100000000000000
    );
    return promise;
  }
}

export function calculate(a: string, b: string): void {
  let calculator = new CalculatorApi();
  let promise = calculator.add(a, b);
  promise.returnAsResult();
}

export function print(): void {
  let promise = ContractPromise.create(
    OTHER_CONTRACT,
    "printHelloWorld",
    {} as Unit,
    100000000000000
  );
  promise.returnAsResult();
}
