import Vara from '../node_modules/vara/src/vara.min.js';
import '../node_modules/jquery.ripples/dist/jquery.ripples-min.js';
import $ from 'jquery';

var fontSize = 72;
if(window.screen.width < 700) 
  fontSize = 32;
else if(window.screen.width < 1200)
  fontSize= 56;

// $('body').ripples();

window.addEventListener('DOMContentLoaded', onLoadDOM)
window.removeEventListener('DOMContentLoaded', onLoadDOM, true)

function onLoadDOM(){
    let imagePrefix = "images/bananaLeaf";
    let body = document.querySelector('body');
    let rippleDiv = document.createElement('div');
    rippleDiv.classList.add('rippleGradient');
    let centerImg = document.createElement('div');
    centerImg.classList.add('circle');
    let textCont = document.createElement('div');
    textCont.setAttribute('id','textCont');
    let promptText = document.createElement('div');
    promptText.setAttribute('id', 'enterKeyPromt')
    promptText.innerText = `Press any key to enter`;
    let leaves = document.createElement('div');
    leaves.classList.add('leaves');
    let bottomLeft = document.createElement('img');
    bottomLeft.classList.add('bottomLeft', 'leaf')
    bottomLeft.setAttribute('src', `${imagePrefix}BottomLeft.png`);
    let bottomRight = document.createElement('img');
    bottomRight.classList.add('bottomRight', 'leaf');
    bottomRight.setAttribute('src', `${imagePrefix}BottomRight.png`);
    let topRight = document.createElement('img');
    topRight.classList.add('topRight', 'leaf');
    topRight.setAttribute('src', `${imagePrefix}TopRight.png`);
    let topLeft = document.createElement('img');
    topLeft.classList.add('topLeft', 'leaf');
    topLeft.setAttribute('src', `${imagePrefix}TopLeft.png`);
    leaves.appendChild(bottomLeft);
    leaves.appendChild(bottomRight);
    leaves.appendChild(topLeft);
    leaves.appendChild(topRight);
    body.appendChild(rippleDiv);
    body.appendChild(centerImg);
    body.appendChild(textCont);
    body.appendChild(promptText);
    body.appendChild(leaves);

    var vara = new Vara(
    "#textCont",
    "https://raw.githubusercontent.com/akzhy/Vara/master/fonts/Shadows-Into-Light/shadows-into-light.json",
    [
        {
            text: "Inti Vantalu",
            delay: 2200,
            duration: 2500,
            letterSpacing: 1
        }
    ],
    {
        strokeWidth: 3,
        color: "#3F5822",
        fontSize: fontSize,
        textAlign: "center"
    }

);

vara.ready(function() {
    var erase = false;
    vara.animationEnd(function(i, o) {
    if (i == "no_erase") erase = false;
    if (erase) {
        o.container.style.transition = "opacity 1s 1s";
        o.container.style.opacity = 0;
    }
    });
});
}

function keyPressCount(){
    let keysPressed = 0
    function enterMainScreen(){
        let leaves = document.querySelectorAll('.leaf');
        if(keysPressed == 0){
            // $('body').ripples('drop', window.innerWidth / 2, window.innerHeight / 2, 20, 0.1);
            leaves.forEach(leaf=>{
                leaf.style.animation = `${leaf.classList[0]}RevAnim 1.5s`;
            });
        }
        keysPressed++;
    }
    return enterMainScreen;
}

const enterMainScreen = keyPressCount();
window.addEventListener('keypress', enterMainScreen)

// window.addEventListener('click', ()=>{
//     $('body').ripples('destroy');
// });
