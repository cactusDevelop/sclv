const imgGold = document.querySelector('.gold'),
      loadingText = document.querySelector('.loading-text'),
      videoHero = document.querySelector('.hero-video');

// GOLD LOADING
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

// body.addEventListener('click', function(event){
//     let spark = document.createElement('div');
//     spark.classList.add('spark');
//     body.appendChild(spark); // Meh

//     spark.style.top = (event.clientY - body.offsetTop) + 'px';
//     spark.style.left = (event.clientX - body.offsetLeft) + 'px';
//     spark.style.filter = 'hue-rotate('+Math.random()*360+'deg)';
//     for(var i =0; i <= 7; i++){
//         let span = document.createElement('span');
//         span.style.transform = 'rotate('+(i * 45)+'deg)';
//         spark.appendChild(span);
//     }
    
//     setTimeout(function(){
//         spark.remove();
//     }, 1000);
// })

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
