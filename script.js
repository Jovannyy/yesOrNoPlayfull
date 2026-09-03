const customizeButton = document.getElementById("customizeButton");
const customizeMenu = document.getElementById("customizeMenu");
const closeCustomize = document.getElementById("closeCustomize");

const girlfriendPreset = document.getElementById("girlfriendPreset");
const marriagePreset = document.getElementById("marriagePreset");
const customPreset = document.getElementById("customPreset");

const customOptions = document.getElementById("customOptions");
const customQuestion = document.getElementById("customQuestion");
const customYes = document.getElementById("customYes");
const customNo = document.getElementById("customNo");
const applyCustom = document.getElementById("applyCustom");

const question = document.getElementById("question");
const yesButton = document.getElementById("yesButton");
const noButton = document.getElementById("noButton");
const message = document.getElementById("message");

const urlParams = new URLSearchParams(window.location.search);
const customName = urlParams.get("name");

if (customName) {
    question.textContent =
        customName + ", will you be my girlfriend? ❤️";
}

let selectedOption = "girlfriend";


const messages = [
    "Are you sure? 🥺",
    "Wrong button 😂❤️",
    "Try again 😏",
    "Come onnn 🥺💕",
    "The Yes button is right there 👉🥰",
    "Nope, not happening 😂",
    "You really tried that? 😭❤️",
    "Just say yes already 🥺💕",
    "I'll keep waiting 😌❤️",
    "You know you want to 😂❤️"
];


// Open Customize menu
customizeButton.addEventListener("click", function() {
    customizeMenu.style.display = "flex";
});


// Close Customize menu
closeCustomize.addEventListener("click", function() {
    customizeMenu.style.display = "none";
    customOptions.style.display = "none";
});


// Reset the No button back beside Yes
function resetNoButton() {
    noButton.style.position = "";
    noButton.style.left = "";
    noButton.style.top = "";
}


// Show the question buttons again
function resetQuestionScreen() {
    yesButton.style.display = "";
    noButton.style.display = "";

    resetNoButton();

    message.textContent = "";
}


// Girlfriend preset
girlfriendPreset.addEventListener("click", function() {

    selectedOption = "girlfriend";

    question.textContent = "Will you be my girlfriend? ❤️";

    yesButton.textContent = "Yes 🥰";
    noButton.textContent = "No 😒";

    resetQuestionScreen();

    customizeMenu.style.display = "none";
    customOptions.style.display = "none";
});


// Marriage preset
marriagePreset.addEventListener("click", function() {

    selectedOption = "marriage";

    question.textContent = "Will you marry me? 💍❤️";

    yesButton.textContent = "YES! 🥰💍";
    noButton.textContent = "No 😳";

    resetQuestionScreen();

    customizeMenu.style.display = "none";
    customOptions.style.display = "none";
});


// Custom option
customPreset.addEventListener("click", function() {

    selectedOption = "custom";

    customOptions.style.display = "block";

    customQuestion.focus();
});


// Apply custom question
applyCustom.addEventListener("click", function() {

    const newQuestion = customQuestion.value.trim();
    const newYes = customYes.value.trim();
    const newNo = customNo.value.trim();

    if (newQuestion === "") {
        alert("Please enter your question ❤️");
        return;
    }

    question.textContent = newQuestion;

    yesButton.textContent =
        newYes || "Yes ❤️";

    noButton.textContent =
        newNo || "No 😒";

    resetQuestionScreen();

    customizeMenu.style.display = "none";
    customOptions.style.display = "none";
});


// Make the No button run away
function moveNoButton() {

    const buttonWidth = noButton.offsetWidth;
    const buttonHeight = noButton.offsetHeight;

    const padding = 15;

    const maxX =
        window.innerWidth - buttonWidth - padding;

    const maxY =
        window.innerHeight - buttonHeight - padding;

    const randomX =
        Math.floor(Math.random() * (maxX - padding)) + padding;

    const randomY =
        Math.floor(Math.random() * (maxY - padding)) + padding;

    noButton.style.position = "fixed";

    noButton.style.left =
        randomX + "px";

    noButton.style.top =
        randomY + "px";


    // Random cute message
    const randomMessage =
        messages[
            Math.floor(Math.random() * messages.length)
        ];

    message.textContent = randomMessage;
}


// Computer
noButton.addEventListener("mouseenter", moveNoButton);


// Phone / touchscreen
noButton.addEventListener("touchstart", function(event) {

    event.preventDefault();

    moveNoButton();
});


// YES button
yesButton.addEventListener("click", function() {

    resetNoButton();

    yesButton.style.display = "none";
    noButton.style.display = "none";


    if (selectedOption === "girlfriend") {

        question.textContent =
            "YAYYY!!! ❤️🥰";

        message.textContent =
            "It's official now 😂❤️";
    }

    else if (selectedOption === "marriage") {

        question.textContent =
            "YESSS!!! 💍❤️🥰";

        message.textContent =
            "Best answer ever ❤️";
    }

    else {

        question.textContent =
            "YAYYY!!! ❤️🥰";

        message.textContent =
            "I knew you would say yes 😂❤️";
    }
});


// Close customize menu if clicking outside the white box
customizeMenu.addEventListener("click", function(event) {

    if (event.target === customizeMenu) {

        customizeMenu.style.display = "none";
        customOptions.style.display = "none";
    }
});