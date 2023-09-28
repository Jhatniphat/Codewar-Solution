function addBinary(num1, num2) {
    // Convert the numbers to binary strings.
    let binary1 = num1.toString(2);
    let binary2 = num2.toString(2);
  
    // Pad the shorter string with zeros.
    let paddingLength = Math.max(binary1.length, binary2.length) - Math.min(binary1.length, binary2.length);
    let paddedBinary1 = binary1 + "0".repeat(paddingLength);
    let paddedBinary2 = binary2 + "0".repeat(paddingLength);
    console.log(paddingLength)

    // Initialize the carry.
    let carry = 0;
  
    // Add the two binary strings one digit at a time.
    let result = "";
    for (var i = paddedBinary1.length - 1; i >= 0; i--) {
      let sum = paddedBinary1[i] + paddedBinary2[i] + carry;
      carry = Math.floor(sum / 2);
      result = sum % 2 + result;
      console.log("sum :" + sum)
      console.log("paddedBinary1 : " + paddedBinary1[i] + " paddedBinary2 : " + paddedBinary2[i])
      console.log("result : " + result + "carry :" + carry);
    }
  
    // If there is a carry, add it to the front of the result.
    if (carry > 0) {
      result = "1" + result;
    }
  
    return result;
  }

console.log(addBinary(1,1))