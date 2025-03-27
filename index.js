
// Step 1: Select the theme button

let themeButton = document.getElementById('theme-button');

// Step 2: Write the callback function
const toggleLightMode = () => {
    document.body.classList.toggle("light-mode");
    document.html.classList.toggle("light-mode");
}

// Step 3: Register a 'click' event listener for the theme button
//             and tell it to use toggleDarkMode as its callback function

themeButton.addEventListener('click', toggleLightMode);
