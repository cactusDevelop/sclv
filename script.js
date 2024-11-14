const body = document.querySelector("body"),
      nav = document.querySelector("nav"),
      modeToggle = document.querySelector(".dark-light"),
      searchToggle = document.querySelector(".searchtoggle"),
      sidebarOpen = document.querySelector(".sidebar-open"),
      sidebarClose = document.querySelector(".sidebar-close"),
      imgGold = document.querySelector('.gold'),
      loadingText = document.querySelector('.loading-text'),
      videoHero = document.querySelector('.hero-video'),
      alex = document.querySelector('.alex');

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
    loadingText.style.display = 'none';
    imgGold.style.opacity = '1';
});
videoHero.addEventListener('canplay', () => {
    videoHero.style.display = 'block';
    videoHero.style.opacity = '1';
  });


// TEST AREA


// Smooth hero vid transition
//   videoHero.addEventListener('timeupdate', () => {
//     const threshold = 0.5;
//     if (videoHero.currentTime >= videoHero.duration - threshold) {
//       videoHero.style.opacity = '0';
//     }
//     if (videoHero.currentTime < threshold) {
//       videoHero.style.opacity = '1';
//     }
//   });


// Sparkle effect on click
// const container = document.querySelector('.image-container');
// const cloneCount = 5;
// const cloneDuration = 2440;

// function createClone() {
//     const clone = document.createElement('img');
//     clone.src = 'assets/sparkles.gif?${new Date().getTime()}';
//     clone.classList.add('gif-clone');

//     const randomSize = Math.random() * 50 + 20;
//     const randomTop = Math.random() * (container.clientHeight - randomSize);
//     const randomLeft = Math.random() * (container.clientWidth - randomSize);
//     clone.style.width = `${randomSize}px`;
//     clone.style.top = `${randomTop}px`;
//     clone.style.left = `${randomLeft}px`;

//     const randomDelay = Math.random() * cloneDuration;
//     setTimeout(() => {
//         container.appendChild(clone);
//     }, randomDelay);

//     setTimeout(() => {
//         if (container.contains(clone)) {
//             container.removeChild(clone);
//         }
//     }, cloneDuration + randomDelay);
// }

// for (let i = 0; i < cloneCount; i++) {
//     createClone();
// }

// setInterval(() => {
//     for (let i = 0; i < cloneCount; i++) {
//         createClone();
//     }
// }, cloneDuration);
