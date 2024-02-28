function playerCharacter(x, y) {
    const element = newImage('Images/Aldo-static-south.gif') 
    element.style.zIndex = 1;

    let lastDirection = 'north'; // Sets the default direction when initialized

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


