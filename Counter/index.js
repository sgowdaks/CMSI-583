function plus(){
    var k = document.getElementById("main").innerHTML;
    k++;
    document.getElementById("main").textContent = k
    
}

function minus(){
    var k = document.getElementById("main").innerHTML;
    k = k-1;
    document.getElementById("main").innerHTML = k;
}

function cl(){

    document.getElementById("main").textContent = 0 ;
}