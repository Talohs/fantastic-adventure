
console.log('Hello from the homework.js')
//==================Exercise #1 ==========//
/*
    Given the array [1, 2, 3, 5, 6, 7],  finds the index of the first non-consecutive element in the array.
    It should log out 3 because the array at index 3 is 5 which is not consecutive.
*/


let exerciseOneArr = [1, 2, 3, 5, 6, 7]

for (let i = 0; i < exerciseOneArr.length; i++){
    if (exerciseOneArr[i+1] > exerciseOneArr[i] + 1 ){
        console.log(exerciseOneArr[i+1])
    }
}


//============Exercise #2 ============//
/*
Given the two array of numbers below, loop through them both individually and the sum all of the positives elements.

Example 1:
Input: [10, 12, -9, 3, -1, 0, 15] 
Output: 40
Explain: 10 + 12 + 3 + 15 = 40

Example 2:
Input: [3, 5, 7, 9, -10, 2, -22, -1] 
Output: 26

Note: if there is nothing to sum, the sum is default to 0.
*/

let numbers1 = [10, 12, -9, 3, -1, 0, 15] 


let numbers2 = [3, 5, 7, 9, -10, 2, -22, -1] 

var sum = 0
for(let num of numbers1){
    if (num > 0){
    sum += num
}
}
console.log(sum)

var sum = 0
for(let num of numbers2){
    if (num > 0){
    sum += num
}
}
console.log(sum)