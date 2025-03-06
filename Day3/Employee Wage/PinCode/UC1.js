function isValidPinCode(pin) {
  let pinRegex = /^[1-9][0-9]{5}$/; // Regex pattern
  return pinRegex.test(pin); // Check if PIN matches the pattern
}

// Test case
console.log(isValidPinCode("400088"));
