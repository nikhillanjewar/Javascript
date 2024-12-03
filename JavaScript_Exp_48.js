// for a given array with marks of students = [85, 97, 44, 37, 26, 60], Find the average marks of the entire class

let arr = [85,97,44,37, 76, 60];
console.log("arr:", arr);
var sum = arr[0]+arr[1]+arr[2]+arr[3]+arr[4]+arr[5];
console.log("sum:", sum);
let avg = sum/6;
console.log("avg", avg);


//by using for loop

const marks = [85, 97, 44, 37, 76, 60];
let totalMarks = 0;
console.log(marks)
for (let i = 0; i < marks.length; i++) {
  totalMarks += marks[i];
}
const averageMarks = totalMarks / marks.length;
console.log("totalMarks:", totalMarks);
console.log("Average Marks:", averageMarks);



