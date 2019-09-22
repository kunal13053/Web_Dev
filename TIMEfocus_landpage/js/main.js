// DOM Elements
const time = document.getElementById('time');
const greeting = document.getElementById('greeting');
// name = document.getElementById('name');
const focus = document.getElementById('focus');

// Show Time
function showTime() {
    let today = new Date(),
        hour = today.getHours(),
        min = today.getMinutes(),
        sec = today.getSeconds();

    // Set AM or PM
    const amPm = hour >= 12 ? 'PM' : 'AM';

    // 12 hour Format
    hour = hour % 12 || 12;

    // Output Time
    time.innerHTML = `${hour}<span>:</span>${addZero(min)}<span>:</span>${addZero(sec)}`;

    setTimeout(showTime, 1000);
}

// Add Zeros
function addZero(n) {
    return (parseInt(n, 10) < 10 ? '0' : '') + n; //base 10
}

// Set Background and Greeting
function setBg_Greet() {
    let today = new Date(),
        hour = today.getHours();

    if (hour < 12) {
        // Morning
        document.body.style.backgroundImage = "url('./img/morning.jpg')";
        greeting.textContent = 'Good Morning';
    } else if (hour < 18) {
        // Afternoon
        document.body.style.backgroundImage = "url('./img/afternoon.jpg')";
        greeting.textContent = 'Good Afternoon';
    } else {
        // Evening
        document.body.style.backgroundImage = "url('./img/night.jpg')";
        greeting.textContent = 'Good Evening';
        name.textContent = 'Mouse';
        document.body.style.color = 'white';
    }
}

// Get Name
// function getName() {
//     if (localStorage.getItem('name') === null) {
//         name.textContent = '[Enter Name]';
//     } else {
//         name.textContent = localStorage.getItem('name')
//     }
//     document.body.style.color = 'white';
// }

// // Set Name
// function setName(e) {
//     if (e.type === 'keypress') {
//         // Make sure enter is pressed
//         if (e.which == 13 || e.keyCode == 13) { //13 is the key identifier code of 'ENTER'
//             localStorage.setItem('name', e.target.innerText)
//             name.blur();
//         }

//     } else {
//         localStorage.setItem('name', e.target.innerText)
//     }
// }

// Get Focus
function getFocus() {
    if (localStorage.getItem('focus') === null) {
        focus.textContent = '[Enter Focus]';
    } else {
        focus.textContent = localStorage.getItem('focus');
    }
}

// Set Focus

function setFocus(event) {
    console.log(event.target);
    // if (e.type === 'keypress') {
    // Make sure enter is pressed
    // if (e.which == 13 || e.keyCode == 13) { //13 is the key identifier code of 'ENTER'
    // localStorage.setItem('focus', e.target.innerText);
    focus.blur();
}

// } else {
// localStorage.setItem('focus', e.target.innerText)
// }
// }

// name.addEventListener('keypress', setName());
// name.addEventListener('blur', setName());

focus.addEventListener('keypress', setFocus());
// focus.addEventListener('blur', setFocus());


// Run
showTime();
setBg_Greet();
// getName();
getFocus();
