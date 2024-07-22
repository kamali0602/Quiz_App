function checkAnswer(element, option) {
    const correctAnswer = 'D';
    if (option === correctAnswer) {
        element.classList.add('correct');
    } else {
        element.classList.add('incorrect');
    }
    disableOptions();
}

function disableOptions() {
    const options = document.querySelectorAll('.option');
    options.forEach(option => {
        option.onclick = null;
    });
}
