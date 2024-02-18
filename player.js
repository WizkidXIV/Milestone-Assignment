function playerCharacter(x, y) {
    const element = newImage('Images/Aldo-static-south.gif') // Assuming default facing is south
    element.style.zIndex = 1;

    let lastDirection = 'south'; // Default direction when initialized

    function handleDirectionChange(direction) {
        if (direction) {
            lastDirection = direction; // Update the lastDirection every time there is a movement
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
                element.src = 'Images/Aldo-static-south.gif'; // Default static image
        }
    }

    move(element).withArrowKeys(x, y, handleDirectionChange)

    return {
        element: element
    }
}
