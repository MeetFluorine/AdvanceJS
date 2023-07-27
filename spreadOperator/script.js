function sum(...args){
    return args.reduce((accumalator,currentValue) => accumalator+currentValue,0 )
 }
 
let arr = [10,20,30]
// document.write(sum(arr))   - [10,20,30]

document.write(sum(...arr));