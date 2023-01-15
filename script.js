var block = document.getElementById("block");
var hole = document.getElementById("hole");
var character = document.getElementById("character");
var inputfeld = document.getElementById("username");
var jumping = 0;
var counter = 0;

inputspace.addEventListener('click',() =>{
    
});

hole.addEventListener('animationiteration',() =>{
    var random = -((Math.random()*300) + 150); 
    var top = (random*100)+150;
    hole.style.top = random + "px";
    counter++;
});

setInterval(function(){
    var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    if (jumping == 0) { 
        character.style.top = (characterTop+2)+"px";
    }
    var blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    var holeTop = parseInt(window.getComputedStyle(hole).getPropertyValue("top"));
    var cTop = -(500-characterTop);
    if ((characterTop>570)||((blockLeft<20)&&(blockLeft>-50)&&((cTop<holeTop)||(cTop>holeTop+130)))){
        alert("Game Over. Score: " + counter);
        character.style.top = 300 +  "px";
        counter = 0;
    }
    if (characterTop<80){
        alert("Game Over. Score: " + counter);
        character.style.top = 300 + "px";
        counter = 0;
    }
    
    
},10);

function jump() {
    jumping = 1;
    let jumpCount = 0;
    var jumpInterval = setInterval(function(){
        var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
        if ((characterTop>5)&&(jumpCount<25)) {
            character.style.top = (characterTop-3)+"px";
        }
        if (jumpCount>20){
                clearInterval(jumpInterval);
                jumping= 0;
                jumpCount=0;
        }
        jumpCount++; 
    }, 10);
}

 
const storageInput = document.querySelector('.storage');
const text = document.querySelector('.text');
const button = document.querySelector('.button');
const storedInput = localStorage.getItem('textinput');

if(storageInput) { 
    text.textContent = storedInput
}

storageInput.addEventListener('input', letter =>{
    text.textContent = storageInput.value
})

const saveInLocal = () => {
    localStorage.setItem('textinput', text.textContent)
}

button.addEventListener('click', saveInLocal);



