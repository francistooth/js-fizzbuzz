const container = document.querySelector(".container");

// ciclo per creare i box contenenti i numeri

for (let i = 0; i < 100; i++) {
    console.log(i+1);
    const card = `<div class="card"> ${i+1} </div>`;
    console.log(card);
}