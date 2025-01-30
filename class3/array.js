//array is an object
//array is collection of similar type data and it's used contiguous memory location

// let fruits=new Array("apple","ban","orange")
// console.log(fruits[0])




// for of loop->its return the value
// for(let item of fruits ){
//     console.log(item)
// }

// for in loop ->it gives index of the value
// for(let index in fruits){
//     console.log(index)
// }

//for-each 
let val=[10,20,30]


let res1=val.forEach((item,index)=>{
return item*3
})
console.log(res1)

// map
let num=[10,20,30]


const res=num.map((item,index)=>{
return item*3
})
console.log(res)