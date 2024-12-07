//create a function using the functionkeyword that takes a string as an argument & returns the number of vowels in the string

function countVowels(str){

    //str ="HRBLOOD"
    let count =0;
    for(const char of str)
        {
            if( 
                char==="a" || 
                char==="e" || 
                char==="i" || 
                char==="o" ||
                char==="u" 
            ){
                count ++;
            }
        }
    //console.log(char);
    console.log(count);
    
    return count;
}