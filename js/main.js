const container = document.querySelector(".container");

// ciclo per creare i box contenenti i numeri

for (let i = 1; i <= 100; i++) {
    const card = document.createElement("div");

    // aggiungo la classe card per assicurarmi che tutti i numeri abbiano lo stesso stile

    card.className = "card";

    card.classList.add("card", "text-center", "align-center-div");

    if (i % 3 == 0 && i % 5 == 0) {
        card.innerHTML = "fizzbuzz";
        card.classList.add("fizzbuzz");
    } else if (i % 3 == 0) {
        card.innerHTML = "fizz";
        card.classList.add("fizz");
    } else if (i % 5 == 0) {
        card.innerHTML = "buzz";
        card.classList.add("buzz");
    } else {
        card.innerHTML = `${i}`;
        card.classList.add("number");
    }

    container.append(card);
}