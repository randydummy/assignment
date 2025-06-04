const birthYear = prompt("Enter your year of birth:");
const currentYear = new Date().getFullYear();
const age = currentYear - Number(birthYear);

if (isNaN(age) || age < 0 || age > 150) {
    console.log("Invalid year entered.");
} else if (age < 18) {
    console.log("You are a minor.");
} else if (age >= 18 && age <= 36) {
    console.log("You are a youth.");
} else {
    console.log("You are an elder.");
}
