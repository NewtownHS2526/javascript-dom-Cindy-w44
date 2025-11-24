// TODO: Create function checkAge(age) with early return
// Example:
// function checkAge(age) {
//     if (age < 0) return "Invalid";
//     if (age < 18) return "Minor";
//     return "Adult";
// }
function checkAge(age) {
    if (age < 0 ) return "Invalid";
    if (age < 18) return "Minor";
    if (age > 200) return "How";
    return "Adult";
} 

console.log(checkAge(1580));
