function myFunction(val){
    var x = document.getElementById("app").innerHTML;
    //console.log(x)
    //console.log(val)
    var k;
    if( val < x){
        document.getElementById("disp").innerHTML = "Floor: Going Up";
        k =  x - val;
    }else if(val>x){
        document.getElementById("disp").innerHTML = "Floor: Going Down";
        k = val  - x;
    }else{
        document.getElementById("disp").innerHTML = "Floor: Same Floor";
        k = 0;
    }
    document.getElementById("app").innerHTML = val;
    Move(val,x,k)
}


var id = null;
function Move(val,x,k) {
  var elem = document.getElementById("myAnimation");  
  var fl = val;
  k = Math.abs(k)
  k = k*100 
  x = x*100
  val = val*100
  clearInterval(id);
  console.log(x)
  var pos = x;
  clearInterval(id);
  id = setInterval(frame, 15);
  function frame() {
    if (pos == val) {
      clearInterval(id);
    }else if(val< x){
        pos--;
        elem.style.top = pos + 'px';
        //console.log(pos);
    } else if(val>x){
      pos++; 
      elem.style.top = pos + 'px'; 
 
    }
  }
  document.getElementById("myAnimation").innerHTML = fl + " Floor";
  document.getElementById("myAnimation").style.textAlign = "center";
}