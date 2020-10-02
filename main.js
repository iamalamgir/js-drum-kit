/*****JS-Drum-Kit******/
//Keyboard click event.
window.addEventListener('keydown', function(e){
    console.log(e.keyCode);
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    if(audio){
        const divElement = document.querySelector(`div[data-key="${e.keyCode}"]`);
        divElement.classList.add('playing');
        audio.currentTime = 0;
        audio.play();
    }else{
        console.log("This key was not found.");
    }
})

var divElements = document.querySelectorAll('.key')
divElements.forEach(function(divElement){
    divElement.addEventListener('transitionend', function(){
        divElement.classList.remove('playing');
    })
})

// Mouse click event.
const elements = document.querySelectorAll('.key')
console.log(elements);

elements.forEach(function(element){
    element.addEventListener('click', function(){
        //alert(element.dataset.key);
        element.classList.add('playing')
        const audio = document.querySelector(`audio[data-key="${element.dataset.key}"]`);
        audio.currentTime = 0;
        audio.play();
    })

    element.addEventListener('transitionend', function(){
        element.classList.remove('playing')
    })
})

/*
//Keyboard click event.
function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if(!audio) return;
    audio.currentTime = 0;
    audio.play();
    key.classList.add('playing');
}

function removeTransition(e) {
    if(e.propertyName !== 'transform') return;
    this.classList.remove('playing');
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
window.addEventListener('keydown', playSound);
*/
