const body = document.querySelector("body"),
      nav = document.querySelector("nav"),
      modeToggle = document.querySelector(".dark-light"),
      searchToggle = document.querySelector(".searchtoggle"),
      sidebarOpen = document.querySelector(".sidebar-open"),
      sidebarClose = document.querySelector(".sidebar-close"),
      imgGold = document.querySelector('.gold'),
      loadingText = document.querySelector('.loading-text');

let getMode = localStorage.getItem("mode");

// DARK MODE
if(getMode){
    if(getMode === "dark-mode"){
        body.classList.add("dark");
    }
}else{
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
        body.classList.add("dark");
    }
    console.log("getMode false");
}
modeToggle.addEventListener("click", () => {
    body.classList.toggle("dark");

    if(!body.classList.contains("dark")){
        localStorage.setItem("mode", "light-mode");
    }else{
        localStorage.setItem("mode", "dark-mode");
    }
})

// SEARCH BUTTON
searchToggle.addEventListener("click", () => {
    searchToggle.classList.toggle("active");
})

// MENU BUTTON
sidebarOpen.addEventListener("click", () =>{
    nav.classList.add("active");
})
body.addEventListener("click", e =>{
    let clickedElm = e.target;
    if(!clickedElm.classList.contains("sidebar-open") && !clickedElm.classList.contains("menu")){
        nav.classList.remove("active");
    }
})

// NAVMENU ANIM
window.addEventListener("scroll", function(){
    var header = this.document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
})

// LOADING
imgGold.addEventListener('load', () => {
    loadingText.style.opacity = '0';
    imgGold.style.opacity = '1';
});
const video = document.querySelector('.hero-video');

video.addEventListener('canplaythrough', () => {
  loadingText.style.opacity = '0';
  video.style.display = 'block';
  video.style.opacity = '1';
});

video.addEventListener('error', () => {
  loadingText.style.opacity = '0'; // Cache le texte de chargement sans afficher la vidéo
});


// const container = document.querySelector('.image-container');
// const cloneCount = 5; // Nombre de clones
// const cloneDuration = 2440; // Durée de l'animation du GIF en millisecondes (ajustez selon le GIF)

// // Fonction pour créer un clone avec des propriétés aléatoires
// function createClone() {
//     const clone = document.createElement('img');
//     clone.src = `assets/sparkles.gif?${new Date().getTime()}`; // Ajout d'un timestamp pour chaque clone
//     clone.classList.add('gif-clone');

//     // Taille et position aléatoires dans les limites du conteneur
//     const randomSize = Math.random() * 50 + 20; // Taille entre 20px et 70px
//     const randomTop = Math.random() * (container.clientHeight - randomSize); // Position verticale
//     const randomLeft = Math.random() * (container.clientWidth - randomSize); // Position horizontale
//     clone.style.width = `${randomSize}px`;
//     clone.style.top = `${randomTop}px`;
//     clone.style.left = `${randomLeft}px`;

//     // Délai d’apparition aléatoire pour différer les animations
//     const randomDelay = Math.random() * cloneDuration;
//     setTimeout(() => {
//         container.appendChild(clone);
//     }, randomDelay);

//     // Suppression du clone après une boucle complète d'animation
//     setTimeout(() => {
//         if (container.contains(clone)) {
//             container.removeChild(clone);
//         }
//     }, cloneDuration + randomDelay);
// }

// // Génère tous les clones dès le départ
// for (let i = 0; i < cloneCount; i++) {
//     createClone();
// }

// // Régénération continue des clones après leur disparition
// setInterval(() => {
//     for (let i = 0; i < cloneCount; i++) {
//         createClone();
//     }
// }, cloneDuration);
