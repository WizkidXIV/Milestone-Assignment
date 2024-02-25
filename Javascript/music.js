function createBackgroundMusic(filePath) {
    const audioElement = document.createElement('audio');
    audioElement.setAttribute('src', filePath);
    audioElement.setAttribute('type', 'audio/ogg');
    audioElement.loop = true; // Enable looping

    // Attempt to play the music and handle potential errors
    audioElement.play().catch(error => {
        console.error("Playback failed:", error);
    });

    // Append the audio element to the document body
    document.body.appendChild(audioElement);

    // Expose controls to play, pause, and set volume for the music from outside the function
    return {
        play: () => audioElement.play().catch(error => console.error("Playback failed:", error)),
        pause: () => audioElement.pause(),
        setVolume: (volume) => { audioElement.volume = volume; } // Correct method to set volume
    };
}

// Initialize background music using your custom function
const backgroundMusic = createBackgroundMusic('music/CT_Nina.ogg');

document.addEventListener('DOMContentLoaded', function () {
    // To play or resume the music, ensuring it's called after the DOM is fully loaded
    backgroundMusic.play();

    // To set the volume (0.1 is 10% volume)
    backgroundMusic.setVolume(0.1);
    
    document.getElementById('playMusic').addEventListener('click', function () {
        backgroundMusic.play();
    });
});