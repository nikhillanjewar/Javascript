//for in loop

let student={
    name:"Nikhil Lanjewar",
    age:20,
    cgpa:7.5,
    isPass: true
};
for(let key in student){
    console.log("key=", key, "value=", student[key]);
}