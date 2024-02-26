let currentQuestionIndex = 0;
let correctAnswersCount = 0;

let quizQuestions = [
    { question: "What color dragon is immune to fire?", answers: ["Red", "Blue", "Green", "Yellow"], correctIndex: 0 },
    { question: "If you don't have magic that opposes a dragon's type what should you do?", answers: ["Run away", "attack with arrows", "use magic aligned with the dragon's type", "attack with my sword"], correctIndex: 1 },
    { question: "The dragon you're facing has high defense, how can you weaken it?", answers: ["Give it a sandwich", "punch its scales off", "hit the dragon with a wooden staff", "use a bludgeoning weapon against it"], correctIndex: 3 },
    { question: "The dragon is charging its breath weapon! What is your best chance of survival?", answers: ["Defend", "Flail your arms", "Phone a friend", "Use an uno reverse card"], correctIndex: 0 },
    { question: "What might be helpful in a fight against a dragon?", answers: ["A powerful healer", "A wise wizard", "A sharpshooting archer", "All of the above"], correctIndex: 3 }
];

function startQuiz() {
    isQuizStarted = true;
    showQuestion(quizQuestions[currentQuestionIndex]);
}

function showQuestion(question) {
    let chatBox = document.getElementById('chatBox') || createChatBox();
    let messageContainer = chatBox.querySelector('#messageContainer');

    messageContainer.innerHTML = `<span style="color: yellow;">Question:</span> ${question.question}`;

    question.answers.forEach((answer, index) => {
        const answerButton = document.createElement('button');
        answerButton.innerText = answer;
        answerButton.addEventListener('click', () => handleAnswer(index, question.correctIndex));
        messageContainer.appendChild(answerButton);
    });

    chatBox.style.display = 'flex';
}

function handleAnswer(selectedIndex, correctIndex) {
    if (selectedIndex === correctIndex) {
        correctAnswersCount++;
    }
    currentQuestionIndex++;
    if (currentQuestionIndex < quizQuestions.length) {
        showQuestion(quizQuestions[currentQuestionIndex]);
    } else {
        showChatBox(`Quiz over! You got ${correctAnswersCount} out of ${quizQuestions.length} questions right.`, 'images/stella-portrait.png', 'Stella');
        isQuizStarted = false;
        currentQuestionIndex = 0;
        correctAnswersCount = 0;
    }
}
