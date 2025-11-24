// TODO: Create double(x) and quadruple(x) that uses double
// Example:
// function double(x) { return x * 2; }
// function quadruple(x) { return double(double(x)); }
function double(x) {
    return x * 2;
}
function quadruple(x) {
    return double(double(x));
}
console.log(double(8));
console.log(quadruple(8));