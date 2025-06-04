JavaScript & HTML Code Challenges

This README outlines the JavaScript and HTML programming challenges completed. The work covers user input handling, conditional logic, array processing, and simple DOM interaction using plain JavaScript and HTML.



JavaScript Challenges

1. `fizzBuzz` Function

**Description:**
Combines lengths of two strings and returns:

 `"Fizz"` if divisible by 3
 `"Buzz"` if divisible by 5
 `"FizzBuzz"` if divisible by both

js
function fizzBuzz(str1, str2) {
  const length = str1.length + str2.length;
  if (length % 15 === 0) return "FizzBuzz";
  if (length % 3 === 0) return "Fizz";
  if (length % 5 === 0) return "Buzz";
  return "";
}
```

---

 2. Year of Birth Classification

**Description:**
Prompts user for their year of birth and logs whether they are a minor (under 18), youth (18–36), or elder (above 36).

```js
const year = prompt("Enter your year of birth:");
const age = new Date().getFullYear() - parseInt(year);

if (age < 18) {
  console.log("You are a minor.");
} else if (age <= 36) {
  console.log("You are a youth.");
} else {
  console.log("You are an elder.");
}
```



3. `twoSum` Function

**Description:**
Finds two indices of numbers that sum up to a target value.

```js
function twoSum(nums, target) {
  const map = {};
  for (let i = 0; i < nums.length; i++) {
    const diff = target - nums[i];
    if (map[diff] !== undefined) return [map[diff], i];
    map[nums[i]] = i;
  }
}
```



4. Sort Array by Type

**Description:**
Splits a mixed array into evens, odds, and single-character strings.

```js
function categorizeArray(arr) {
  const result = { evens: [], odds: [], chars: [] };

  arr.forEach(item => {
    if (typeof item === "number" || !isNaN(item)) {
      const num = Number(item);
      (num % 2 === 0 ? result.evens : result.odds).push(num);
    } else if (typeof item === "string" && item.length === 1) {
      result.chars.push(item);
    }
  });

  result.evens.sort((a, b) => a - b);
  result.odds.sort((a, b) => a - b);
  result.chars.sort();
  return result;
}
```



 5. Check for Duplicates

**Description:**
Returns `true` if any element in array appears more than once.

```js
function hasDuplicate(nums) {
  const set = new Set();
  for (let num of nums) {
    if (set.has(num)) return true;
    set.add(num);
  }
  return false;
}
```



 6. Find Unique Element

**Description:**
Returns the element that appears only once when all others appear twice.

```js
function findUnique(nums) {
  return nums.reduce((acc, num) => acc ^ num, 0);
}
```


```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>JavaScript Practice</title>
</head>
<body>
  <h1>Open Console to See Output</h1>
  <script src="script.js"></script>
</body>
</html>
```

