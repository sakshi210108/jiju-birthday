const screen = document.getElementById("screen");

fetch("art.txt")
.then(response => response.text())
.then(text => {

let i = 0;

function type(){

    if(i < text.length){

        screen.textContent += text[i];

        i++;

        screen.scrollTop = screen.scrollHeight;

        setTimeout(type,1);

    }

}

type();

});

window.onload = () => {

setTimeout(()=>{

document.getElementById("music").play();

},500);

}
