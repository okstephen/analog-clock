function firstClock() {
const deg =6;
const hr = document.querySelector('#hr')
const mn = document.querySelector('#mn');
const sc = document.querySelector('#sc');

setInterval(() => {
    let day = new Date();

    let ms = day.getMilliseconds() * deg;
    let hh = day.getHours() * 30;
    let mm = day.getMinutes() * deg;
    let ss = day.getSeconds() *deg + ms /1000;

    hr.style.transform = `rotateZ(${(hh) + (mm /12)}deg)`;
    mn.style.transform = `rotateZ(${mm}deg)`;
    sc.style.transform = `rotateZ(${ss}deg)`;

}, 1)};
firstClock();

function updateClock() {
    const timeElement = document.getElementById("time");
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    const timeString = `${hours}:${minutes}:${seconds}`;
    timeElement.textContent = timeString;
}

setInterval(updateClock, 1000);
updateClock();



 const clockTypeSelect = document.getElementById("clockType");
const digitalClock = document.getElementById("clock");
const analogClock = document.getElementById("time");

// Function to show/hide clock types based on user selection
function toggleClockType() {
    const selectedOption = clockTypeSelect.value;
    if (selectedOption === "digital") {
        clock.style.display = "flex";
        time.style.display = "none";
        
    } else {
        clock.style.display = "none";
        time.style.display = "block";
        
    }
}

// Add an event listener to the dropdown to switch clock types
clockTypeSelect.addEventListener("change", toggleClockType);

// Initial call to set the clock type based on the selected option
toggleClockType();


