//16. Character type check

let char = "A".charCodeAt(0);
let isUpperCase = char >= 65 && char <=90;
let isLowerCase = char >= 97 && char <=122;
if(isUpperCase) console.log(`${char} is in Uppercase `);
else if(isLowerCase) console.log(`${char} is in Lowercase`);
else console.log("Neither")

//17. Driving Eligibility

let age = 25;
let hasLicense = true;
let CanDrive = age>=18 && hasLicense;
console.log(CanDrive? "Can drive" : "Cannot drive");

//18. Discount for Members

let totalAmount = 1000;
let isMember = true;
let discountRate = isMember? 0.20 : 0.05;
let final_amount = (totalAmount-(discountRate*1000));
console.log( `The final amount: ${final_amount}`)

//19. Printing multiples of 3

let number = 15;
for (let i=1; i<=number; i++) {
    if(i%3 == 0)console.log(i);
}

//20. Greeting by Hour

let hour = 14;
if(hour >=5 && hour <=11) console.log("Good morning");
else if(hour >=12 && hour <=17) console.log("Good afternoon");
else if(hour >=18 && hour <=21) console.log("Good afternoon");
else  console.log("Good night")