function reverseString(abc){
let emptyString="";
for(let i=abc.length-1;i>=0;i--){
    emptyString+=abc[i];

}
return emptyString;

}

console.log(reverseString("hello tanmoy"))



