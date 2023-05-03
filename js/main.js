// VARIABILI
const mainEl = document.querySelector(".main");

// Array di oggetti
const images = [
    {
        image: '01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: '02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: '03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: '04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: '05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];


// creo un ciclo sull'array di oggetti
images.forEach((element, i, array) => {
    const img = images[i];
    const imgPath = "../img";
    let viewImage = ``;
    if (i == 0) {
        viewImage += `<div class="container visible">`;
        
    } else{
        viewImage = `<div class="container">`;
    }
    viewImage += `<h2>${img.title}</h2>`;
    viewImage += `<p>${img.text}</p>`;
    viewImage += `<img src="${imgPath}/${img.image}" alt="${img.title}" />`;
    viewImage += `</div>`;
    mainEl.innerHTML += viewImage;
}); 

const btnNext = document.getElementById("right");
const btnBack = document.getElementById("left");
const slide = document.querySelectorAll(".container");
let currentImg = 0;

// al click rimuovo all'img corrente che ha valore 0 la classe visible, incremento di 1 la img corrente alla quale poi aggiungerò la classe visible.
btnNext.addEventListener("click", function () {

    slide[currentImg].classList.remove("visible");

    currentImg++;
    // se l'img corrente ha lo stesso valore della length dell'array allora l'immagine corrente avrà valore 0, in questo modo ho un ciclo infinito
    if (currentImg == slide.length) {
        currentImg = 0;
    }

    slide[currentImg].classList.add("visible");

});

// al click rimuovo all'img corrente che ha valore 0 la classe visible, decremento di 1 la img corrente alla quale poi aggiungerò la classe visible.
btnBack.addEventListener("click", function () {

    slide[currentImg].classList.remove("visible");

    currentImg--;
    // se l'img corrente è min di 0 allora l'immagine corrente avrà valore (lunghezza dell'array -1 ), in questo modo ho un ciclo infinito
    if (currentImg < 0) {
        currentImg = slide.length -1;
    }

    slide[currentImg].classList.add("visible");

});

