function isValidPinCode(pin) {
  let pinRegex = /^[1-9][0-9]{5}$/; // PIN Code validation regex
  return pinRegex.test(pin); // Returns true if valid, false otherwise
}

// Test cases
console.log(isValidPinCode("400088"));