let amount = 1;

// Convert string to number
// amount = parseInt(amount);
// amount = +amount;
// amount = Number(amount);

// Convert number to string
// amount = amount.toString();
// amount = String(amount);

// Convert string to decimal
// amount = parseFloat(amount);

// Convert number to boolean
amount = Boolean(amount);

console.log(amount, typeof amount);

// Ways to get NaN
console.log(Math.sqrt(4));
console.log(1 + NaN);
console.log(undefined + undefined);
console.log('foo' / 3);