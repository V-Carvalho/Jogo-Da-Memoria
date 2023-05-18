const spanPlayer = document.querySelector(".player");
const timer = document.querySelector(".timer");
const grid =  document.querySelector(".grid");

const personagens = [
  "beth",
  "jerry",
  "jessica",
  "morty",
  "pessoa-passaro",
  "pickle-rick",
  "rick",
  "summer",
  "meeseeks",
  "scroopy",
];

const createElement = (tag, className) => {
  const element = document.createElement(tag);
  element.className = className;
  return element;
};

let primeiraCarta = "";
let segundaCarta = "";

const checandoGanhador = () => {
  const cartasDesabilitadas =
    document.querySelectorAll(".disabled-card"); 
  if (cartasDesabilitadas.length === 20) {
    clearInterval(this.loop);
    alert(`Parabéns ${spanPlayer.innerHTML}, você acertou todas as cartas e seu tempo foi de ${timer.innerHTML} segundos.` );
  }
};

const checandoCartas = () => {
  const primeiroPersonagem = primeiraCarta.getAttribute("data-character");
  const segundoPersonagem = segundaCarta.getAttribute("data-character");

  if (primeiroPersonagem === segundoPersonagem) {
    primeiraCarta.firstChild.classList.add("disabled-card");
    segundaCarta.firstChild.classList.add("disabled-card");

    primeiraCarta = "";
    segundaCarta = "";

    checandoGanhador();
  } else {
    setTimeout(() => {
      primeiraCarta.classList.remove("revelar");
      segundaCarta.classList.remove("revelar");

      primeiraCarta = "";
      segundaCarta = "";
    }, 500);
  }
};

const revealCard = ({ target }) => {
  if (target.parentNode.className.includes("revelar")) {
    return;
  }

  if (primeiraCarta === "") {
    target.parentNode.classList.add("revelar");
    primeiraCarta = target.parentNode;
  } else if (segundaCarta === "") {
    target.parentNode.classList.add("revelar");
    segundaCarta = target.parentNode;

    checandoCartas();
  }

  target.parentNode.classList.add("revelar");
};

const createCard = (personagens) => {
  const card = createElement("div", "card");
  const front = createElement("div", "face front");
  const back = createElement("div", "face back");

  front.style.backgroundImage = `url(../images/${personagens}.png)`;

  card.appendChild(front);
  card.appendChild(back);

  card.addEventListener("click", revealCard);

  card.setAttribute("data-character", personagens);

  return card;
};

const loadGame = () => {
  const duplicandoPersonagens = [
    ...personagens,
    ...personagens,
  ];

  const embaralhaArray = duplicandoPersonagens.sort(() => Math.random() - 0.5);

  embaralhaArray.forEach((personagem) => {
    const card = createCard(personagem);
    grid.appendChild(card); 
  });
};

const starTimer = () => {
  this.loop = setInterval(() => {
    const tempoCorrido =  +timer.innerHTML;
    timer.innerHTML = tempoCorrido + 1;
  }, 1000);
};

window.onload = () => {
  spanPlayer.innerHTML = localStorage.getItem("player");
  starTimer();
  loadGame();
};
