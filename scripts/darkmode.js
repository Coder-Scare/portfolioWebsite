let darkMode = localStorage.getItem('darkMode');
const darkModeToggle = document.querySelector('#dark-mode-toggle');

const darkModeButton = document.querySelector('.dark-toggle');
const lightModeButton = document.querySelector('.light-toggle');
const darkHand = document.querySelector('.dark-click');
const lightHand = document.querySelector('.light-click');

// check if dark mode is enabled
// if enabled turn it off
// if disabled, turn it on
const enableDarkMode = () => {
    //1. add the class darkmode to the  body
    document.body.classList.add('darkmode');
    //2. update darkMode in localStorage
    localStorage.setItem('darkMode', 'enabled');
    darkModeButton.style.display = 'block';
    darkHand.style.display = 'block';
    lightModeButton.style.display = 'none';
    lightHand.style.display = 'none';
};

const disableDarkMode = () => {
    //1. add the class darkmode to the  body
    document.body.classList.remove('darkmode');
    //2. update darkMode in localStorage
    localStorage.setItem('darkMode', null);
    darkModeButton.style.display = 'none';
    darkHand.style.display = 'none';
    lightModeButton.style.display = 'block';
    lightHand.style.display = 'block';
};

if (darkMode === 'enabled') {
    enableDarkMode();
}

darkModeToggle.addEventListener('click', () => {
    darkMode = localStorage.getItem('darkMode');

    if (darkMode !== 'enabled') {
        enableDarkMode();
        console.log(darkMode);
    } else {
        disableDarkMode();
        console.log(darkMode);
    }
})