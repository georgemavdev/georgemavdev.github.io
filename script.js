const terminalOutput = document.getElementById('output');
const userInput = document.getElementById('userInput');
const userText = document.getElementById('userText');
const typeSound = new Audio('type-sound.mp3'); 
const enterSound = new Audio('enter-sound.mp3'); 

userInput.addEventListener('input', function() {
    userText.textContent = userInput.value;
});

userInput.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        enterSound.play();
        const command = userInput.value.trim().toLowerCase();
        processCommand(command);
        userInput.value = '';
        userText.textContent = '';
    } else {
        typeSound.play();
    }
});

function processCommand(command) {
    const outputElement = document.createElement('div');
    outputElement.textContent = '$ ' + command;
    terminalOutput.appendChild(outputElement);

    switch(command) {
        case 'help':
            displayMessage('Available commands: help, about, contact, clear');
            break;
        case 'about':
            displayMessage('Welcome to my digital terminal. I’m George, and this is my virtual space. Explore by typing commands—type "help" if you need guidance. Enjoy your stay!');
            break;
        case 'contact':
            displayMessage('https://x.com/g_mavro');
            break;
        case 'clear':
            terminalOutput.innerHTML = '';
            break;
        case 'dance':
            displayMessage('💃 Let\'s dance! 💃');
            document.body.style.backgroundColor = 'purple';
            setTimeout(() => {
                document.body.style.backgroundColor = 'black';
            }, 2000);
            break;
        case 'matrix':
            displayMessage('Follow the white rabbit');
            break;
        case 'dir':
            displayMessage('../');
            break;
        case 'ls':
            displayMessage('../');
            break;
        case 'neo':
            startMatrixEffect();
            break;
        case 'exit':
            window.location.href = 'https://www.google.com';  // Redirect to Google
            break;
        default:
            displayMessage('Command not recognized. Type "help" for a list of commands.');
    }
}

function displayMessage(message) {
    const messageElement = document.createElement('div');
    messageElement.textContent = message;
    terminalOutput.appendChild(messageElement);
}

function startMatrixEffect() {
    const matrixOutput = document.createElement('canvas');
    matrixOutput.width = window.innerWidth;
    matrixOutput.height = window.innerHeight;
    document.body.appendChild(matrixOutput);
    const context = matrixOutput.getContext('2d');

    const fontSize = 16;
    const columns = Math.floor(matrixOutput.width / fontSize);
    const drops = Array(columns).fill(0);

    function drawMatrix() {
        context.fillStyle = 'rgba(0, 0, 0, 0.05)';
        context.fillRect(0, 0, matrixOutput.width, matrixOutput.height);
        context.fillStyle = '#0F0';
        context.font = `${fontSize}px monospace`;

        for (let i = 0; i < drops.length; i++) {
            const text = String.fromCharCode(Math.floor(33 + Math.random() * 94));
            context.fillText(text, i * fontSize, drops[i] * fontSize);

            if (drops[i] * fontSize > matrixOutput.height && Math.random() > 0.95) {
                drops[i] = 0;
            }
            drops[i]++;
        }
    }

    setInterval(drawMatrix, 50);
}
