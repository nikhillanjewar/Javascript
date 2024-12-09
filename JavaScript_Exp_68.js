//Array Methods - Map Method
// It is a similar as a forEach loop

//create a new array with the results of some operation, The value its callback return are used to from new array

let num = [89, 90,78];
let newArr = num.map((val)=>{
    return val*val;
});
console.log(newArr);
let calcSquare = (num) =>{
    console.log(num*num);
}

