document.addEventListener('DOMContentLoaded', () => {
    const numbersContainer = document.querySelector('.numbers-container');
    const generateBtn = document.querySelector('.generate-btn');

    function generateLottoNumbers() {
        const numbers = [];
        while (numbers.length < 6) {
            const randomNum = Math.floor(Math.random() * 45) + 1;
            if (!numbers.includes(randomNum)) {
                numbers.push(randomNum);
            }
        }
        return numbers.sort((a, b) => a - b);
    }

    function displayNumbers(numbers) {
        numbersContainer.innerHTML = '';
        numbers.forEach(num => {
            const ball = document.createElement('div');
            ball.classList.add('ball');
            ball.textContent = num;
            
            // Set color based on number range
            if (num <= 10) ball.style.backgroundColor = '#fbc400';
            else if (num <= 20) ball.style.backgroundColor = '#69c8f2';
            else if (num <= 30) ball.style.backgroundColor = '#ff7272';
            else if (num <= 40) ball.style.backgroundColor = '#aaa';
            else ball.style.backgroundColor = '#b0d840';
            
            numbersContainer.appendChild(ball);
        });
    }

    generateBtn.addEventListener('click', () => {
        const numbers = generateLottoNumbers();
        displayNumbers(numbers);
    });
});
