function prom(){
    return new Promise( (resolve, reject)=>{
        console.log("fetching data, please wait....")
        setTimeout(() => {
            $.get('https://jsonplaceholder.typicode.com/posts', data=>{
                resolve(data)
            }).fail(err=>{
                reject("failed to load JSON");
            });
            
        }, 2000);
    })
}

prom().then(result=>{
    console.log(result);
}).catch(error=>{
    console.log(error)
})