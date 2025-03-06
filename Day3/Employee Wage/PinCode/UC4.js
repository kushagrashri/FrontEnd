function isValidPinCode(pin) {
  let pinRegex = /^[1-9][0-9]{2}\s?[0-9]{3}$/; // Allow optional space in PIN
  return pinRegex.test(pin); // Returns true if valid, false otherwise
}

// Test cases
console.log(isValidPinCode("400088")); 
console.log(isValidPinCode("400 088")); 