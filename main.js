const generateBtn = document.getElementById('generate-btn');

// Initial theme setup (moved from theme.js)
const savedTheme = localStorage.getItem('theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
if (savedTheme === 'dark') {
    document.body.classList.add('dark-mode');
} else {
    document.body.classList.remove('dark-mode');
}

const lottoNumbersContainer = document.querySelector('.lotto-numbers');
const themeToggle = document.getElementById('theme-toggle');

// Set initial button text based on current theme
themeToggle.textContent = document.body.classList.contains('dark-mode') ? 'Light Mode' : 'Dark Mode';

// Event listener for theme toggle button
themeToggle.addEventListener('click', () => {
    const isDarkMode = document.body.classList.toggle('dark-mode');
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
    themeToggle.textContent = isDarkMode ? 'Light Mode' : 'Dark Mode';
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
