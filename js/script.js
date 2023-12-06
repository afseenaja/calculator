// let x;
// let y;
// let res;
function number(value){
    document.getElementById('display').value+=value;
}
function operators(value){
    document.getElementById('display').value+=value;
}
function result(){
    document.getElementById('display').value= eval(document.getElementById('display').value)

}
function back(){
    // document.getElementById('display').value=Math.floor(document.getElementById('display').value/10);
    let x=document.getElementById('display').value;
    let y= x.toString();
    document.getElementById('display').value=y.slice(0,-1);
}
function cleardisplay(){
    document.getElementById('display').value= "";
}
function porm(){
    if(document.getElementById('display').value>0){
        document.getElementById('display').value= -(document.getElementById('display').value);
    }
    // else if((document.getElementById('display').value)==""){
    //     // (document.getElementById('display').value)= eval(-((document.getElementById('display').value)));
    //     number(-);
    // }
    else{
        document.getElementById('display').value= eval(-((document.getElementById('display').value)));
    }
    
}
