//String Interpolation - to create strings by doing substitution of placeholders
// `string text ${expression} string text`

let obj = {
    item:"pen",
    price:50,
}

//technique-1

let output = `the cost of ${obj.item} is ${obj.price} rupees`;
console.log(output);

//technique-2

console.log("the cost off", obj.item, "is", obj.price, "rupees");