// URLs das cartas (frente)
const cardsImages = {
    rock: "https://static.wikia.nocookie.net/yugioh/images/3/32/DarkMagician-LTGY-EN-Sc.png",
    paper: "https://static.wikia.nocookie.net/yugioh/images/e/e7/BlueEyesWhiteDragon-LTGY-EN-Sc.png",
    scissors: "https://static.wikia.nocookie.net/yugioh/images/4/4c/RedEyesBlackDragon-LTGY-EN-Sc.png"
};

// Opções
const choices = ["rock", "paper", "scissors"];
const cardsContainer = document.getElementById("cards-container");
const resultDiv = document.getElementById("result");

// Computador aleatório
function getComputerChoice() {
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

// Resultado do jogo
function getResult(player, computer) {
    if(player === computer) return "Empate!";
    if(
        (player === "rock" && computer === "scissors") ||
        (player === "paper" && computer === "rock") ||
        (player === "scissors" && computer === "paper")
    ) return "Você ganhou!";
    return "Computador ganhou!";
}

// Cria carta com animação flip
function createCard(name) {
    const cardDiv = document.createElement("div");
    cardDiv.classList.add("card");

    const frontImg = document.createElement("img");
    frontImg.src = cardsImages[name];
    frontImg.alt = name;

    const backDiv = document.createElement("div");
    backDiv.classList.add("back");
    backDiv.textContent = "?";

    cardDiv.appendChild(frontImg);
    cardDiv.appendChild(backDiv);

    return cardDiv;
}

// Mostra cartas
function showCards(playerChoice, computerChoice) {
    cardsContainer.innerHTML = "";

    const playerCard = createCard(playerChoice);
    const computerCard = createCard(computerChoice);

    cardsContainer.appendChild(playerCard);
    cardsContainer.appendChild(computerCard);

    // animação flip
    setTimeout(() => {
        playerCard.classList.add("flipped");
        computerCard.classList.add("flipped");
    }, 100);
}

// Jogar
function play(playerChoice) {
    const computerChoice = getComputerChoice();
    showCards(playerChoice, computerChoice);

    const winner = getResult(playerChoice, computerChoice);

    setTimeout(() => {
        resultDiv.textContent = winner;
    }, 700); // delay para esperar animação
}

// Eventos
document.getElementById("rock-button").addEventListener("click", () => play("rock"));
document.getElementById("paper-button").addEventListener("click", () => play("paper"));
document.getElementById("scissors-button").addEventListener("click", () => play("scissors"));
