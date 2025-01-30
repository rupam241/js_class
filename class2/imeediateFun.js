// IIFE:Immediate invoke fun expression

let res=(function (abc){
    let emptyString="";
    for(let i=abc.length-1;i>=0;i--){
        emptyString+=abc[i];
    
    }
    return emptyString;
    
    })("hello")

    console.log(res);
    


