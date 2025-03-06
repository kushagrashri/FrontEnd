function isValidPinCode(pin) {
  let pinRegex = /^[1-9][0-9]{5}$/; // Strict 6-digit PIN validation
  return pinRegex.test(pin); // Returns true if valid, false otherwise
}

// Test cases
console.log(isValidPinCode("400088")); 