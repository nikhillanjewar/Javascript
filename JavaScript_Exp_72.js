//take a number n as input from user. Create an array of numbers from 1 and n. Use the reduce method to calculate sum of allnumbers in the array. SUe the reduce method to calculate product of all numbers in the array.\


let n = prompt("Enter a Number:");
let arr = [];
for (let i=0; i<=n; i++ ){
    arr[i-1] = i;
}
console.log(arr);

let sum = arr.reduce((res, curr)=>{
    return  res + curr;
});
console.log(sum);

let factorial = arr.reduce((res, curr)=>{
    return  res * curr;
});
console.log(factorial);

