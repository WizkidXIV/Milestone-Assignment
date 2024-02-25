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
        chatBox.style.backgroundColor = 'rgba(0, 0, 139, 0.7)'; // Dark blue with transparency
        chatBox.style.color = 'white'; // White text
        chatBox.style.padding = '10px';
        chatBox.style.border = '2px solid white'; // White border
        chatBox.style.borderRadius = '5px';
        chatBox.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        chatBox.style.display = 'flex';
        chatBox.style.flexDirection = 'row';
        chatBox.style.alignItems = 'center';
        chatBox.style.maxWidth = '80%'; // Prevent the chat box from being too wide
        chatBox.style.boxSizing = 'border-box'; // Include padding and border in the element's total width and height
        chatBox.style.zIndex = 100; // Ensure chatBox is in front
        document.body.appendChild(chatBox);

        // Portrait
        let portrait = document.getElementById('characterPortrait');
        if (!portrait) {
            portrait = document.createElement('img');
            portrait.id = 'characterPortrait';
            portrait.style.position = 'fixed';
            portrait.style.bottom = '20px';
            portrait.style.left = 'calc(35% - 200px)'; // Adjust position to not overlap the chat box directly
            portrait.style.width = '250px'; // Set your desired width
            portrait.style.height = 'auto'; // Maintain aspect ratio
            portrait.style.borderRadius = '10px'; // Optional styling
            portrait.style.zIndex = 99; // Ensure portrait is behind the chatBox
            document.body.appendChild(portrait);
        }
        portrait.src = portraitUrl;

        // Message container
        const messageContainer = document.createElement('div');
        messageContainer.id = 'messageContainer';
        chatBox.appendChild(messageContainer);

        // Close button
        const closeButton = document.createElement('button');
        closeButton.innerText = 'Close';
        closeButton.style.color = 'white';
        closeButton.style.background = 'red';
        closeButton.style.border = 'none';
        closeButton.style.padding = '5px 10px';
        closeButton.style.marginLeft = 'auto'; // Pushes it to the far right
        closeButton.style.cursor = 'pointer';
        closeButton.onclick = function () {
            chatBox.style.display = 'none'; // Hide the chat box
            portrait.style.display = 'none'; // Also hide the portrait
        };
        chatBox.appendChild(closeButton);
    } else {
        // If the chatBox already exists, ensure its z-index is set correctly
        chatBox.style.zIndex = 100;
    }

    const portrait = document.getElementById('characterPortrait');
    portrait.style.display = 'block'; // Make sure the portrait is shown when chat box is displayed
    portrait.src = portraitUrl; // Update the portrait image

    const nameSpan = `<span style="color: yellow;">${characterName}:</span>`;
    const messageContainer = document.getElementById('messageContainer');
    messageContainer.innerHTML = `${nameSpan} ${message}`; // Combine styled name with message

    if (!isQuizStarted) {
        messageContainer.innerHTML = `<span style="color: yellow;">${characterName}:</span> ${message}`;
        const startButton = document.createElement('button');
        startButton.innerText = "I'm ready!";
        startButton.onclick = function () {
            isQuizStarted = true; // Update the state to indicate the quiz is starting
            showChatBox("The quiz will now begin.", portraitUrl, characterName); // Modify this as needed to actually start your quiz
            // Here you would actually start showing quiz questions
        };
        messageContainer.appendChild(startButton);
    } else {
        // Logic to display quiz questions or handle quiz state
    }
    
    // Ensure the chat box is visible
    chatBox.style.display = 'flex';
}
