
function Calculate(){
let x=Math.ceil(Math.random() * 100);
   
let male=document.getElementById('Male').value;
let female=document.getElementById('Female').value;

if(male=="" || female==""){
    document.getElementById('Result').innerHTML=" Date required ";
    console.log("Invalid Input make sure both birth-date enter");
}
else{
document.getElementById('Result').innerHTML=x +" % Successfully love ";
console.log("According to Male And Female Birth Day "+ male +"  and  "+female);
console.log("your love story success chances is");
console.log(x+"%");
}
}
