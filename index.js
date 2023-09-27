
for (let i = 0; i < document.querySelectorAll(".piano").length; i++) {
    
    document.querySelectorAll(".piano")[i].addEventListener("click", function(){
        var name = this.innerHTML;
        handleClick(name);  
        buttonAnimation(name);
    });
    
}

document.addEventListener("keypress", function (event) {
    var name = event.key;
  
    handleClick(name);  
   buttonAnimation(name);
});



function handleClick(name){
    switch (name) {
        case "a" :
        case "A" :
            new Audio('Sounds/A0.mp3').play();
            break;
        case "b":
        case "B" :
            new Audio('Sounds/A1.mp3').play();
            break;
        case "c":
        case "C" :
            new Audio('Sounds/A2.mp3').play();
            break;
        case "d":
        case "D" :
            new Audio('Sounds/A3.mp3').play();
            break;
        case "e":
            new Audio('Sounds/A4.mp3').play();
            break;
        case "f":
            new Audio('Sounds/A5.mp3').play();
            break;
        case "g":
            new Audio('Sounds/A6.mp3').play();
            break;
        case "h":
            new Audio('Sounds/A7.mp3').play();
            break;
        case "i":
            new Audio('Sounds/Ab1.mp3').play();
            break;    
        case "j":
            new Audio('Sounds/Ab2.mp3').play();
            break; 
        case "k":
            new Audio('Sounds/Ab3.mp3').play();
            break; 
        case "l":
            new Audio('Sounds/Ab4.mp3').play();
            break;
        case "m":
            new Audio('Sounds/Ab5.mp3').play();
            break;  
        case "n":
            new Audio('Sounds/Ab6.mp3').play();
            break;  
        case "o":
            new Audio('Sounds/Ab7.mp3').play();
            break; 
        case "p":
            new Audio('Sounds/A0.mp3').play();
            break; 
        case "q":
            new Audio('Sounds/A1.mp3').play();
            break; 
        case "s":
            new Audio('Sounds/A2.mp3').play();
            break; 
        case "t":
            new Audio('Sounds/A3.mp3').play();
            break; 
        case "u":
            new Audio('Sounds/A4.mp3').play();
            break; 
        case "v":
            new Audio('Sounds/A5.mp3').play();
            break; 
        case "w":
            new Audio('Sounds/A6.mp3').play();
            break; 
        case "x":
            new Audio('Sounds/A7.mp3').play();
            break; 
        case "y":
            new Audio('Sounds/Ab1.mp3').play();
            break; 
        case "z":
            new Audio('Sounds/Ab2.mp3').play();
            break; 
       
    
        default:
            break;
    }
}


function buttonAnimation(currButton) {
    

    
    var cls = document.querySelector("." + currButton);

    cls.classList.add("pressed");

    setTimeout(function (){
        cls.classList.remove("pressed");
    },150);

    
}


