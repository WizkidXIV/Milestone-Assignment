function createBackgroundMusic(filePath) {
    const audioElement = document.createElement('audio');
    audioElement.setAttribute('src', filePath);
    audioElement.setAttribute('type', 'audio/ogg');
    audioElement.loop = true; // Enable looping
    document.body.appendChild(audioElement);

    // Play the music
    audioElement.play()
        .catch(error => {
            console.error("Playback failed:", error);
        });

    // Expose controls to play and pause the music from outside the function
    return {
        play: () => audioElement.play().catch(error => console.error("Playback failed:", error)),
        pause: () => audioElement.pause(),
        setVolume: (volume) => audioElement.volume = volume 
    };
}

// To play or resume the music
backgroundMusic.play();

// To set the volume (0.5 is 50% volume)
backgroundMusic.setVolume(0.1);
