// Author: Kyan Keise
// Date: 15/11/2022
// Title: SpaceX project

// Declare menu button, overlay mobile menu and counter variables

const btn = document.getElementById('menu-btn');
const overlay = document.getElementById('overlay');
const menu = document.getElementById('mobile-menu');
const counters = document.querySelectorAll('.counter');
let scrollStarted = false;

// Listen for a click to activate navToggle

btn.addEventListener('click', navToggle);
document.addEventListener('scroll', scrollPage);

// Function which controls the side navigation Menu. Toggle open class to change Hamburger menu from 3 lines to X. Show Overlay class. Stop scroll when the overlay class showed

function navToggle() {
    btn.classList.toggle('open');
    overlay.classList.toggle('overlay-show');
    document.body.classList.toggle('stop-scrolling');
    menu.classList.toggle('show-menu');
}

// Controls when the 3 numbers will start to scroll as the user scrolls down.

function scrollPage() {
    const scrollPos = window.scrollY;
    if (scrollPos > 100 && !scrollStarted) {
        countUp();
        scrollStarted = true;
    } else if (scrollPos < 100 && scrollStarted) {
        reset();
        scrollStarted = false;
    }
}

// For each loop to Increment the 3 numbers on the Falcon page

function countUp() {
    counters.forEach((counter) => {
        counter.innerText = '0';

        const updateCounter = () => {
            // Get count target
            const target = +counter.getAttribute('data-target');
            // get the current counter value
            const c = +counter.innerText;

            // create an increment
            const increment = target / 100;

            // If counter is less than target add increment 
            if (c < target) {
                // Round up and set the counter value
                counter.innerText = `${Math.ceil(c + increment)}`;

                setTimeout(updateCounter, 75);
            } else {
                counter.innerText = target;

            }
        };
        updateCounter();
    });
}

// Resets the 3 counters on the Falcon page

function reset() {
    counters.forEach((counter) => counter.innerHTML = '0');
}
