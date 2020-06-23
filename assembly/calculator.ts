export function addLongNumbers(a: string, b: string): string {
  // Similar to long addition by hand, we start with the least significant digits first
  const aReversed = a.split("").reverse();
  const bReversed = b.split("").reverse();

  // We initiatize our resultant variable to be one more than the largest number's length
  const maxLength = max(a.length, b.length);
  let resultArray = new Array<String | null>(maxLength + 1);
  let result = "";
  let carry = 0;

  // Loop through each digit adding the value to the other number, if it exists
  for (let i = 0; i < maxLength; ++i) {
    let aDigit = i < a.length ? U32.parseInt(aReversed[i]) : 0;
    let bDigit = i < b.length ? U32.parseInt(bReversed[i]) : 0;
    let digitSum = aDigit + bDigit + carry;

    // Keep track of the carry amount
    if (digitSum >= 10) {
      carry = 1;
      digitSum -= 10;
    } else {
      carry = 0;
    }

    resultArray[i] = digitSum.toString();
  }

  // If the final addition has a carry, add it to the extra slot we initialized for it
  if (carry > 0) {
    resultArray[maxLength] = carry.toString();
  }

  // Reverse again and combine the values for the final result
  let reversedResultArray = resultArray.reverse();
  return reversedResultArray.join("");
}

export function printHelloWorld(): string {
  return "Hello World";
}
