// 1. Declaring variables firstname, lastname, age and printing  a sentence
let firstName = "Thomas";

let lastName = "Carson";

let age = 30;

console.log(`My name is ${firstName} ${lastName} and I am ${age} years old. `);


//2. Creating two  variables num1 and num2 and performing Arithmetic operations

let num1 = 15;

let num2 = 8;

let sum = num1 + num2;

let Difference = num1 - num2;
let Product = num1 * num2;
let Quotient = num1/num2;

console.log('The sum is', sum);
console.log('The Difference is', Difference);
console.log('The Product is', Product);
console.log('The Quotient is', Quotient);

//Or

console.log(`Sum: ${num1 + num2}`);      
console.log(`Difference: ${num1 - num2}`); 
console.log(`Product: ${num1 * num2}`);   
console.log(`Quotient: ${num1 / num2}`);  

//3. Temperature Check using if conditional staements
let temperature = 22;
if (temperature<20) {
    console.log(`It is cold since the temperature ${temperature} is less than 20`);
} else {
    console.log(`It is warm because the temperature ${temperature} is more than 20`)
}

//4. Price with discount
let price = 50;
let discount = 10;
let finalPrice = price - discount;
console.log(`Final Price: $${finalPrice}`);

//5. Check whether a number is positive, negative, or zero
let number = 47;
if(number>0){
    console.log(`${number} is a positive number`);
} else if(number<0){
    console.log(`${number} is a negative number`);
} else {
    console.log(`Zero`);
}



