const output=document.getElementById("output");

fetch("art.txt")

.then(r=>r.text())

.then(text=>{

let i=0;

function type(){

if(i<text.length){

output.textContent+=text.charAt(i);

i++;

setTimeout(type,1);

}

}

type();

});
