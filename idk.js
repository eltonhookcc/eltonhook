// Predefined secret word
const secretWord = "carter clifton";  // Change this to whatever word you want

// Global variable to store the generated code
let generatedCode = "";

// Function to generate a random 15-character code
function generateRandomCode() {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let code = '';
  for (let i = 0; i < 15; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    code += characters[randomIndex];
  }
  return code;
}

// Function to display the generated code in the second textarea
function revealCode() {
  generatedCode = generateRandomCode();  // Generate the code
  document.getElementById('codeOutput').value = generatedCode;  // Show the generated code in the second textarea
  document.getElementById('submitCodeButton').disabled = false;  // Enable the submit button
}

// Wait for the DOM content to be fully loaded
document.addEventListener('DOMContentLoaded', function() {

  // Handle the Check Word button click
  const checkWordButton = document.getElementById('checkWordButton');
  checkWordButton.addEventListener('click', checkWord);

  // Handle the Submit Code button click
  const submitCodeButton = document.getElementById('submitCodeButton');
  submitCodeButton.addEventListener('click', checkCodeInput);
});

// Function to check if the word entered is the secret word
function checkWord() {
  const userWord = document.getElementById('wordInput').value.trim().toLowerCase();
  
  if (userWord === secretWord) {
    alert("hello! Here's your code.");
    revealCode();  // Reveal the generated code in the second textarea
  } else {
    alert("you do not have access!");
  }
}

// Function to check if the entered code is correct
function checkCodeInput() {
  const userCode = document.getElementById('codeOutput').value.trim();
  
  if (userCode === generatedCode) {
    // Redirect to another page if the code matches
    window.location.href = "games.html"; 
  } else {
    alert("Incorrect code! Please try again.");
  }
}
