//11. Grade assignment
let mark = 85;
let grade;
if(mark>=90){
    grade="A";
} else if(mark>=80){
    grade="B";
}
else if(mark>=70){
    grade="C";
}
else if(mark>=60){
    grade="D";
}
else (grade="F")
console.log(`The grade is: ${grade}`)

//Or
// if (marks >= 90) grade = "A";
// else if (marks >= 80) grade = "B";
// else if (marks >= 70) grade = "C";
// else if (marks >= 60) grade = "D";
// else grade = "F";
// console.log(`Grade: ${grade}`);    


//12. Calculation of Area and Perimeter of a Rectangle
let length = 10;
let width = 5;
let AreaOfRectangle = length * width;
let PerimeterOfRectangle = 2 * (length + width);
console.log(`Area= ${AreaOfRectangle}, Perimeter= ${PerimeterOfRectangle}`);

//13. Leap year check

let year = 2024;
let isLeapYear = year%4 == 0 || year%100 && year%400;
console.log( isLeapYear?   year+" is Leap Year" : year+"Not a Leap Year");

//Or
// let isLeap = (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
// console.log(year + (isLeap ? " is" : " is not") + " a leap year");

//14. Divisible by 3 and 5 Number check
let num = 47;
let divisible3 = num%3 == 0;
let divisible5 = num%5 == 0;
if(divisible3 && divisible5) {console.log(`${num} is divisible by both 3 and 5`);}
else if(divisible3){ console.log(`${num} is divisible just by 3 `);}
else if(divisible5) {console.log(`${num} is divisible just by 5 `);}
else {console.log(` ${num} is neither divisble by 3 nor 5`);}

//15. Average grading
let subject1=78;
let subject2=85;
let subject3=92;

let Average = (subject1 + subject2 + subject3)/3;

if(Average>=90) console.log("Excellent");
else if(Average>=75) console.log( "Good");
else if(Average>=60) console.log( "Average");
else console.log( "Need improvement");



