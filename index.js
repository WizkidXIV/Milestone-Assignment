// Create the playable character
const pc = playerCharacter(350, 450)

// Create a non-playable character
const npc = newNonPlayableCharacter(300, 300)

// Example function to add the player character to the gameContainer
function addPlayerCharacter() {
    const gameContainer = document.getElementById('gameContainer');
    const playerCharacter = document.createElement('img');
    playerCharacter.src = 'Images/Aldo-static-south.gif'; // Path to your character image
    playerCharacter.style.position = 'absolute'; // Position absolutely within gameContainer
    playerCharacter.style.left = '400px'; // Half of gameContainer width
    playerCharacter.style.top = '300px'; // Half of gameContainer height
    gameContainer.appendChild(playerCharacter);
}

// Initialize the game
function initGame() {
    addPlayerCharacter();
    // Additional game setup...
}

// Call initGame when the page loads
window.onload = initGame;
