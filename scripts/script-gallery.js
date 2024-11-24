const highVideo = document.querySelector('.high-vid'),
      playBtn = document.querySelector('.play-pause-btn'),
      stopBtn = document.querySelector('.stop-btn'),
      volumeSlider = document.querySelector('.volume-silder'),
      progressBar = document.querySelector('.progress-bar');


playBtn.addEventListener('click', function(){
    if(highVideo.paused){
        highVideo.play();
        playBtn.innerHTML = "PAUSE"
    }else{
        highVideo.pause();
        playBtn.innerHTML = "PLAY"
    }
})

stopBtn.addEventListener('click', function(){
    highVideo.pause();
    highVideo.currentTime = 0;
})

volumeSlider.addEventListener('input', function(){
    highVideo.volume = volumeSlider.value;
})

highVideo.addEventListener('timeupdate', function(){
    let progress = (highVideo.currentTime/highVideo.duration)*100;
    progressBar.value = progress
})
progressBar.addEventListener('click', function(e){
    let progressWidth = progressBar.clientWidth;
    let clickedPos = e.offsetX;
    let clickedTime = (clickedPos/progressWidth)*highVideo.duration;
    highVideo.currentTime = clickedTime;
})
