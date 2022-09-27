document.querySelectorAll(".drum").forEach((button) => {
    button.addEventListener('click', function() {
        animateButton(this.textContent)
        makeSound(this.textContent);
    })
})


document.addEventListener('keydown', function(event){
    animateButton(event.key)
    makeSound(event.key);
})


function makeSound(key) {
    let audio;

    switch(key){
        case "w":
            audio = new Audio("sounds/tom-1.mp3");
            break;
        case "a":
            audio = new Audio("sounds/tom-2.mp3");
            break;
        case "s":
            audio = new Audio("sounds/tom-3.mp3");
            break;
        case "d":
            audio = new Audio("sounds/tom-4.mp3");
            break;
        case "j":
            audio = new Audio("sounds/snare.mp3");
            break;
        case "k":
            audio = new Audio("sounds/crash.mp3");
            break;
        case "l":
            audio = new Audio("sounds/kick-bass.mp3");
            break;
        default: return
    }
    audio.play();
}

function animateButton(key){
    let button = document.querySelector(`.${key}`)
    if(!button) return;

    button.classList.add("pressed")

    setTimeout(function() {
        button.classList.remove("pressed")
    }, 100)
}


//let audio = new Audio('sounds/tom-1.mp3')
//audio.play();