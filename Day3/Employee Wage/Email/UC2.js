function isValidEmail(email) {
  let emailRegex = /^abc(\.[a-zA-Z0-9]+)?@bridgelabz\.[a-zA-Z]{2,}(\.[a-zA-Z]{2,})?$/;
  return emailRegex.test(email);
}

// Test cases
console.log(isValidEmail("abc@bridgelabz.co.in"));      // true
console.log(isValidEmail("abc.xyz@bridgelabz.co.in"));  // true
console.log(isValidEmail("abc@bridgelabz.com"));        // true
console.log(isValidEmail("abc@bridgelabz.co"));         // true
console.log(isValidEmail("xyz@bridgelabz.co.in"));      // false (Doesn't start with "abc")
console.log(isValidEmail("abc@company.co.in"));         // false (Not "bridgelabz")
console.log(isValidEmail("abcxyz@bridgelabz.co.in"));   // true (no dot required before @)
console.log(isValidEmail("abc.xyz@bridgelabz"));        // false (Missing domain extension)
console.log(isValidEmail("abc@bridgelabz.co.123"));     // false (Invalid TLD)
