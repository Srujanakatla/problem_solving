// 33. Sort an Array of Numbers
// 	- Task: Sort an array of numbers in ascending order.
// 35. Find the Second Largest Number in an Array
// 	- Task: Find the second largest number in a given array.
// 41. Count Positive and Negative Numbers
// 	- Task: Count how many positive and negative numbers are in an array.


//using sorting method
let numbers = [5, 2, 9, 1, 5, 6];
numbers.sort((a, b) => a - b);
console.log(numbers); 
console.log("*******");

//using loops
let number = [5, 2, 9, 1, -+5, 6];
for (let i = 0; i < number.length; i++) {
    let minIndex = i;
    for (let j = i + 1; j < number.length; j++) {
        if (number[j] < number[minIndex]) {
            minIndex = j;  
        }
    }
    [number[i], number[minIndex]] = [number[minIndex], number[i]];  
}
console.log(number);  
console.log("*******");

let num = [5, 2, 9, 1, 5, 6];
for (let i = 0; i < num.length; i++) {
    for (let j = 0; j < num.length - i - 1; j++) {
        if (num[j] > num[j + 1]) {
            [num[j], num[j + 1]] = [num[j + 1], num[j]];  
        }
    }
}
console.log(num);  
console.log("*******");

// 35. Find the Second Largest Number in an Array
let a = [3, 45, 6, 7, 23, 5, 7, 8];
let b = [...new Set(a)].sort((a, b) => b - a);
let c = b[1];
console.log(c); 
console.log("*******");

let numb = [3, 45, 6, 7, 23, 5, 7, 8];
let largest = -Infinity;   
let secondLargest = -Infinity; 
// for (let i = 0; i < numb.length; i++)
for (let num of numb) {
// {
//     let num = numb[i]; 
    if (num > largest) {     
        secondLargest = largest; 
        largest = num;       
    } else if (num > secondLargest && num !== largest) { 
        secondLargest = num; 
    }
}

console.log(secondLargest);  

console.log("*****");

let array = [-3, -1, 2, 5, -6, 7,-9];
let positive = array.filter(num => num > 0).length;
let negative = array.filter(num => num < 0).length;
console.log(`Positive: ${positive}, Negative: ${negative}`);

console.log("*****");

let arr = [-3, -1, 2, 5, -6, 7];
let positiveCount = 0, negativeCount = 0;
for (let num of arr) {
    // for (let i = 0; i < numbers.length; i++) { 
    //     let num = numbers[i];
    if (num > 0) {
        positiveCount++;  
    } else if (num < 0) {
        negativeCount++;  }
}

console.log(`Positive: ${positiveCount}, Negative: ${negativeCount}`);



let arraysss = [2,3,4,1,5,7,2,3]
function removearr(arr)
{
    let unq = [];
    let no = [];
    for(i=0;i<arr.length;i++)
    {
    if(!unq[arr[i]])
    {
    unq[arr[i]]=true;
    no.push(arr[i])
}
}
return no;
}
console.log(removearr(arraysss))



