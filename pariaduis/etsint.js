function numberFormat(number) {
    return number.toLocaleString('en-US', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    });
}

let x = 1234567.89;
const str = numberFormat(x);

console.log(str); // Output: "1,234,567.89"
