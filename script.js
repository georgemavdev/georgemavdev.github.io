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
        case 'helo':
            displayMessage('Did you mean "help"? Type "help" for assistance.');
            break;
        case 'dir' && 'ls':
            displayMessage('../');
            break;
        case 'matrix':
            displayMessage('Follow the white rabbit');
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
