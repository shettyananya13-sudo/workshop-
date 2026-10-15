const eventCards = document.querySelectorAll(".event-card");
const nameInput = document.querySelector('input[placeholder="Name"]');

eventCards.forEach(function (card) {
    const button = card.querySelector("button");

    button.addEventListener("click", function () {
        const eventName = card.querySelector("h4").textContent;

        alert("You selected: " + eventName);

        nameInput.focus();
    });
});


const form = document.querySelector(".register-form");

form.addEventListener("submit", function (event) {
    
    event.preventDefault();

    const name = document.querySelector(
        'input[placeholder="Name"]'
    ).value.trim();

    const email = document.querySelector(
        'input[placeholder="Email"]'
    ).value.trim();

    if (name === "" || email === "") {
        alert("Please enter your name and email.");
        return;
    }

    alert(
        "Registration submitted successfully!\n\n" +
        "Name: " + name + "\n" +
        "Email: " + email
    );

    console.log("Registration details:");
    console.log("Name:", name);
    console.log("Email:", email);

    form.reset();
});