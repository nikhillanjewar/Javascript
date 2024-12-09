// Array Methods - Filter - 
//if sppose codnition is true the value is store in the array, if suppose the vaue is false then doesn't dstore in the array

//create a new array

let arr = [1,2,3,4,5];

let evenArr = arr.filter((val) =>{
    return val%2 ===0;
});
console.log(evenArr);