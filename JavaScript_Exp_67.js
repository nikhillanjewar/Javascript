// for a given array of numbers, print the square of each value using the forEachloop

let num = [2,3,4,5,6];
num.forEach((num) =>{
    console.log(num*num)
});


//second method

let nums = [2,3,4,5,6];
let calcSquare = (nums) =>{
    console.log(nums*nums)
}
nums.forEach(calcSquare);

