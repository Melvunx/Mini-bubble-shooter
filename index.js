const counterDisplay = document.querySelector("h2");
let counter = 0;

const bubbleMaker = () => {
  const bubble = document.createElement("span");

  bubble.classList.add("bubble");

  //Ajouter l'élément span
  document.body.appendChild(bubble);

  const size = Math.random() * 220 + 80 + "px";

  console.log("Taille aléatoire: ", size);
  bubble.style.width = size;
  bubble.style.height = size;

  bubble.style.top = Math.random() * 100 + 50 + "%";
  bubble.style.left = Math.random() * 100 + "%";

  const plusOrMinus = Math.random() > 0.5 ? 1 : -1;
  bubble.style.setProperty("--left", Math.random() * 100 * plusOrMinus + "%");

  // Générer une valeur aléatoire pour le hue-rotate
  const hueRotateValue = Math.random() * 360;
  bubble.style.setProperty("--hue-rotate-end", hueRotateValue + "deg");

  bubble.addEventListener("click", () => {
    counter++;
    console.log("Number: ", counter);
    //@ts-ignore
    counterDisplay.textContent = counter;
    if (counter === 10) {
      alert("You clicked 10 bubbles!");
    }
    bubble.remove();
  });

  setTimeout(() => {
    bubble.remove;
  }, 8000);
};

setInterval(bubbleMaker, 500);
