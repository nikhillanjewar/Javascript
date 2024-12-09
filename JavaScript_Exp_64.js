//create a arrow function to perfrm the same task

const countVow = (str) =>{

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