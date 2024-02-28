function createBackgroundMusic(filePath) {
    const audioElement = document.createElement('audio');
    audioElement.setAttribute('src', filePath);
    audioElement.setAttribute('type', 'audio/ogg');
    audioElement.loop = true; // Enables looping

    audioElement.play().catch(error => {
        console.error("Playback failed:", error);
    });

    // Appends the audio element to the document body
    document.body.appendChild(audioElement);
    return {
        play: () => audioElement.play().catch(error => console.error("Playback failed:", error)),
        pause: () => audioElement.pause(),
        setVolume: (volume) => { audioElement.volume = volume; } // Correct method to set volume
    };
}

const backgroundMusic = createBackgroundMusic('music/CT_Nina.ogg');

document.addEventListener('DOMContentLoaded', function () {
    // To plays or resumes the music after the DOM is fully loaded
    backgroundMusic.play();

    //Sets the volume (0.1 is 10% volume)
    backgroundMusic.setVolume(0.1);
    
    document.getElementById('playMusic').addEventListener('click', function () {
        backgroundMusic.play();
    });
});