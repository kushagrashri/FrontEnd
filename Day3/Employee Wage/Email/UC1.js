function isValidEmail(email) {
  let emailRegex = /^abc(\.[a-zA-Z0-9]+)?@bridgelabz\.co(\.[a-zA-Z]{2,})?$/;
  return emailRegex.test(email);
}

// Test cases
console.log(isValidEmail("abc.xyz@bridgelabz.co.in"));  // true
console.log(isValidEmail("abc@bridgelabz.co.in"));      // true
console.log(isValidEmail("abc@bridgelabz.co"));         // true
console.log(isValidEmail("abc@bridgelabz.co.us"));      // true
console.log(isValidEmail("xyz@bridgelabz.co.in"));      // false (Doesn't start with "abc")
console.log(isValidEmail("abc.xyz@company.co.in"));     // false (Not "bridgelabz")
console.log(isValidEmail("abc.xyz@bridgelabz.com"));    // false (Missing "co")
console.log(isValidEmail("abc.xyz@bridgelabz"));        // false (Missing ".co")
console.log(isValidEmail("abc@bridgelabz.co.123"));     // false (Invalid TLD)
