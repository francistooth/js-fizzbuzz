const container = document.querySelector(".container");

// ciclo per creare i box contenenti i numeri

for (let i = 0; i < 100; i++) {
    const card = document.createElement("div");

    // aggiungo la classe card per assicurarmi che tutti i numeri abbiano lo stesso stile

    card.className = "card";

    card.append(i);

    container.append(card);
}