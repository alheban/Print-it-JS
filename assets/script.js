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
let i = 0;
const BannerImage = document.querySelector('.banner-img');
const Bannertext = document.querySelector('#banner p');
let actuelSlide = 0;
  
/// creation evenement sur fleche

  arrowRight.addEventListener("click", () => {
	console.log("fleche d");
	actuelSlide++;
	if (actuelSlide >= slides.length) {
	  actuelSlide = 0; 
	  }
	  BannerImage.setAttribute('src', slides[actuelSlide].image);
	  Bannertext.innerHTML = slides[actuelSlide].tagLine;
	  actueldot();
	});

	arrowLeft.addEventListener("click", () => {
		console.log("fleche g");
		actuelSlide--;
	  if (actuelSlide < 0) {
		  actuelSlide = slides.length - 1;
		}
		BannerImage.setAttribute('src', slides[actuelSlide].image);
		Bannertext.innerHTML = slides[actuelSlide].tagLine;
		actueldot();
	  });


	// Fonction pour mettre à jour les classes des points en fonction de l'index actuel

/*-----------  V2 creer new element sur index.html /----------- 
------------------------------------------------------------------
------------------------------------------------------------------*/

// la première diapositive est celle en cours
slides[0].selected = true;

// Sélection de l'élément conteneur
const dotsConteneur = document.querySelector("main #banner .dots");

////mise a jours des point dot en fonction image
function actueldot() {
	for (let i = 0; i < slides.length; i++) {
	  const dot = dotsConteneur.children[i];
  
	  if (i === actuelSlide) {
		dot.classList.add("dot_selected");
	  } else {
		dot.classList.remove("dot_selected");
	  }
	}
  }  

// Boucle pour créer des divs associées aux éléments du tableau
// Création d'une nouvelle div
// Ajout d'une classe à la nouvelle div
// Définition du contenu HTML pour la nouvelle div en utilisant les propriétés de l'objet

for (i = 0; i < slides.length; i++) {
  const nouvelleDiv = document.createElement("div");
  nouvelleDiv.classList.add("dot");
  
  if (slides[i].selected) {
    nouvelleDiv.classList.add("dot_selected");
  }
  dotsConteneur.appendChild(nouvelleDiv);
}



/*
-----------  creer new element sur index.html /----------- 
------------------------------------------------------------------
------------------------------------------------------------------
 creer function qui fait :	
	- Crée un nouvel élément div
	- lui Définir une class
	- Défini du contenu HTML pour la div
	- Ajouter le nouvel élément à l'intérieur du conteneur dots 

function createlistDiv(container, className, content) {
	const nouvelleDiv = document.createElement('div');
	nouvelleDiv.classList.add('dot');
	nouvelleDiv.innerHTML = content;
	container.appendChild(nouvelleDiv);
  }

  /*   // creer conteneur et Sélectionner l'élément <main #banner .dots>
	// Utiliser la fonction pour créer et ajouter 4 divs
	// Ajouter le nouvel élément au html 

  const dotsElement = document.querySelector('main #banner .dots');
for (let i = 0; i < 4; i++) {
	createlistDiv(dotsElement, 'div', '');
  }
document.querySelector('main #banner .dots').appendChild(nouvelleDiv);*/
