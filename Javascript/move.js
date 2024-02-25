function move(element) {
    element.style.position = 'fixed';

    function moveToCoordinates(left, bottom) {
        element.style.left = left + 'px';
        element.style.bottom = bottom + 'px';
    }

    function moveWithArrowKeys(left, bottom, callback) {
        let direction = null;
        let x = left;
        let y = bottom;
        let speedMultiplier = 2; // Default speed

        element.style.left = x + 'px';
        element.style.bottom = y + 'px';

        function moveCharacter() {
            requestAnimationFrame(moveCharacter);

            let moveAmount = 1 * speedMultiplier; // Adjust move amount based on speedMultiplier

            if (direction === 'west') x -= 2;
            if (direction === 'north') y += 2;
            if (direction === 'east') x += 2;
            if (direction === 'south') y -= 2;

            element.style.left = x + 'px';
            element.style.bottom = y + 'px';
        }

        requestAnimationFrame(moveCharacter);

        document.addEventListener('keydown', function (e) {
            if (e.key === 'Shift') {
                speedMultiplier = 4; // Double the speed when Shift is held down
            }

            if (e.repeat) return;

            switch (e.key) {
                case 'ArrowLeft':
                    direction = 'west';
                    break;
                case 'ArrowUp':
                    direction = 'north';
                    break;
                case 'ArrowRight':
                    direction = 'east';
                    break;
                case 'ArrowDown':
                    direction = 'south';
                    break;
            }

            if (callback) callback(direction);
        });

        document.addEventListener('keyup', function (e) {
            if (e.key === 'Shift') {
                speedMultiplier = 2; // Reset to normal speed when Shift is released
            }

            if (["ArrowLeft", "ArrowUp", "ArrowRight", "ArrowDown"].includes(e.key)) {
                direction = null; // Stop moving when arrow keys are released
            }

            if (callback) callback(direction);
        });
    }

    return {
        to: moveToCoordinates,
        withArrowKeys: moveWithArrowKeys
    };
}
