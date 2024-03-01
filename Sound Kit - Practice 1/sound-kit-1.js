function playSound (e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    console.log(audio);
    if(!audio) return;                              //stop the function from running altogether if key isnt there
    
    key.classList.add('playing');                   //when key is pressed, the key button will scale up, and change border color
    audio.currentTime = 0;                          //rewind to the start when key is pressed repeatedly
    audio.play();
    
}

function removeTransition(e) {
    if (e.propertyName !== 'transform') return;     // skip if it is not a transform
    this.classList.remove('playing');
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend',removeTransition));
window.addEventListener("keydown", playSound);


