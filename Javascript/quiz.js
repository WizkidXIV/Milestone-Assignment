let quizQuestions = [
    // Define your quiz questions, answers, and the correct answer index
    // Example:
    { question: "What color dragon is immune to fire?", answers: ["Red", "Blue", "Green", "Yellow"], correctIndex: 0 },
    { question: "If you don't have magic that opposes a dragon\'s type what should you do?", answers: ["Run away", "attack with arrows", "use magic aligned with the dragon\'s type", "attack with my sword"], correctIndex: 1 },
    { question: "The dragon you/'re facing has high defense, how can you weaken it?", answers: ["Give it a sandwich", "punch it/'s scales off", "hit the dragon with a wooden staff", "use a blugeoning weapon against it"], correctIndex: 3 },
    { question: "The dragon is charging it/'s breath weapon! What is your best chance of survival?", answers: ["defend", "flail your arms", "phone a friend", "use an uno reverse card"], correctIndex: 0 },
    { question: "What might be helpful in a fight against a dragon?", answers: ["a powerful healer", "a wize wizard", "a sharpshooting archer", "all of the above"], correctIndex: 3 },
];
let currentQuestionIndex = 0;
let correctAnswersCount = 0;

function startQuiz() {
    if (currentQuestionIndex < quizQuestions.length) {
        let question = quizQuestions[currentQuestionIndex];
        // Display the current question and options
        // You'll need to implement showQuestion function to update the chatBox with quiz content
        showQuestion(question);
    } else {
        // Quiz is over, show results
        showChatBox(`Quiz over! You got ${correctAnswersCount} out of ${quizQuestions.length} questions right.`, 'images/stella-portrait.png', 'Stella');
        // Reset quiz state
        isQuizStarted = false;
        currentQuestionIndex = 0;
        correctAnswersCount = 0;
    }
}

function showQuestion(question) {
    // Implement the logic to show the current question and options in the chat box
    // This could involve dynamically creating buttons for each answer and attaching event listeners to them
}
