/*
Basic Array Methods
1. forEach()
Problem: Write a function that takes an array of numbers and prints each number multiplied by 2.
2. map()
Problem: Given an array of names, return a new array with each name converted to uppercase.
3. filter()
Problem: Given an array of numbers, return a new array containing only even numbers.
4. reduce()
Problem: Write a function that returns the sum of all numbers in an array.
5. find()
Problem: Given an array of objects representing students, return the first student with a grade greater than 80.
6. findIndex()
Problem: Find the index of the first negative number in an array.
7. some()
Problem: Check if an array of strings contains at least one string with more than 10 characters.
8. every()
Problem: Check if all elements in an array are greater than 0.
9. includes()
Problem: Write a function that checks if the number 5 is present in an array.
10. indexOf()
Problem: Find the position of the first occurrence of the number 7 in an array.
11. lastIndexOf()
Problem: Find the last occurrence of the number 3 in an array.
12. push()
Problem: Add the number 100 to the end of an array.
13. pop()
Problem: Remove the last element from an array and return it.
14. shift()
Problem: Remove the first element from an array and return it.
15. unshift()
Problem: Add the number 1 at the beginning of an array.
16. slice()
Problem: Given an array, return the first three elements without modifying the original array.
17. splice()
Problem: Remove the second element from an array and insert "New Element" in its place.
18. concat()
Problem: Merge two arrays and return the new array.
19. join()
Problem: Convert an array of words into a single sentence string separated by spaces.
20. reverse()
Problem: Reverse the order of an array without using loops.
21. sort()
Problem: Sort an array of numbers in ascending order.
22. flat()
Problem: Flatten a nested array [1, [2, [3, 4]], 5] into a single-level array.

*/

/*Array task on forEach 
a. problem: Write a function that takes an array of numbers and prints each number multiplied by 2
*/
const number = [2, 3, 4, 5, 6];

const multiply = number.forEach(function sum(item, index, array) {
    console.log(array[index])
       array[index] = item * 2;
});

console.log(number);
console.log(multiply)


//foreach doesn't print new array from give array

// const arrsNumber = [1, 2, 4, 5];

// const multipyBy = arrsNumber.reduce((acc, item)=>{
//         return acc * item;
// }, 2);

// console.log(multipyBy);


//use for 


//Use forEACH TO MODIFY 

const modify = [2, 3, 4, 4, 6, 7];

const solution = modify.forEach(muilt);

function muilt(accumulate, index, array) {
    return array [index] = accumulate * 2;
}

console.log(modify);



 /** Task : Map ()
  * Problem: Given an array of names, return a new array with each name converted to uppercase 
  * solution
  */

function block() {
    const  nameId =  ['smith', 'will', 'white', 'grammy'];

    const changeLetter =  nameId.map(upper);
   
    function upper(value) {
       return value.toUpperCase();
    };
   
    console.log(changeLetter);
}

block();



 //using inline method


 function newBlock() {
    
 const nameOfStudent = ['clinton', 'daniel', 'godtime', 'nke'];
    const newLetter = nameOfStudent.map(value => value.toUpperCase());
    console.log(newLetter);
 }

 newBlock();




 /*
Task 3: Filter()
Problem: Given an array of numbers, return a new array containing only even numbers\

solution*** below
 */

function arryNumber() {
    const numberList = [1,2,3,4,5,6,7,8,9,10];
    const solve = numberList.filter(item => item % 2 == 0);
    console.log(solve);
}

arryNumber();

//Apply funtion method

const numberI = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];

const even =  numberI.filter((value)=>{
    return value % 2 === 0;
})

console.log(even);


/*
Task 4: reduce
Problem: Write a function that returns the sum of all numbers in array.
solution below
*/

function add() {
    const numberValue = [1,2,3,4,5,6,7,8,9];

    const sum = numberValue.reduce((item, value)=>{
        return value += item;
    }, 0);

    console.log(sum);
}

add();


/**
 * Task 5: find()
 * 
 * problem: Given an array of objects representing students, return the student with a grade greater than 80 
 * 
 * solution below
 */



function studentBlock() {
    const studetGrade = [
        {name: 'Emeka', grade: 30},
        {name: 'Brid', grade: 79},
        {name: 'Smith', grade: 69},
        {name: 'Will', grade: 81},
        {name: 'Kenneth', grade: 45},
        {name: 'bed', grade: 83},
        {name: 'Oed', grade: 87},
        {name: 'Obd', grade: 90},
    ]

    const findGrade = studetGrade.find((person)=>{
        if (person.grade >= 80) {
            return  person.grade && person.name;   
        }
    },{});
    console.log(findGrade);
}
studentBlock();

 
/*
Task 6:    findIndex()
problem: find the index of the first negative number in an array
    solution below
*/ 

function negative() {
    const numberS = [20, 30, -40, 50, -23];
    const elementIndex = numberS.findIndex(num => num < 0)
    console.log(elementIndex);
}

negative();



/*
8. every()
Problem: Check if all elements in an array are greater than 0.
solution below
*/

function allElement() {
    const allNum = [2,3,4,5,6,7,8,9];
    const checkPositiveId = allNum.every(item => item > 0);
    console.log(checkPositiveId);
}

allElement();

