//print all even number from 0 to 100


//first method
let i;
for(i=2; i<=100; i+=2){
    console.log("i=", i);
}


//second method
for(let num=0; num<=100; num++){
    if(num%2===0){
        console.log("num=",num);
    }
}