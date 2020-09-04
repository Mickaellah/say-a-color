import { handleResult } from './handlers';
import { colorByLength, isDark } from './colors';

const colorsEl = document.querySelector('.colors');

function displayColors(colors) {
    return colors
    .map(color => `
        <span 
            class="color ${color}
            ${isDark(color) ? 'dark' : ''}" 
            style="background: ${color}">
            ${color}
        </span>
    `).join('');
}

window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
function start() {
    //see if their browser supports this
    if(!('SpeechRecognition' in window)) {
        console.log("your browser doesn't suport this spech recognition");
        return //stop the function from running
    }
    console.log('starting...');
    //it does work,let's do it => continue running
    const recognition = new SpeechRecognition();
    recognition.continuous = true;
    recognition.interimResults = true;
    recognition.onresult = handleResult;//to listen the voice from the input like addventlistner
    recognition.start();
}
start();
colorsEl.innerHTML = displayColors(colorByLength);

