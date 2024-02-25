let quizQuestions = [
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
    // Ensure the chat box is available
    let chatBox = document.getElementById('chatBox') || document.createElement('div');
    if (!chatBox.id) {
        prepareChatBox(chatBox);
    }

    // Clear previous content
    chatBox.innerHTML = '';

    // Show the question
    const questionContainer = document.createElement('div');
    questionContainer.innerHTML = `<span style="color: yellow;">Question:</span> ${question.question}`;
    chatBox.appendChild(questionContainer);

    // Show answers
    question.answers.forEach((answer, index) => {
        const answerButton = document.createElement('button');
        answerButton.innerText = answer;
        answerButton.onclick = () => handleAnswer(index, question.correctIndex);
        chatBox.appendChild(answerButton);
    });

    // Ensure the chat box is visible
    chatBox.style.display = 'flex';

    // Append or re-append the chat box to body if it's newly created
    if (!document.body.contains(chatBox)) {
        document.body.appendChild(chatBox);
    }
}

function prepareChatBox(chatBox) {
    chatBox.id = 'chatBox';
    // Apply all the initial styles as defined in showChatBox
    // ...
}

function handleAnswer(selectedIndex, correctIndex) {
    if (selectedIndex === correctIndex) {
        correctAnswersCount++;
    }
    currentQuestionIndex++;
    startQuiz(); // Move to the next question or show results if the quiz is over
}

// Inside Stella's click event listener or a modified showChatBox
const startButton = document.createElement('button');
startButton.innerText = "Start Quiz";
startButton.onclick = function () {
    // Hide the initial chat box and portrait
    let chatBox = document.getElementById('chatBox');
    let portrait = document.getElementById('characterPortrait');
    if (chatBox) chatBox.style.display = 'none';
    if (portrait) portrait.style.display = 'none';

    // Start the quiz
    startQuiz();
};
// Append this button to the message container or chat box accordingly


function showQuestion(questionObj) {
    let chatBox = document.getElementById('chatBox');
    let messageContainer = document.getElementById('messageContainer');

    // Clear previous content
    messageContainer.innerHTML = `<div>${questionObj.question}</div>`;

    // Display answers as buttons
    questionObj.answers.forEach((answer, index) => {
        const answerButton = document.createElement('button');
        answerButton.innerText = answer;
        answerButton.onclick = () => handleAnswer(index, questionObj.correctIndex);
        messageContainer.appendChild(answerButton);
    });
}
