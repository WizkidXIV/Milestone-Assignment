function stella(x, y) {
    let element = newImage('images/Stella-static.gif');
    element.style.zIndex = 1;
    element.style.position = 'absolute';
    element.style.left = x + 'px';
    element.style.bottom = y + 'px';

    // Adds a click event listener to Stella
    element.addEventListener('click', function () {
        showChatBox('Alright Aldo! Time to test your dragon knowledge. If you get more than three questions wrong...I am afraid I won\'t be able to let you advance! Perhaps talking with our allies will help you prepare.',
            'images/stella-portrait.png', 'Stella');
    });

    return {
        element: element
    };
}

function robo(x, y) {
    let element = newImage('images/robo.gif');
    element.style.zIndex = 1;
    element.style.position = 'absolute';
    element.style.left = x + 'px';
    element.style.bottom = y + 'px';

    // Adds a click event listener to Robo
    element.addEventListener('click', function () {
        showChatBox('You can tell what element a dragon is immune to based on their color. Red dragons are immune to fire damage, blue dragons are immune to water damage.',
            'images/robo-portrait.png', 'Robo');
    });

    return {
        element: element
    };
}

function azumaru(x, y) {
    let element = newImage('images/azumaru.gif');
    element.style.zIndex = 1; 
    element.style.position = 'absolute';
    element.style.left = x + 'px';
    element.style.bottom = y + 'px';

    // Adds a click event listener to Azumaru
    element.addEventListener('click', function () {
        showChatBox('Dragons are flying type monsters. This means they are particularly vulnerable to arrows and thrown weapons like throwing axes or javelins.',
            'images/azumaru-portrait.png', 'Azumaru');
    });

    return {
        element: element
    };
}

function yuki(x, y) {
    let element = newImage('images/yuki.gif');
    element.style.zIndex = 1;
    element.style.position = 'absolute';
    element.style.left = x + 'px';
    element.style.bottom = y + 'px';

    // Adds a click event listener to Yuki
    element.addEventListener('click', function () {
        showChatBox('Most dragons have hardened scales. While bludgeoning damage isnt particularly good at doing damage against dragons, it can help to lower their defense!',
            'images/Yuki-portrait.png', 'Yuki');
    });

    return {
        element: element
    };
}