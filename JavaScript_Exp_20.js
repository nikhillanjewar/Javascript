//write a code which can gives grades to students according to their scores
//80-100 - A
//70-89 - B
//60-69 - C
//50-59 - D 
//0-49 - F


let score = prompt("Enter a Score:")

if(score>=80 && score<100){
   console.log("A");
} 
else if(score>=70 && score<79){
    console.log("B");
} 
else if(score>=60 && score<69){
   console.log("c");
}
else if(score>=50 && score<59 ){
    console.log("D");
}
else if(score>=0 && score<49 ){
    console.log("E");
}







