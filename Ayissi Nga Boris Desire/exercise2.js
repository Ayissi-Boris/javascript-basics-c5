//6. Printing Pass/Fail based on score
let score = 75;
if(score>=50) {
    console.log("Pass");
} else (
    console.log("Fail")
)

//7. Compare two numbers
let a = 12;
let b = 15;
if(a>b) {
    console.log(`${a} is greater than ${b}`);
} else {
    console.log(`${b} is greater than ${a}`)
}

//8. Voting eligibility
let VotingAge = 16;
if(VotingAge>=18){
    console.log("Can Vote");
} else {
    console.log("Cannot Vote");
}

//Or

console.log(VotingAge >= 18? "Can Vote" : "Cannot Vote");

//9. Weekend Check
let isWeekEnd = true;
// if(isWeekEnd){
//     console.log("No work today!");
// }else {
//     console.log("Time to work!");
// }

//Or

console.log(isWeekEnd? "No work today!" : "Time to work!")


//10. Even/Odd Number check
let num = 24;
if(num%2 ==0) {
    console.log(`${num} is even`);
} else{
    console.log(`${num} is odd`);
}
//Or
    console.log( num % 2 == 0? `${num} is even` : `${num} is odd`);



