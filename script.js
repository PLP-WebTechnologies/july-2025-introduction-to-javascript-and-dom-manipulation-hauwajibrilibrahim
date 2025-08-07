// Variable declaration and conditional
function checkAge() {
  const age = parseInt(document.getElementById('ageInput').value);
  const result = document.getElementById('ageResult');

  if (isNaN(age)) {
    result.textContent = "Please enter a valid age.";
  } else if (age >= 18) {
    result.textContent = "You are an adult.";
  } else {
    result.textContent = "You are underage.";
  }
}

// Function to calculate sum
function calculateSum(a, b) {
  return a + b;
}

function displaySum() {
  const num1 = parseFloat(document.getElementById('num1').value);
  const num2 = parseFloat(document.getElementById('num2').value);
  const result = calculateSum(num1, num2);
  document.getElementById('sumResult').textContent = `Sum: ${result}`;
}

// Function to format name
function formatName(firstName, lastName) {
  return `${firstName.trim()} ${lastName.trim()}`.toUpperCase();
}

// Example usage (console only)
console.log(formatName("Hauwa’u", "Ibrahim"));

// -----------------------------------
// 🔁 Part 3: JavaScript Loops — Embrace the Power of Repetition!
// -----------------------------------

// Loop 1: Countdown with for loop
function showCountdown() {
  const list = document.getElementById('countdownList');
  list.innerHTML = ""; // Clear existing items

  for (let i = 5; i >= 1; i--) {
    const li = document.createElement('li');
    li.textContent = `Countdown: ${i}`;
    list.appendChild(li);
  }
}

// Loop 2: Array iteration using forEach
const topics = ["Variables", "Functions", "Loops", "DOM"];
topics.forEach(topic => console.log(`JS Topic: ${topic}`));

// Function to toggle theme
function toggleTheme() {
  document.body.classList.toggle('dark-theme');
  const themeText = document.getElementById('themeText');
  if (document.body.classList.contains('dark-theme')) {
    themeText.textContent = "Dark Theme Active";
  } else {
    themeText.textContent = "Light Theme Active";
  }
}

