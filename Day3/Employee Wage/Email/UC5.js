function isValidEmail(email) {
  let emailRegex = /^abc([_\+\-\.][a-zA-Z0-9]+)?@bridgelabz\.co(\.[a-zA-Z]{2})?$/;
  return emailRegex.test(email);
}

// Test cases
console.log(isValidEmail("abc@bridgelabz.co"));       // true
console.log(isValidEmail("abc.xyz@bridgelabz.co"));   // true
console.log(isValidEmail("abc_123@bridgelabz.co"));   // true
console.log(isValidEmail("abc-xyz@bridgelabz.co.in"));// true
console.log(isValidEmail("abc+test@bridgelabz.co.us"));// true
console.log(isValidEmail("abc@bridgelabz.com"));      // false (Third part must be "co")
console.log(isValidEmail("abcxyz@bridgelabz.co.in"));// false (Missing required special character before optional part)
console.log(isValidEmail("abc!xyz@bridgelabz.co.in"));// false (Invalid special character `!`)
console.log(isValidEmail("abc@bridgelabz.co.123"));   // false (Invalid TLD)
console.log(isValidEmail("abc.xyz@bridgelabz"));      // false (Missing ".co")
console.log(isValidEmail("abc@bridgelabz.co.ind"));   // false (TLD must be exactly 2 characters)
