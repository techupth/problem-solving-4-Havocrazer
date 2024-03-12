// **Exercise 2: Defanging an IP Address**
// Given a valid (IPv4) IP `address`, return a defanged version of that IP address.
// A *defanged IP address* replaces every period `"."` with `"[.]"`.

// Input: address = "1.1.1.1"
// Output: "1[.]1[.]1[.]1"

// Input: address = "255.100.50.0"
// Output: "255[.]100[.]50[.]0"

// **Constraints:**
// - The given `address` is a valid IPv4 address.

function defangIPaddr(nums) {
  let splitNums = nums.split("");
  let numString = 0;
  for (let i = 0; i < nums.length; i++) {
    if (splitNums[i] === ".") {
      splitNums[i] = "[.]";
      numString = splitNums.join("");
    }
  }
  return numString;
}
const result1 = defangIPaddr("1.1.1.1");
const result2 = defangIPaddr("255.100.50.0");

console.log(result1);
console.log(result2);
