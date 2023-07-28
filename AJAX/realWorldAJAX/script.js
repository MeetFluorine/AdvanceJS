function loadData(){
    let xhttp = new XMLHttpRequest;
    // check readystate
    xhttp.onreadystatechange = function(){
        if(this.readyState ==4 && this.status ==200){
            console.log(this.responseText)
            document.querySelector('.content').innerHTML= this.responseText;
        }
    };

    xhttp.open("GET","./about.md",true);
    xhttp.send();
}