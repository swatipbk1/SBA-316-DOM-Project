document.querySelector("form").onsubmit = (e) => {
    e.preventDefault();

    const inputValue = document.getElementById("value").value;

    if (!inputValue) {
        return;
    }

    const randomNumber = randomNumberGenerator();

    const iconElement = document.getElementById("icon");
    const resultElement = document.getElementById("result");
    const messageElement = document.getElementById("message");

    if (Number(inputValue) === randomNumber) {
        updateElement(iconElement, "&#10003", "green");
        updateElement(resultElement, "You guessed the number right!!");
    } else {
        updateElement(iconElement, "&#10006", "red");
        updateElement(resultElement, "You guessed the number wrong. Actual number is " + randomNumber + "!");
    }

    if (Number(inputValue) + 10 > randomNumber) {
        updateElement(messageElement, "You were close, but a little higher!");
    } else if (Number(inputValue) - 10 < randomNumber) {
        updateElement(messageElement, "You were close, but a little lower!");
    }

    // Additional functionalities
    const formElement = document.querySelector("form");
    formElement.reset(); // Reset the form after submission

    const bodyElement = document.body;
    bodyElement.style.backgroundColor = getRandomColor(); // Change background color using BOM

    const h1Element = document.querySelector("h1");
    const newHeaderText = "Guess The Number - " + randomNumber; // Modify text content
    updateElement(h1Element, newHeaderText);

    const infoParagraph = formElement.nextElementSibling; // Get the next sibling of the form

    if (infoParagraph) {
        // Check if the next sibling exists
        infoParagraph.textContent = `Your guess: ${inputValue}, Actual number: ${randomNumber}`;
    }

    const additionalInfoElement = document.getElementById("additionalInfo");
    updateElement(additionalInfoElement, "Additional Information: This is a simple number guessing game."); // Modify text content
};

const updateElement = (element, content, color) => {
    if (element) {
        element.innerHTML = content;
        if (color) {
            element.style.color = color;
        }
    }
};

const randomNumberGenerator = () => {
    return Math.floor(Math.random() * 100) + 1;
};

const getRandomColor = () => {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
};