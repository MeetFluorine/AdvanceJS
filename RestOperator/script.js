// reduce on rest operator
document.write("<hr><br>"+ "reduce on rest operator<br>")

function sum(...args){
   return args.reduce((accumalator,currentValue) => accumalator+currentValue,0 )
}
document.write(sum(12,13)+"<br>")
document.write(sum(12,13,13)+"<br>")
document.write(sum(12,13,14,14)+"<br>")


// forEach on rest operator
document.write("<hr><br>"+ "forEach on rest operator<br>")

function sum1(...args){
    args.forEach( (item) =>{
        document.write(item+"<br>");
    })
}

sum1(11)
sum1(11,12)
sum1(11,12,13)

// for in on rest operator
document.write("<hr><br>"+ "for in on rest operator<br>")
function sum3(...args){
    let sum=0;
    for (let i in args){
        sum+= args[i];
    }
    document.write(sum +"<br>");

}

sum3(10)
sum3(10,12)
sum3(10,12,14)