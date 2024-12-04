//create an array

let companies = ["Bloomberg", "Microsoft", "Uber","Google","IBM","Netflix"];

console.log(companies);

//remove the first company from the array
companies.shift();

// remove uber and add ola
companies.splice(2, 1, "ola");

//addamazon at the end
companies.push("Amazon");
