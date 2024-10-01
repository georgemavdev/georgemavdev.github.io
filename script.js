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
        case 'dir':
            displayMessage('../');
            break;
        case 'ls':
            displayMessage('../');
            break;
        case 'matrix':
            displayMessage('Follow the white rabbit');
            break;
        case 'neo':
            const readline = require('readline');

// Get terminal size
const rows = process.stdout.rows;
const columns = process.stdout.columns;

// Create an object to track each column's position
const positions = {};

// Function to generate random Unicode character
const getRandomUnicode = () => {
  const unicode = Math.floor(Math.random() * 500);
  return String.fromCodePoint(unicode);
};

// Function to move cursor and print colored output
const printChar = () => {
  // Random column for the character
  const column = Math.floor(Math.random() * columns);
  
  // Initialize the position if it doesn't exist
  if (!positions[column]) {
    positions[column] = 0;
  }

  // Clear the line and move the cursor
  readline.cursorTo(process.stdout, column, positions[column]);
  process.stdout.write(`\x1b[2;32m${getRandomUnicode()}`);

  // Update position and clear if reached the bottom
  positions[column]++;
  if (positions[column] >= rows) {
    positions[column] = 0;
  }

  // Move the cursor back and print the character in white
  readline.cursorTo(process.stdout, column, positions[column]);
  process.stdout.write(`\x1b[1;37m${getRandomUnicode()}`);
};

// Set interval to continuously print
setInterval(printChar, 50); // 50 milliseconds interval

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
