

// REFERENCE DATA TYPES

// ARRAYS , OBJECTS , SETS,....

// ARRAY


let array1 = [];

let agesArray = [10, 20, 40, 50 , 60 , 90, 100, 74, 849, 930,5,3903,9, 0 ,74, 8489];

let namesArray = ['Adefolarin', 'Martins', 'Oluwaseun', 'Maryam', 'Chika'];

let AdefolarinArray = ['Adefolarin', 30 , 'male', 'red', false,];


console.log(AdefolarinArray)



// console.log(AdefolarinArray);
//Operations on an Array
// console.log(agesArray[3])
console.log(agesArray.length)
// console.log(agesArray[agesArray.length-1])

// console.log(agesArray)
agesArray.push(5000);
// console.log(agesArray)
agesArray.unshift(5);
// console.log(agesArray);

agesArray.pop()
agesArray.shift()

// console.log(agesArray[0]);



// Objects


// []

const personObject = {
    name: 'Adefolarin',
    age : 30,
    sex : 'male',
    isMarried : false,
    favClub : 'Liverpool',
    classmateNameArray : ['shola', 'kunbi', 'Shayo']
}


personObject.favClub = 'Real Madrid';

// Operations on Objects

console.log(personObject.favClub);














