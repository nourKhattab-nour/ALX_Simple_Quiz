function checkAnswer() {
    // Correct answer
    const correctAnswer = "4";
    
    // Get user's selected answer
    const selectedRadio = document.querySelector('input[name="quiz"]:checked');
    const userAnswer = selectedRadio ? selectedRadio.value : null;
    
    // Get feedback element
    const feedbackElement = document.getElementById('feedback');
    
    // Check if user selected an answer
    if (!userAnswer) {
        feedbackElement.textContent = "Please select an answer!";
        return;
    }
    
    // Compare answers and provide feedback
    if (userAnswer === correctAnswer) {
        feedbackElement.textContent = "Correct! Well done.";
    } else {
        feedbackElement.textContent = "That's incorrect. Try again!";
    }
}

// Add event listener to submit button
document.getElementById('submit-answer').addEventListener('click', checkAnswer);
