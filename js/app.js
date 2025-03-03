const flêcheDeDroite = document.querySelector(".droite");
const flêcheDeGauche = document.querySelector(".gauche");
const image1 = document.querySelector(".image1");
const image2 = document.querySelector(".image2");
const image3 = document.querySelector(".image3");
const image4 = document.querySelector(".image4");

console.log(flêcheDeGauche);

const listeImage = [image1, image2, image3, image4];
let result = 0;

console.log(listeImage[1]);

let intervalId;

intervalId = setInterval(changeImage, 10000);

function handleCarrousel(direction = "right") {
  if (direction === "right") {
    result += 1;
    if (result > 3) {
      result = 0;
      listeImage[3].classList.add("hidden");
      listeImage[result].classList.remove("hidden");
    } else {
      listeImage[result - 1].classList.add("hidden");
      listeImage[result].classList.remove("hidden");
    }
  } else {
    result -= 1
    if (result < 0) {
        result = 3;
        listeImage[0].classList.add("hidden");
        listeImage[result].classList.remove("hidden");
      } else {
        listeImage[result + 1].classList.add("hidden");
        listeImage[result].classList.remove("hidden");
      }
  }
}




flêcheDeDroite.addEventListener("click", function () {
  clearInterval(intervalId);
  intervalId = setInterval(handleCarrousel, 10000);

  handleCarrousel("right");
});

flêcheDeGauche.addEventListener("click", function () {
  clearInterval(intervalId);
  intervalId = setInterval(handleCarrousel, 10000);

  handleCarrousel("left")
});
