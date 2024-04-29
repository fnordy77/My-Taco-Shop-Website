document.addEventListener('DOMContentLoaded', function() {
    const triviaButton = document.getElementById('trivia-button');
    const triviaAnswer = document.getElementById('trivia-answer');

    triviaButton.addEventListener('click', function() {
        if (triviaAnswer.style.display === 'none') {
            triviaAnswer.style.display = 'block';
            triviaButton.textContent = 'Hide Trivia';
        } else {
            triviaAnswer.style.display = 'none';
            triviaButton.textContent = 'Show Trivia';
        }
    });
});
