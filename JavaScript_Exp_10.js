
//logical operators - AND, OR, NOT

let x =5;
let y =3;

let cond1 = x>y; 
let cond2 = x===y; 
//console.log("cond1 && cond2=", cond1 && cond2); //false

let cond4 = x>y; 
let cond3 = x===y; 
//console.log("cond4 || cond3=", cond4 || cond3); //true

let cond5 = x>y; 
let cond6 = x===y; 
//console.log("!(6<5")=", !(a<b));
//console.log("cond5 !! cond6=", cond5 !! cond6);


// cond1 cond2  (&&)   ||
//  T      T     T      T
//  T      F     F
//  F      T     F
//  F      F     F


let a = 6;
let b = 5;
console.log("!(6<5) =", !(a===6));  