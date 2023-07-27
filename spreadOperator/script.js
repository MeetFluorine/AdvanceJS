function sum(...args){
    return args.reduce((accumalator,currentValue) => accumalator+currentValue,0 )
 }
 
let arr = [10,20,30]
// document.write(sum(arr))   - [10,20,30]

document.write(sum(...arr));



// merging two object using spread operator

let obj1 ={
    name:"chandan"
}
let obj2 ={
    age:21
}

let obj3 = {
   ... obj1  , ...obj2
}

document.write(obj3)

console.log(obj3);