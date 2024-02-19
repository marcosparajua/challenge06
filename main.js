const numbers = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
const suits = ["diamonds", "hearts", "clovers", "spades"];
const cards = [2, 3, 4, 5, 6, 7, 8, 9, 10, "Jack", "Queen", "King", "Ace"];

const getRandomValue = () => {
  return numbers[Math.floor(Math.random() * numbers.length)];
};

const getRandomSuit = () => {
  return suits[Math.floor(Math.random() * suits.length)];
};

const getRandomCard = () => {
  let value = getRandomValue();
  let suit = getRandomSuit();
  let currentCard = { value: value, suit: suit };
  if (currentCard.value < 11) {
    currentCard.face = currentCard.value;
  } else if (currentCard.value === 11) {
    currentCard.face = "Jack";
  } else if (currentCard.value === 12) {
    currentCard.face = "Queen";
  } else if (currentCard.value === 13) {
    currentCard.face = "King";
  } else if (currentCard.value === 14) {
    currentCard.face = "Ace";
  }
  return currentCard;
};

const userChoice = () => {
  let userCard = prompt("Elija mayor o menor.");
  while (userCard !== "mayor" && userCard !== "menor") {
    userCard = prompt("Debe elegir mayor o menor.");
  }
  return userCard;
};

const game = () => {
  let rounds = 0;
  let score = 0;
  let continuePlaying = true;
  while (rounds <= 10 && continuePlaying === true) {
    const showCard = getRandomCard();
    alert(`Su carta es ${showCard.face} of ${showCard.suit}`);
    let userBet = userChoice();
    let flipCard = getRandomCard();
    while (flipCard.value === showCard.value) {
      flipCard = getRandomCard();
    }
    alert(`La nueva carta es ${flipCard.face} of ${flipCard.suit}`);
    if (
      (userBet === "mayor" && flipCard.value > showCard.value) ||
      (userBet === "menor" && flipCard.value < showCard.value)
    ) {
      alert("Has ganado!");
      score += 1;
    } else {
      alert("Has perdido!");
    }
    rounds += 1;
    continuePlaying = confirm("¿Quieres continuar jugando?");
  }
  if (rounds >= 10) {
    alert(`Fin del juego
 rondas:${rounds}
 puntuación:${score}`);
  }
};

game();
