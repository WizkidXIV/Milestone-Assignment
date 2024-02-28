let isQuizStarted = false;

function showChatBox(message, portraitUrl, characterName) {
    let chatBox = document.getElementById('chatBox');
    if (!chatBox) {
        chatBox = document.createElement('div');
        chatBox.id = 'chatBox';
        chatBox.style.position = 'fixed';
        chatBox.style.bottom = '20px';
        chatBox.style.left = '50%';
        chatBox.style.transform = 'translateX(-50%)';
        chatBox.style.backgroundColor = 'rgba(0, 0, 139, 0.7)'; 
        chatBox.style.color = 'white'; 
        chatBox.style.padding = '10px';
        chatBox.style.border = '2px solid white'; 
        chatBox.style.borderRadius = '5px';
        chatBox.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        chatBox.style.display = 'flex';
        chatBox.style.flexDirection = 'row';
        chatBox.style.alignItems = 'center';
        chatBox.style.maxWidth = '80%'; // Prevents the chat box from being too wide
        chatBox.style.boxSizing = 'border-box'; // Included padding and border in the element's total width and height
        chatBox.style.zIndex = 100; // Ensures the chatBox is in frontmost layer
        document.body.appendChild(chatBox);

        // Calls Portrait function
        let portrait = document.getElementById('characterPortrait');
        if (!portrait) {
            portrait = document.createElement('img');
            portrait.id = 'characterPortrait';
            portrait.style.position = 'fixed';
            portrait.style.bottom = '20px';
            portrait.style.left = 'calc(35% - 200px)'; 
            portrait.style.width = '250px'; 
            portrait.style.height = 'auto'; 
            portrait.style.borderRadius = '10px'; 
            portrait.style.zIndex = 99; 
            document.body.appendChild(portrait);
        }
        portrait.src = portraitUrl;


        
        // Message container function
        const messageContainer = document.createElement('div');
        messageContainer.id = 'messageContainer';
        chatBox.appendChild(messageContainer);

        // Close button function
        const closeButton = document.createElement('button');
        closeButton.innerText = 'Close';
        closeButton.style.color = 'white';
        closeButton.style.background = 'red';
        closeButton.style.border = 'none';
        closeButton.style.padding = '5px 10px';
        closeButton.style.marginLeft = 'auto'; 
        closeButton.style.cursor = 'pointer';
        closeButton.onclick = function () {
            chatBox.style.display = 'none'; 
            portrait.style.display = 'none';
        };
        chatBox.appendChild(closeButton);
    } else {
        chatBox.style.zIndex = 100;
    }

    const portrait = document.getElementById('characterPortrait');
    portrait.style.display = 'block'; 
    portrait.src = portraitUrl; // Updates the portrait image to NPC currently clicked

    const nameSpan = `<span style="color: yellow;">${characterName}:</span>`;
    const messageContainer = document.getElementById('messageContainer');
    messageContainer.innerHTML = `${nameSpan} ${message}`; 

    if (!isQuizStarted) {
        messageContainer.innerHTML = `<span style="color: yellow;">${characterName}:</span> ${message}`;
        const startButton = document.createElement('button');
        startButton.innerText = "I'm ready!";
        startButton.onclick = function () {
            isQuizStarted = true;
            showChatBox("The quiz will now begin.", portraitUrl, characterName); 
            startQuiz();
        };
        messageContainer.appendChild(startButton);

    } else {
    }

    chatBox.style.display = 'flex';
}

// function startQuiz() {
//     if (currentQuestionIndex < quizQuestions.length) {
//         let question = quizQuestions[currentQuestionIndex];
//         showQuestion(question);
//     } else {
//         // Quiz is over, show results
//         let resultsMessage = `Quiz over!!!! You got ${correctAnswersCount} out of ${quizQuestions.length} questions right.`;
//         showChatBox(resultsMessage, 'images/stella-portrait.png', 'Stella', true); // Ensure this clears previous messages

//         // Determine win or fail state
//         let outcomeMessage = correctAnswersCount >= 3 ?
//             'Congratulations! You passed! You\'re ready to take on the dragon!' :
//             'Unfortunately, you didn\'t pass...study harder and try again!';
//         let outcomeImage = correctAnswersCount >= 3 ? 'images/stella-happy.png' : 'images/stella-sad.png';

//         // Use a timeout to delay the display of the outcome message to ensure the user reads the results first
//         setTimeout(() => {
//             showChatBox(outcomeMessage, outcomeImage, 'Stella', true); // This call uses 'true' for shouldOverwrite to ensure it replaces the previous message
//         }, 2000); // Adjust the delay as necessary

//         // Reset quiz state for potential restart
//         isQuizStarted = false;
//         currentQuestionIndex = 0;
//         correctAnswersCount = 0;
//     }
// }

