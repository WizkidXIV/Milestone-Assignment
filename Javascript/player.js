function playerCharacter(x, y) {
    const element = newImage('Images/Aldo-static-south.gif') 
    element.style.zIndex = 1;

    let lastDirection = 'north'; // Default direction when initialized

    function handleDirectionChange(direction) {
        if (direction) {
            lastDirection = direction; // Updates lastDirection every time there is movement
        }

        switch (lastDirection) {
            case 'west':
                element.src = direction ? 'Images/Aldo-left.gif' : 'Images/Aldo-static-west.gif';
                break;
            case 'north':
                element.src = direction ? 'Images/Aldo-up.gif' : 'Images/Aldo-static-north.gif';
                break;
            case 'east':
                element.src = direction ? 'Images/Aldo-right.gif' : 'Images/Aldo-static-right.gif';
                break;
            case 'south':
                element.src = direction ? 'Images/Aldo-down.gif' : 'Images/Aldo-static-south.gif';
                break;
            default:
                element.src = 'Images/Aldo-static-north.gif'; // Default static image
        }
    }

    move(element).withArrowKeys(x, y, handleDirectionChange)

    return {
        element: element
    }
}

function updateViewport(characterX, characterY) {
    const gameContainer = document.getElementById('gameContainer'); 
    if (!gameContainer) return;

    // Calculates the center position of the viewport
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;

    // Adjusts the gameContainer scroll to keep the character in the center of the viewport
    gameContainer.scrollLeft = characterX - centerX;
    gameContainer.scrollTop = characterY - centerY;
}

function handleDirectionChange(direction) {

    // Updates the viewport position after character has moved
    updateViewport(element.offsetLeft, element.offsetTop);
}

// document.addEventListener('keydown', function (event) {
//     if (event.code === 'Space') {
//         // Check if the player is next to Stella
//         if (isPlayerNextToStella()) {
//             // Display the chat window
//             showChatWindow();
//         }
//     }
// });

// function isPlayerNextToStella() {
//     const playerRect = playerCharacter.element.getBoundingClientRect();
//     const stellaRect = stella.element.getBoundingClientRect();

//     // Define a proximity threshold (e.g., 50 pixels)
//     const proximityThreshold = 50;

//     // Check if within proximity on either the X or Y axis
//     const isCloseX = Math.abs(playerRect.right - stellaRect.left) <= proximityThreshold ||
//         Math.abs(playerRect.left - stellaRect.right) <= proximityThreshold;
//     const isCloseY = Math.abs(playerRect.bottom - stellaRect.top) <= proximityThreshold ||
//         Math.abs(playerRect.top - stellaRect.bottom) <= proximityThreshold;

//     return isCloseX && isCloseY;
// }

// function showChatWindow() {
//     let chatWindow = document.getElementById('chatWindow');
//     if (!chatWindow) {
//         chatWindow = document.createElement('div');
//         chatWindow.id = 'chatWindow';
//         chatWindow.style.position = 'fixed';
//         chatWindow.style.bottom = '20px';
//         chatWindow.style.left = '50%';
//         chatWindow.style.transform = 'translateX(-50%)';
//         chatWindow.style.backgroundColor = 'white';
//         chatWindow.style.padding = '20px';
//         chatWindow.style.borderRadius = '10px';
//         chatWindow.style.boxShadow = '0 4px 6px rgba(0,0,0,0.1)';
//         chatWindow.innerText = 'Stella: Hello there! How can I help you today?';

//         // Close button
//         const closeButton = document.createElement('button');
//         closeButton.innerText = 'Close';
//         closeButton.onclick = function () {
//             chatWindow.remove();
//         };

//         chatWindow.appendChild(closeButton);
//         document.body.appendChild(chatWindow);
//     }
// }
