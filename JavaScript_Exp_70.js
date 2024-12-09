// Array Methods - Reduce Array - Performsome operations % reduces the array to a single value. It returns that single vlaue.

const arr = [1,2,3,4,5];

const output = arr.reduce((prev, curr) =>{
    return prev > curr ? prev:curr;
});

console.log(output);