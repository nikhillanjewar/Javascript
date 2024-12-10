// we are given array of marks of students. Filter out of the marks of students that scored 90.

let marks = [97,89,78,98,90, 89,95];
let toppers = marks.filter((val) =>{
    return val> 90;
})
console.log(toppers);


