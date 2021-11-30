async function myFunction(){
    await t1();
    console.log("10sec done");
    //document.getElementById("one").style.backgroundColor = "black";
    await t2();
    //document.getElementById("one").style.backgroundColor = "black";
    console.log("10sec done");
    document.getElementById("one").style.backgroundColor = "black";
    await t3();
    console.log("10sec done");
    document.getElementById("two").style.backgroundColor = "black";
    console.log("Yay! I am all done");
}


function t1(){
    return new Promise(function(resolve, reject) {
        //document.getElementById("one").style.backgroundColor = "black";
        setTimeout(() => {
          var k = document.getElementById("one");
          k.style.backgroundColor = "green";
          resolve();
        }, 10000);
     });
    
}

function t2(){
    return new Promise(function(resolve, reject) {
      //document.getElementById("three").style.backgroundColor = "black";
      setTimeout(() => {
        var k = document.getElementById("two");
        k.style.backgroundColor = "yellow";
        resolve();
      }, 10000);
   });
}

function t3(){
    return new Promise(function(resolve, reject) {
    //document.getElementById("two").style.backgroundColor = "black";
      setTimeout(() => {
        var k = document.getElementById("three");
        k.style.backgroundColor = "red";
        resolve();
      }, 10000);
      
   });
}

