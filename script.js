console.log("Hello, Sujit!");
console.log("JavaScript connected successfully!");
alert("Welcome to Sujit's Portfolio!");

let studentName = "Cybersecurity Student";

console.log(studentName);
const course = "Cybersecurity";

console.log(course);

let age = 17;
age = 18;

console.log(age);

console.log("Testing JavaScript");

const maths = 90;
const computerScience = 95;

const total = maths + computerScience;

console.log(total);

let score = 95;

console.log(score > 90);
console.log(score < 90);
console.log(score === 95);

score = 65;

if (score >= 90) {
    console.log("Excellent!");
} else if (score >= 75) {
    console.log("Very Good!");
} else {
    console.log("Keep Practising!");
}

for (let i = 1; i <= 10; i++) {
    console.log(i);
}

function greetStudent() {
    console.log("Welcome, Sujit!");
}

greetStudent();

function multiply(a, b) {
    return a * b;
}

console.log(multiply(5, 4));

const welcomeButton = document.getElementById("welcomeButton");
const welcomeMessage = document.getElementById("welcomeMessage");

let clickCount = 0;

const clickCountDisplay = document.getElementById("clickCount");
const themeButton = document.getElementById("themeButton");

welcomeButton.addEventListener("click", function() {
   clickCount++;
clickCountDisplay.textContent = clickCount;
console.log("Button clicked:", clickCount);

    if (welcomeMessage.textContent === "Welcome to my portfolio!") {
        welcomeMessage.textContent = "Thanks for visiting my portfolio!";
    } else {
        welcomeMessage.textContent = "Welcome to my portfolio!";
    }
});

const savedTheme = localStorage.getItem("selectedTheme");

if (savedTheme === "light") {
    document.body.classList.add("light-mode");
    themeButton.textContent = "Switch to Dark Mode";
} else {
    themeButton.textContent = "Switch to Light Mode";
}

themeButton.addEventListener("click", function() {
    document.body.classList.toggle("light-mode");
    localStorage.setItem(
    "selectedTheme",
    document.body.classList.contains("light-mode") ? "light" : "dark"
);
   if (document.body.classList.contains("light-mode")) {
        themeButton.textContent = "Switch to Dark Mode";
    } else {
        themeButton.textContent = "Switch to Light Mode";
    }
});

const digitalClock = document.getElementById("digitalClock");
function updateClock() {
    const now = new Date();

    const currentTime = now.toLocaleTimeString();
    digitalClock.textContent = currentTime;

    const dateOptions = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric"
};

document.getElementById("currentDate").textContent =
    now.toLocaleDateString("en-IN", dateOptions);
}

updateClock();
setInterval(updateClock, 1000);

function updateGreeting() {
    const currentHour = new Date().getHours();

    const timeGreeting = document.getElementById("timeGreeting");

    if (currentHour < 12) {
        timeGreeting.textContent = "Good Morning!";
    } else if (currentHour < 17) {
        timeGreeting.textContent = "Good Afternoon!";
    } else {
        timeGreeting.textContent = "Good Evening!";
    }
}

updateGreeting();
setInterval(updateGreeting, 60000);

const nameButton = document.getElementById("nameButton");
const visitorName = document.getElementById("visitorName");
const personalGreeting = document.getElementById("personalGreeting");
const clearButton = document.getElementById("clearButton");
nameButton.disabled = true;
visitorName.addEventListener("input", function() {
    nameButton.disabled = visitorName.value.trim() === "";
});

nameButton.addEventListener("click", function() {
    const name = visitorName.value.trim();

   if (name === "") {
    personalGreeting.textContent = "⚠️ Please enter your name first!";
    personalGreeting.style.color = "#F59E0B";
} else {
    personalGreeting.textContent =
        "Welcome to my portfolio, " + name + "!";
    personalGreeting.style.color = "#22C55E";
}
});
visitorName.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        nameButton.click();
    }
});
clearButton.addEventListener("click", function() {
    visitorName.value = "";
    personalGreeting.textContent = "";
    visitorName.focus();
});