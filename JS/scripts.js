const url =  "https://localhost:7032/pizzas"

const loadingElement = document.querySelector("#loading");
const pizzaContainer = document.querySelector("#pizzas-container");

async function getAllPizzas() {
    const response = await fetch(url);

    console.log(response);
} 
getAllPizzas();