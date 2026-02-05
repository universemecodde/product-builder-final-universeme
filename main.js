const generateBtn = document.getElementById('generate-btn');
const lottoNumbersContainer = document.querySelector('.lotto-numbers');
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

// Function to set the theme
function setTheme(mode) {
    if (mode === 'dark') {
        body.classList.add('dark-mode');
        themeToggle.textContent = '☀️'; // Sun icon for dark mode
        localStorage.setItem('theme', 'dark');
    } else {
        body.classList.remove('dark-mode');
        themeToggle.textContent = '🌙'; // Moon icon for light mode
        localStorage.setItem('theme', 'light');
    }
}

// Load saved theme from localStorage
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    setTheme(savedTheme);
} else {
    // Default to light mode if no theme is saved
    setTheme('light');
}

// Event listener for theme toggle button
themeToggle.addEventListener('click', () => {
    if (body.classList.contains('dark-mode')) {
        setTheme('light');
    } else {
        setTheme('dark');
    }
});

generateBtn.addEventListener('click', () => {
    lottoNumbersContainer.innerHTML = ''; // Clear previous numbers
    const lottoNumbers = new Set();

    while (lottoNumbers.size < 6) {
        const randomNumber = Math.floor(Math.random() * 45) + 1;
        lottoNumbers.add(randomNumber);
    }

    const sortedNumbers = Array.from(lottoNumbers).sort((a, b) => a - b);

    sortedNumbers.forEach((number, index) => {
        const numberElement = document.createElement('div');
        numberElement.classList.add('number');
        numberElement.textContent = number;
        numberElement.style.backgroundColor = getNumberColor(number);
        numberElement.style.animationDelay = `${index * 0.1}s`;
        lottoNumbersContainer.appendChild(numberElement);
    });
});

function getNumberColor(number) {
    if (number <= 10) return '#f39c12'; // Yellow
    if (number <= 20) return '#3498db'; // Blue
    if (number <= 30) return '#e74c3c'; // Red
    if (number <= 40) return '#2ecc71'; // Green
    return '#8e44ad'; // Purple
}
