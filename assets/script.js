///////// variable slides tableau

const slides = [
  {
    image: "./assets/images/slideshow/slide1.jpg",
    tagLine: "Impressions tous formats <span>en boutique et en ligne</span>",
  },
  {
    image: "./assets/images/slideshow/slide2.jpg",
    tagLine:
      "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
  },
  {
    image: "./assets/images/slideshow/slide3.jpg",
    tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
  },
  {
    image: "./assets/images/slideshow/slide4.png",
    tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
  },
];

///////// variables
const arrowLeft = document.querySelector(".arrow_left");
const arrowRight = document.querySelector(".arrow_right");
const BannerImage = document.querySelector(".banner-img");
const Bannertext = document.querySelector("#banner p");
let actuelSlide = 0;

/// creation evenement sur fleche

arrowRight.addEventListener("click", () => {
  console.log("fleche d");
  actuelSlide++;
  if (actuelSlide >= slides.length) {
    actuelSlide = 0;
  }
  UpdateContenu();
});

arrowLeft.addEventListener("click", () => {
  console.log("fleche g");
  actuelSlide--;
  if (actuelSlide < 0) {
    actuelSlide = slides.length - 1;
  }
  UpdateContenu();
});

function UpdateContenu() {
  BannerImage.setAttribute("src", slides[actuelSlide].image);
  Bannertext.innerHTML = slides[actuelSlide].tagLine;
  actueldot();
}

// Sélection de l'élément conteneur
const dotsConteneur = document.querySelector("main #banner .dots");

////mise a jours des point dot en fonction image
function actueldot() {
  slides.forEach((slide, index) => {
    const dot = dotsConteneur.children[index];
    dot.classList.toggle("dot_selected", index === actuelSlide);

    /* if (index === actuelSlide) {
		dot.classList.add("dot_selected");
	  } else {
		dot.classList.remove("dot_selected");
	  }*/
  });
}

slides.forEach((slide, index) => {
  const nouvelleDiv = document.createElement("div");
  nouvelleDiv.classList.add("dot");

  if (index === actuelSlide) {
    nouvelleDiv.classList.add("dot_selected");
  }

//dot cliquable ///
  nouvelleDiv.addEventListener("click", () => {
    console.log("click dot");
    actuelSlide = index;
    UpdateContenu();
  });

  dotsConteneur.appendChild(nouvelleDiv);
});
